// Hàm random background video
function setRandomBackgroundVideo() {
    // Video cục bộ trong folder images
    const videoList = [
        "images/1.mp4"
    ];

    const randomIndex = Math.floor(Math.random() * videoList.length);
    const selectedVideo = videoList[randomIndex];
    const videoElement = document.getElementById("backgroundVideo");

    if (videoElement) {
        const source = videoElement.querySelector('source');
        source.src = selectedVideo; // đường dẫn tương đối
        videoElement.load();
        videoElement.play();
    }
}

// Khi document sẵn sàng
$(function () {
    setRandomBackgroundVideo();

    _arabica.setTheme();
    window.addEventListener("installedAppsSent", loadInstalledApps);
    window.GmApi.gmGetInstalledAppsJsonforJS();
    window.GmApi.gmSubscribeToVmSpecificClientTags({
        appInstallUninstallNotification: ["appInstalled", "appUninstalled"],
        appInstallNotifications: [
            "apkInstallStarted",
            "apkInstallCompleted",
            "apkInstallFailed"
        ],
        appDownloadNotification: [
            "apkDownloadStarted",
            "apkDownloadCompleted",
            "apkDownloadFailed",
            "apkDownloadCurrentProgress"
        ],
        vmNameNotification: ["getVmInfo"]
    });
});

// Notification xử lý VM info
window.vmNameNotification = function (res) {
    var response = JSON.parse(res);
    var vmName = response.vmName;
    var vmId = response.extraData.VmId;
    window.vmInfo = {
        vm_name: vmName,
        vm_id: vmId
    }
};

// Notification download app
window.appDownloadNotification = function (res) {
    var response = JSON.parse(res);
    var eventRaised = response.eventRaised;
    var packageName = response.extraData.PackageName;
    var name = response.extraData.AppName;
    var path = response.extraData.ApkUrl;
    var progress = response.extraData.DownloadPercent;

    if (eventRaised === "apkDownloadStarted") {
        var isInstalled = installedApps.find(app => app.package === packageName);
        var isDownloading = installedApps.find(app => app.package === packageName && app.isDownloading);
        if (isDownloading) return;
        else if (isInstalled) {
            installedApps = installedApps.map(function(app) {
                if (app.package === packageName) {
                    return {...app, isDownloading: true, downloadFailed: false, downloadSuccess: false};
                } else return {...app};
            });
        } else {
            installedApps.push({
                isDownloading: true,
                downloadFailed: false,
                package: packageName,
                downloadSuccess: false,
                icon_url: "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
                action: "InstallPlay",
                name: name,
                apkPath: path
            });
        }
        generateGameList(installedApps);
    } else if (eventRaised === "apkDownloadCompleted") {
        for (var i = 0; i < installedApps.length; i++) {
            if (installedApps[i].package === packageName) {
                installedApps[i].isDownloading = false;
                installedApps[i].downloadFailed = false;
                installedApps[i].downloadSuccess = true;
                break;
            }
        }
        generateGameList(installedApps);
    } else if (eventRaised === "apkDownloadFailed") {
        for (var i = 0; i < installedApps.length; i++) {
            if (installedApps[i].package === packageName) {
                installedApps[i].isDownloading = false;
                installedApps[i].downloadFailed = true;
                installedApps[i].downloadSuccess = false;
                break;
            }
        }
        generateGameList(installedApps);
    } else if (eventRaised === "apkDownloadCurrentProgress") {
        for (var i = 0; i < installedApps.length; i++) {
            if (installedApps[i].package === packageName) {
                installedApps[i].downloadProgress = progress;
                break;
            }
        }
        generateGameList(installedApps);
    }
};

// Notification install/uninstall
window.appInstallUninstallNotification = function (res) {
    var response = JSON.parse(res);
    var packageName = response.extraData.PackageName;
    var appName = response.extraData.AppName;
    var eventRaised = response.eventRaised;

    if (eventRaised === "appInstalled") {
        var isInstalled = installedApps.find(app => app.package === packageName);
        if (isInstalled) {
            installedApps = installedApps.map(function(app) {
                if (app.package === packageName) {
                    return {...app, isInstalling: false, installFailed: false, installSuccess: true};
                } else return {...app};
            });
        } else {
            installedApps.push({
                isInstalling: false,
                installFailed: false,
                package: packageName,
                installSuccess: true,
                icon_url: "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
                action: "InstallPlay",
                name: appName,
            });
        }
        generateGameList(installedApps);
    } else if (eventRaised === "appUninstalled") {
        installedApps = installedApps.filter(app => app.package !== packageName);
        generateGameList(installedApps);
    }
};

// Notification install apk
window.appInstallNotifications = function (res) {
    var response = JSON.parse(res);
    var eventRaised = response.eventRaised;
    var packageName = response.extraData.PackageName;
    var name = response.extraData.AppName;
    var path = response.extraData.ApkFilePath;

    if (eventRaised === "apkInstallStarted") {
        var isInstalled = installedApps.find(app => app.package === packageName);
        var isInstalling = installedApps.find(app => app.package === packageName && app.isInstalling);
        if (isInstalling) return;
        else if (isInstalled) {
            installedApps = installedApps.map(function(app) {
                if (app.package === packageName) {
                    return {...app, isInstalling: true, installFailed: false, installSuccess: false};
                } else return {...app};
            });
        } else {
            installedApps.push({
                isInstalling: true,
                installFailed: false,
                package: packageName,
                installSuccess: false,
                icon_url: "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
                action: "InstallPlay",
                name: name,
                apkPath: path
            });
        }
        generateGameList(installedApps);
    } else if (eventRaised === "apkInstallFailed") {
        for (var i = 0; i < installedApps.length; i++) {
            if (installedApps[i].package === packageName) {
                installedApps[i].isInstalling = false;
                installedApps[i].installFailed = true;
                installedApps[i].installSuccess = false;
                break;
            }
        }
        generateGameList(installedApps);
    }
};

// Load installed apps
function loadInstalledApps(e) {
    window.installedApps = JSON.parse(e.detail);
    if (installedApps.length) generateGameList(installedApps);
}

// Generate game list HTML
function generateGameList(apps) {
    $("#installedApps li:not(:first-child)").remove();
    var port = window.GmApi.gmGetGMPort();
    var gameList = apps.map(function (item) {
        var li = document.createElement("li");
        li.className = "pointer";
        li.style.width = "100px";
        li.addEventListener("click", function () { return installApp(item); });

        var installedGame = document.createElement("div");
        installedGame.className = "installedGame";

        var image = document.createElement("img");
        image.setAttribute("src", "http://localhost:" + port + "/staticicon/" + item.package + ".png");

        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.innerHTML = window._arabica.localizedData["delete"];
        deleteButton.addEventListener("click", function () { return uninstallApp(item, event); });

        installedGame.appendChild(image);
        installedGame.appendChild(deleteButton);
        li.appendChild(installedGame);

        var gameName = document.createElement("p");
        gameName.className = "bold ellipsis gameName";
        gameName.innerHTML = item.name;
        li.appendChild(gameName);

        return li;
    });
    $("#installedApps").append(gameList);
}

// Install / uninstall app
function installApp(item) {
    if (window.disableClick || item.isInstalling || item.isDownloading || item.installFailed || item.downloadFailed) return false;
    var port = window.GmApi.gmGetGMPort();
    window.GmApi.gmInstallAppGoogle(
        "http://localhost:" + port + "/staticicon/" + item.package + ".png",
        item.name,
        "InstallPlay",
        item.package
    );
}

function uninstallApp(item, event) {
    event.stopPropagation();
    $("#installedApps").css("z-index", 99999);
    $(".deleteButton").fadeOut();
    $(".uninstallPopup").fadeIn();
    window._arabica.currentPackage = item;
}

// Thêm các chức năng UI khác (hideDeleteButton, openSystemApps, handleTabClick, ...)
function hideDeleteButton() {
    $(".uninstallPopup").fadeOut();
    $(".deleteButton").fadeOut();
    $(".deleteOverlay").fadeOut();
    window.disableClick = false;
}

// Chạy video khi DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    setRandomBackgroundVideo();
});
