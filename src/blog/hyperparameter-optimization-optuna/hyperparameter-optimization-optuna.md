---
title: "Hyperparameter Optimization with Optuna: Tips and Tricks"
datePosted: 2020-12-20
---

[toc]

## Introduction

Is your machine learning model overfitting? Underfitting? Take a look at your hyperparameters! While parameters are fit from the data, hyperparameters are typically set by you. Hyperparameter optimization helps you find the best hyperparameters for your model. 

[Optuna](https://optuna.org/) is an easy-to-use hyperparameter optimization framework. It provides multiple methods of  optimization including multivariate Tree-structured Parzen Estimator (TPE) and Hyperband. Theoretically, they can be combined into Bayesian Optimization and Hyperband (BOHB). However, according to this [post](https://medium.com/optuna/multivariate-tpe-makes-optuna-even-more-powerful-63c4bfbaebe2), due to implementation differences, combining them in Optuna doesn't seem to improve results.

## Optuna Tips and Tricks

Optuna's documentation is pretty good, so I'll avoid redundantly posting the basics here. Instead I'll show you some tips and tricks so you can get the most out of Optuna.

### Multivariate TPE

In order to use multivariate TPE, set the TPE sampler parameter `multivariate`  to `True`:

```python
study = optuna.create_study(sampler=optuna.samplers.TPESampler(multivariate=True))
```

### Hyperband

To use hyperband, set the pruner to the HyperbandPruner (and set your hyper-hyperparameters):

```python
study = optuna.create_study(pruner=optuna.pruners.HyperbandPruner(
    min_resource=1, reduction_factor=3
))
```

To get the most out of the hyperband pruner, read the [documentation](https://optuna.readthedocs.io/en/latest/reference/generated/optuna.pruners.HyperbandPruner.html). Specifically, they recommend setting a larger number of trials or timeout.

### Show Fewer Logs

Running several rounds of hyperparameter tuning and seeing too many log messages? Just set your `optuna.logging` verbosity level:

```python
if verbose:        
    optuna.logging.set_verbosity(optuna.logging.DEBUG)
else:
    optuna.logging.set_verbosity(optuna.logging.ERROR)
```

### Initialize Study With Certain Values

You can speed up hyperparameter tuning if you already know some good hyperparameter values. Just use the `enqueue_trial` function before running `study.optimize()`. For example, for a random forest classifier, you could use:

```python
study.enqueue_trial({"max_depth": 10,
                     "n_estimators": 100,
                     "min_samples_leaf": 1,
                     "min_samples_split": 2,}) 
study.optimize(objective, n_trials=75)
```

### After Optimization

To get your best parameters back, just use `study.best_params`. Continuing from the previous example, to rebuild the Random Forest Classifier with the best parameters after hyperparameter optimization, use:

```python
clf = RandomForestClassifier(max_depth=study.best_params["max_depth"], 
                             n_estimators=study.best_params["n_estimators"], 
                             min_samples_leaf=study.best_params["min_samples_leaf"],
                             min_samples_split=study.best_params["min_samples_split"])
```

Save your study trials using `trials_dataframe`:

```python
df = study.trials_dataframe()
```



## Objective Function Choice

For certain machine learning model implementations where you have less control over the optimizer (ex. sklearn's Gaussian processes), one way to regain control is through setting your own loss/cost/objective functions. In this case you may find yourself optimizing the parameters, not necessarily the hyperparameters.

### Reducing Overfitting

For example, to reduce overfitting, you could use cross-validated scores in your Optuna objective function. One measure of overfitting is when the training score is much higher than the testing score. By setting the objective function to negative cross-validated test scores, you can regularize your model. Make sure you cross-validate only on the training set (splitting the training into more training and test sets) and not your final test set.

Another possibility is weighting the difference between cross-validated training scores and test scores vs the test score itself. For example, for accuracy scores, a possible objective function is

```python
np.sqrt((mean_test - mean_train)**2) + 4 * (1 - mean_test)
```

In this case the RMSE of the difference between testing and training is weighted four times less than the test accuracy. You could make up your own objective functions, maybe using other metrics such as log loss instead. The possibilities are endless!

