---
title: "My Windows Setup: Starting From a Fresh Install"
datePosted: 2020-12-06
---

[toc]



Welcome to my Windows setup! Recently I reinstalled Windows on a higher-capacity Samsung SSD, removing the old one. Here I'll list the programs I install as well as the configuration steps I perform.

In general, before a major hardware change, I back up everything if possible. I put the old SSD in a Sabrent USB enclosure for convenient access to backed-up files.

I'm planning to update this article over the next few days, as I run into issues and remember more programs to install. 

## Installations

### First Programs

The first thing I install is [Scoop](https://scoop.sh/). Then I use Scoop to install almost everything else. Scoop doesn't automatically add things to the context menu, which I like since my context menu tends to get too cluttered. I add the items I want manually. 

To it easier to associate files with Scoop-installed programs, I saw that the "open with" context menu item points to `C:\Program Files`. I just added two shortcuts to the Program Files folder that I created on the desktop — the first to `C:\Users\USERNAME\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Scoop Apps` and the second to `C:\Users\mirum\scoop\apps`

Things that I can't find on Scoop, I use [Chocolatey](https://chocolatey.org/). I've found that Chocolatey doesn't clean up as easily so I try not to install too many things with it.

### Scoop

I've categorized the programs I install with Scoop here in no particular order. The Scoop name for installing is next to the main software name. Note that git has to be installed before everything else.

- Developer Tools

  - [git](https://git-scm.com/) `git`
  - [Gnu on Windows](https://github.com/bmatzelle/gow) `gow`
  - [Node.js](https://nodejs.org/en/) `nodejs` [^nodejs]
  - [Sublime Text](https://www.sublimetext.com/) `sublime-text`
  - [Visual Studio Code](https://code.visualstudio.com/) `vscode`
  - [Anaconda](https://www.anaconda.com/products/individual) `anaconda3`

- General Tools

  - [7-Zip](https://www.7-zip.org/) `7zip`
  - [Bandizip](https://en.bandisoft.com/bandizip/) `bandizip` [^bandizip]
  - [Bulk Crap Uninstaller](https://www.bcuninstaller.com/) `bulk-crap-uninstaller` [^bcu]
  - [Bulk Rename Utility](https://www.bulkrenameutility.co.uk/) `bulk-rename-utility`
  - [espanso](https://espanso.org/) `espanso`
  - [Everything](https://www.voidtools.com/) `everything`
  - [Geek Uninstaller](https://geekuninstaller.com/) `geekuninstaller`
  - [HashCheck](https://github.com/gurnec/HashCheck) `hashcheck`
  - [Keypirinha](https://keypirinha.com/) `keypirinha`
  - [LaTeX](https://miktex.org/) `latex` [^latex]
  - [LockHunter](https://lockhunter.com/) `lockhunter-np` [^lockhunter]
  - [Microsoft Powertoys](https://github.com/microsoft/PowerToys) `powertoys-np`
  - [Pandoc](https://pandoc.org/) `pandoc`
  - [pandoc-crossref filter](https://github.com/lierdakil/pandoc-crossref) `pandoc-crossref`
  - [Pixie](http://www.nattyware.com/pixie.php) `pixie`
  - [ShareX](https://getsharex.com/) `sharex`
  - [ShellMenuView](https://www.nirsoft.net/utils/shell_menu_view.html) `shellmenuview`
  - [Sysinternals](https://docs.microsoft.com/en-us/sysinternals/) `sysinternals`
  - [WizTree](https://wiztreefree.com/) `wiztree`

- Web Browsers

  - [Firefox](https://www.mozilla.org/en-US/firefox/new/) `firefox`
  - [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) `firefox-developer`
  - [Google Chrome](https://www.google.com/chrome/) `googlechrome`
  - [Vivaldi](https://vivaldi.com/) `vivaldi`

- Notes and Research

  - [Anki](https://apps.ankiweb.net/) `anki`
  - [Typora](https://typora.io/) `typora`
  - [Zettlr](https://www.zettlr.com/) `zettlr`
  - [Zotero](https://www.zotero.org/) `zotero`

- Remote

  - [Carnac](http://code52.org/carnac/) `carnac`
  - [Discord](https://discord.com/) `discord`
  - [Slack](https://slack.com/) `slack`
  - [OBS Studio](https://obsproject.com/) `obs-studio`
  - [Skype](https://www.skype.com/en/) `skype`
  - [Zoom](https://zoom.us/) `zoom`

- Editing

  - [paint.net](https://www.getpaint.net/) `paint.net`
  - [GIMP](https://www.gimp.org/) `gimp`
  - [Inkscape](https://inkscape.org/) `inkscape`

- Media

  - [Calibre](https://calibre-ebook.com/) `calibre-normal`[^calibre]
  - [mpv](https://mpv.io/) `mpv`
  - [mpv.net](https://github.com/stax76/mpv.net) `mpv.net` [^mpv.net] 
  - [VLC](https://www.videolan.org/vlc/index.html) `vlc`

- Misc

  - [LibreOffice Fresh](https://www.libreoffice.org/) `libreoffice-fresh` Not working at the moment
  - [NVIDIA Profile Inspector](https://github.com/Orbmu2k/nvidiaProfileInspector) `nvidia-profile-inspector`
  - [qBittorrent](https://www.qbittorrent.org/) `qbittorrent`

- Dependencies

  - [.NET SDK](https://dotnet.microsoft.com/download) `dotnet-sdk`
  - [Visual C++ Redistributable 2019](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) `vcredist2019`

  


Note that I install my password manager separately, checking the hashes manually. 

### Other Installs

Some of these programs are on Chocolatey but I prefer to install them manually.

- [Adobe](https://www.adobe.com/creativecloud.html) products
- [Drawboard PDF](https://www.drawboard.com/pdf/) for annotating PDFs
- [Nvidia RTX Voice](https://www.nvidia.com/en-us/geforce/guides/nvidia-rtx-voice-setup-guide/)
- [Logitech G Hub](https://www.logitechg.com/en-us/innovation/g-hub.html)
- [Microsoft Office](https://www.office.com/)
- [Microsoft Whiteboard](https://www.microsoft.com/en-us/p/microsoft-whiteboard/9mspc6mp8fm4?activetab=pivot:overviewtab)
- Motherboard drivers, esp. audio
- My password manager
- [Startup Delayer](https://www.r2.com.au/page/products/show/startup-delayer/)[^startup-delayer]
- [Windows Terminal Preview](https://www.microsoft.com/en-us/p/windows-terminal-preview/9n8g5rfz9xk3?rtc=1&activetab=pivot:overviewtab)
- Gaming
  - [NVIDIA GeForce Experience](https://www.nvidia.com/en-us/geforce/geforce-experience/)
  - [Steam](https://store.steampowered.com/about/)
  - [Ubisoft Connect](https://ubisoftconnect.com/en-US/)

### Chocolatey

I usually set `choco feature enable -n allowGlobalConfirmation` so I don't have to press type `y` or `-y` for every package. The Chocolatey name is next to the name of software.

- A lot of [bcurran3](https://chocolatey.org/profiles/bcurran3)'s packages
  - [Choco Cleaner](https://chocolatey.org/packages/choco-cleaner) `choco-cleaner`
  - [Choco Optimize at](https://chocolatey.org/packages/choco-optimize-at) `choco-optimize-at`
  -  [Choco Upgrade All at](https://chocolatey.org/packages/choco-upgrade-all-at) `choco-upgrade-all-at --params "'/WEEKLY:yes /DAY:SAT /TIME:01:00'"`
- [Corsair iCue](https://www.corsair.com/us/en/icue) `icue`
- [EA Origin](https://www.origin.com/usa/en-us/store) `origin`
- [Epic Games Launcher](https://www.epicgames.com/store/en-US/download) `epicgameslauncher`
- [ActivityWatch](https://github.com/ActivityWatch/activitywatch) `activitywatch`
- [pyenv for Windows](https://github.com/pyenv-win/pyenv-win) `pyenv-win`
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) `jetbrainsmono`
- [Samsung Magician](https://www.samsung.com/semiconductor/minisite/ssd/product/consumer/magician/) `samsung-magician`

## Windows Configuration

I like my taskbar to use small buttons and never combine, and for multiple monitors, show on main taskbar and taskbar where window is open. I turn off User Account Control (UAC).

I ran into a weird bug where I couldn't create new folders. For some reason,

`HKEY_CLASSES_ROOT\Folder` in regedit had `(Default)` set as `pdf_auto_file`. I changed it to `Folder`, signed out and back in, and things worked again.

If necessary, I use [ShellMenuView](https://www.nirsoft.net/utils/shell_menu_view.html) to edit the right-click context menu.

I boost my microphone and change headphone equalizer settings.

Optional features can be added with "Turn Windows features on or off." I add Windows Sandbox, Virtual Machine Platform, and [Windows Subsystem for Linux](#Windows Subsystem for Linux).

### Copy From Backup

I copy over everything from Dropbox from the old drive to save bandwidth. I copy over my folder of git repositories which takes longer than it should due to node_modules folders.

I copy wallpapers from my wallpaper folder to the default DesktopBackground folder (I get most of my wallpapers from [wallpaperhub.app](https://wallpaperhub.app))

I install various fonts as needed.

### Change Folders and Search Options

Show hidden files, folders, and drives.

Uncheck "hide extensions for known file types".

## Smaller Programs Configuration

For espanso, I copy over my default.yml file.

### Keypirinha

I configure Keypirinha to use alt+space and startup. I install [PackageControl](https://github.com/ueffel/Keypirinha-PackageControl) which contains packages from [ueffel's Package Repository](https://ue.spdns.de/packagecontrol/). These are the packages I install:

- [WindowsApps](https://github.com/ueffel/Keypirinha-WindowsApps)
- [winsys](https://github.com/kvnxiao/keypirinha-winsys)
- [cvt](https://github.com/DrorHarari/keypirinha-cvt)
- [currency](https://github.com/AvatarHurden/keypirinha-currency)
- [myip](https://github.com/Fuhrmann/keypirinha-myip)
- [Time](https://github.com/ueffel/Keypirinha-Time)
- [colorpicker](https://github.com/clinden/keypirinha-colorpicker)
- [terminal-profiles](https://github.com/fran-f/keypirinha-terminal-profiles)

Some plugins weren't working for me, including [Command](https://github.com/bantya/Keypirinha-Command) and [sharex](https://github.com/Fuhrmann/keypirinha-sharex).

### Everything

Start on startup, run as admin, install and use the everything service. I change the show window hotkey: CTRL+ALT+SHIFT+SPACE.

### 7-Zip

Associate with all formats and integrate into explorer shell (context menu).

### Zotero

Copy over the [user profile folder](https://www.zotero.org/support/kb/profile_directory) at `C:\Users\<User Name>\AppData\Roaming\Zotero\Zotero\Profiles\<randomstring>`.

I store my Zotero storage folder in cloud storage. One should make a directory junction (as opposed to symlinks or hardlinks) to storage, since a junction will be valid even when viewed over the network from another computer while a symlink will not. Use `mklink /J storage TARGET_PATH`.[^mklink] 

I install the [BetterBibTex](https://github.com/retorquere/zotero-better-bibtex) plugin. 

### Steam

I store some games in other drives. To re-add the libraries to Steam, go to Steam > Settings > Downloads > Steam Library Folders.

Also turn off start on boot using Steam > Settings > Interface.

## Firefox Configuration

I sync my settings, which installs most of my browser extensions. Regarding browser extensions, my essential ones are [Privacy Badger](https://privacybadger.org/) and [uBlock Origin](https://github.com/gorhill/uBlock). Here's how I configure a few others:

[Enhancer for YouTube](https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/)— speed up to 1.2x, control volume with mouse cursor, autoplay at higher quality. Note that it can be worth it to play at a higher quality than your monitor resolution due to compression.

[Tab Unloader for Tree Style Tab](https://addons.mozilla.org/en-US/firefox/addon/tab-unload-for-tree-style-tab/) — tabs unloaded should be hidden from top and only shown in the sidebar. Unfortunately, I can't seem to get it working like it used to.

[Foxy Gestures](https://addons.mozilla.org/en-US/firefox/addon/foxy-gestures/) - I customize my gestures to be more like old Opera.

## Hardware Configuration

### 144hz Display

Nvidia control panel — Enable for windowed and full screen mode.

For other settings I follow [Blur Buster's Optimal G-Sync Settings]( https://blurbusters.com/gsync/gsync101-input-lag-tests-and-settings/14/)

## Developer-Related Configuration

### Git Configuration

Open git bash and enter:

`git config --global user.name "First Last"`

`git config --global user.email "myemail@email.com"`

I copy over my old SSH keys as well.

### Python Configuration

Use pyenv-win from chocolatey and anaconda3 from scoop.

`pyenv update` 

`pyenv install --list`

`pyenv install 3.x.x`

`pyenv global 3.x.x`

#### Anaconda

Installed from scoop. Generate a new GUID using `New-Guid` command in powershell. Windows terminal configuration:

```json
{
    "guid": "{af025e50-575e-4298-b3bf-19aa00e1df57}",
    "name": "Anaconda Powershell",
    "commandline": "powershell.exe -ExecutionPolicy ByPass -NoExit -Command & 'C:\\Users\\USERNAME\\scoop\\apps\\anaconda3\\current\\shell\\condabin\\conda-hook.ps1' ; conda activate 'C:\\Users\\USERNAME\\scoop\\apps\\anaconda3\\current\\envs\\general'",
    "hidden": false
},
```

You can customize it further.

#### Jupyter Lab

I install [ipyvolume](https://github.com/maartenbreddels/ipyvolume) and [ipympl](https://github.com/matplotlib/ipympl)

### NPM and Node

WIP

### Windows Subsystem for Linux

The installation guide is [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Make sure you enable the two required optional features (oxymoron) using "Turn Windows features on or off" or the PowerShell commands in the guide.

[^nodejs]: Includes npm.
[^bandizip]: I used to use Peazip, but startup time was too slow.

[^bcu]: Too many chocolatey packages will slow this down.

[^lockhunter]: Non-portable, for the context menu item.

[^calibre]: `calibre-normal` is the non-portable version.
[^latex]: actually MikTeX
[^mpv.net]: Sometimes GUIs are nice, especially if you don't want to memorize all the keyboard shortcuts.
[^startup-delayer]: Dropbox and OneDrive interfere with the screen capture shortcuts that I want to give to ShareX, so I ensure ShareX starts first using Startup Delayer.
[^mklink]: Note that `mklink` exists in the command prompt but not PowerShell.