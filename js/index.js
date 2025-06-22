function setRandomBackgroundVideo() {
  const videoList = [
"https://d9yrlck6nls9j.cloudfront.net/b4o2c8%2Ffile%2F51bf3fa631561f93ea8689f002dbd92e_7fa627007e793c2e280a11d4a47e4081.mp4?response-content-disposition=inline%3Bfilename%3D%2251bf3fa631561f93ea8689f002dbd92e_7fa627007e793c2e280a11d4a47e4081.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750570511&Signature=EQOPiWNtjCBiO47MXBYxtPLRWckk2QI4glhAttwttL-dPnGJDaiVgyaHNyKOkX2RYpVey7rYtYJpuFIEZwndGw7uaQU93D7mdWt~Mn9kGVlF~X8hlB7z1izg5wpbz4SQpSG23h7oqvM2QCK4RLIvE~DBqnyZYon6vEFmAVfjHqkfewwq1qJxRRc6lBHr-6NBc29Q9SyUfP6bHh4y3kqXidmjuLazw5iYgQSZdO5eYMMyWYZ5AJE7IesBZ76bZMut2JXUdCovmrRr85Cpq3WRcfJpcCwGfHBQ3Gwff8CPw9oVSc3KtThZajYKnhLpbQD2rC0dsPGqz9DYKia7MWflwg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
  "https://d1tvodo9k6wqe8.cloudfront.net/a152c8%2Ffile%2F236de4292263c30c0d8eccc7cfc5d9e3_e9a218f0cbdfdaa82b2dd4c26389ff5f.mp4?response-content-disposition=inline%3Bfilename%3D%22236de4292263c30c0d8eccc7cfc5d9e3_e9a218f0cbdfdaa82b2dd4c26389ff5f.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750570494&Signature=YpXHWDofNyhkQIE~D5AiNAxnHvtgA3Ic60QmuY1C8UtWpLRHFCA5-05cV066Yw5XtCpnxq3FpC-R5QSR4~TIdjn~Ezs1kYPJiZ~~scCg2Ix44YbXfiog0Z3CPiayZ1El-qj9Rzaf3SG~Y~2YFvbkecxWPfMOn~9YOdKgL5GxIfdzNhnJAITwoV3o4x~usB-kVyxG4iUrm5LfdQ6OjuyB-k6wNMxr5c1mi9l-iJeoj0RLON6hHXe3852~M5QStm1cv0qxWyqVgTSGExep7zTyYzb4Q7C-4nS0wFgNY5jk3j05HyknHdV6D1RN0Vei3WHnNP28Ylj47zUiSUlj0OmJNQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
  "https://d1y647k2qu0gwj.cloudfront.net/y2z1c8%2Ffile%2F4bb70b8ddf44316a8c579194b09c0356_23234a0aea36fd503f1f9d7c89340cb9.mp4?response-content-disposition=inline%3Bfilename%3D%224bb70b8ddf44316a8c579194b09c0356_23234a0aea36fd503f1f9d7c89340cb9.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750570465&Signature=HFbERfMGnX55rRMI1PzXzHMunAVO9a4oFcEBkZ7S4ETDVopn8D7S5szN6Xf5U47V5iMcKcITcakKht~bIvmLMi2kq-s3yp3cdXo9b0WK2OEsqqClYks9VrXLJjzqX3ynA6dV34NyIF-wXC8SyRlQnwn9iUYPTwvQnc-8pKHoLz9jfAdnetlr92QjlVwl-YIEDx5sOf0~2scA7337Oa7RvYXwG4bLTgnEAgDCqXU9tJELHjC9lzly1ZVrdPObZGYvNKQJZSFiTHCx9bZb-AKhxOEra12zEhAwjfu9ywaNaa1WtxrCV9IqZDTJ3fpjkUqsv29~Q3DCPX-xTYnqCVEHdg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
  "https://d3dga506664sw7.cloudfront.net/d1l1c8%2Ffile%2Fc9db0b5401e04db56121ec7b73baaaaf_f3f8d8d51cc8de33e864ea265a7cc94e.mp4?response-content-disposition=inline%3Bfilename%3D%22c9db0b5401e04db56121ec7b73baaaaf_f3f8d8d51cc8de33e864ea265a7cc94e.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750570446&Signature=GXzU6u8orefppL0mQNFw5301rbYOCJSxB0Q~tsRqvt9c5Jhk6lhZ3SRAT~V56Fk2UT8bPYQkm90tW-mcuGCKtCYZwo7ChckWx9y15wvc-YioUT-pss6ftjeJfuWS2E2vl81Jx3CMzG0zGLYvlzeYvcmxLdbnr~BEO9OPLsx4TK-qofa2oN5IWKPYS7fcYutdMgNgCiHcCKFE9Qb9C~nCc8xwe7ekNtaWMuMX9ae7B2MgMXrxAXYQ~qfJtFw3X~--fH4uJfHxtZxURrYJD7DzbWxHFgyodwvgcKhTOm17qi7Z1IOTa~prwshz7yrMBdpHXucxhH7bVm7bJL4DnlziYw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
  "https://d2gmxft35na058.cloudfront.net/s9l1c8%2Ffile%2F688bbc075f975d0b11e3dbdb90f70e2e_274bbf218f5e52f23a9ddb47d9dd7adb.mp4?response-content-disposition=inline%3Bfilename%3D%22688bbc075f975d0b11e3dbdb90f70e2e_274bbf218f5e52f23a9ddb47d9dd7adb.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750570422&Signature=B3RzMAJ-O2HnbD4~gpSXsogxJ50kaKSQAS4Zsafeomsegs1wzkcMAGdxdI0I~BPQcMsKoDQNJ4RmhtNIiMQBmnSTqq1WGCA5MIWDxTn-Xm8noNuzXpl1SQyltCVgfIFrx~sNu02ytxVXnf1JewZi~64kQ0Gffw7IRKlEAWf~DygfL8eWupuVmd2fVGIf1sFS8-qW5JlcgharSVS-KOudfhIxI8PW1D0EQ5mV3VA5~dziFXkkryJrsCyegll1AxOgaqjxyd1T1wdFm2xbETCAN00XxIzcFQgrPBslqoo~lbqYrFB5O3-8M3WehXDv44VQ4S-aj3aht1lNc1PSbRD6WQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ",
  "https://d3ohd1r62v7pzn.cloudfront.net/z3w0c8%2Ffile%2Fea9cd11eb11b682b0d67a70b5eb8faf5_74cc24692dac38f0730b81df49c32980.mp4?response-content-disposition=inline%3Bfilename%3D%22ea9cd11eb11b682b0d67a70b5eb8faf5_74cc24692dac38f0730b81df49c32980.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750570349&Signature=cX8cYWlZwDFSovYa4WHmr2KKpmm4KFbMZbvu5ZIxNCLY1PFUoDvP9wQT5RNw03NuR9emoJ2-8z8-0MGxu559yHdBlHdTtGTt51uVCzcGlMAJcL3Zml13hILaKXoXMz6LeTTFthaIQYZMAEKGKn2K8u~N6Rhejgpyv64~u6ytN7~ZlcPmcl4YFrZAR8REUCD261X6Pb-1k5DH5k4D7CXnZlDeZiKdPD3FwLfhIrvxWHzS4EUeytQMIy-xKpozWUzDrAdWocSszpFGII4Rx3ZRzWjJop9lKiMySf02H8Txu7vjyzoMPaGg~Hhp-90Hi5J6Qfp5mHkf6DRBbzhKysIqcg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
  ];

  const randomIndex = Math.floor(Math.random() * videoList.length);
  const selectedVideo = videoList[randomIndex];
  const videoElement = document.getElementById("backgroundVideo");

  if (videoElement) {
    const source = videoElement.querySelector('source');
    source.src = selectedVideo;
    videoElement.load();
    videoElement.play();
  }
}

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

$(function () {
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
  // window.installedApps = [
  //   { name: "pubg", package: "com.tencent.ig", installFailed: true },
  //   { name: "rok", package: "com.a.b", isDownloading: true, downloadProgress: 10 }
  // ];
  // generateGameList(installedApps);
  // loadInstalledApps({detail: `[{"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}, {"name": "temple run", "package": "com.imangi.templerun2"}]`})
  // window.installedApps = [];
  // var res = `{"eventRaised": "apkInstallStarted", "extraData": {"PackageName": "com.tencent.ig", "AppName": "pubg" }}`;
  // var res1 = `{"eventRaised": "appInstalled", "extraData": {"PackageName": "com.tencent.ig", "AppName": "pubg" }}`;

  // setTimeout(function(){appInstallNotifications(res)}, 3000);
  // setTimeout(function(){appInstallUninstallNotification(res1)}, 5000);
});

window.vmNameNotification = function (res) {
  var response = JSON.parse(res);
  var vmName = response.vmName;
  var vmId = response.extraData.VmId;
  window.vmInfo = {
    vm_name: vmName,
    vm_id: vmId
  }
}

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
    if (isDownloading) {
      return;
    }
    else if (isInstalled) {
      installedApps = installedApps.map(function(app) {
        if (app.package === packageName) {
          return {...app, isDownloading: true, downloadFailed: false, downloadSuccess: false};
        }
        else return {...app};
      })
    }
    else {
      var newInstalledApp = {
        isDownloading: true,
        downloadFailed: false,
        package: packageName,
        downloadSuccess: false,
        icon_url:
          "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
        action: "InstallPlay",
        name: name,
        apkPath: path
      };
      installedApps.push(newInstalledApp);
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
        }
        else return {...app};
      })
    }
    else {
      var newInstalledApp = {
        isInstalling: false,
        installFailed: false,
        package: packageName,
        installSuccess: true,
        icon_url:
          "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
        action: "InstallPlay",
        name: appName,
        apkPath: path
      };
      installedApps.push(newInstalledApp);
    }
    generateGameList(installedApps);
  } else if (eventRaised === "appUninstalled") {
    installedApps = installedApps.filter(app => app.package !== packageName);
    generateGameList(installedApps);
  }
};

window.appInstallNotifications = function (res) {
  var response = JSON.parse(res);
  var eventRaised = response.eventRaised;
  var packageName = response.extraData.PackageName;
  var name = response.extraData.AppName;
  var path = response.extraData.ApkFilePath;
  if (eventRaised === "apkInstallStarted") {
    var isInstalled = installedApps.find(app => app.package === packageName);
    var isInstalling = installedApps.find(app => app.package === packageName && app.isInstalling);
    if (isInstalling) {
      return;
    }
    else if (isInstalled) {
      installedApps = installedApps.map(function(app) {
        if (app.package === packageName) {
          return {...app, isInstalling: true, installFailed: false, installSuccess: false};
        }
        else return {...app};
      })
    }
    else {
      var newInstalledApp = {
        isInstalling: true,
        installFailed: false,
        package: packageName,
        installSuccess: false,
        icon_url:
          "https://cloud.bluestacks.com/app/icon?pkg=" + packageName,
        action: "InstallPlay",
        name: name,
        apkPath: path
      };
      installedApps.push(newInstalledApp);
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

function loadInstalledApps(e) {
  window.installedApps = JSON.parse(e.detail);
  if (installedApps.length) {
    generateGameList(installedApps);
  }
}

function generateGameList(apps) {
  $("#installedApps li:not(:first-child)").remove();
  var port = window.GmApi.gmGetGMPort();
  var gameList = apps.map(function (item) {
    var li = document.createElement("li");
    li.className = "pointer";
    li.style.width = "100px";
    li.addEventListener("click", function () {
      return installApp(item);
    });
    var installedGame = document.createElement("div");
    installedGame.className = "installedGame";
    var image = document.createElement("img");
    image.setAttribute(
      "src",
      "http://localhost:" + port + "/staticicon/" + item.package + ".png"
    );
    var deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = window._arabica.localizedData["delete"];
    deleteButton.addEventListener("click", function () {
      return uninstallApp(item, event);
    });
    var installLoader = document.createElement("div");
    if (item.isInstalling) installLoader.className = "installLoader show";
    else installLoader.className = "installLoader";
    var installFailedContainer = document.createElement("div");
    if (item.installFailed || item.downloadFailed) installFailedContainer.className = "installFailed show";
    else installFailedContainer.className = "installFailed";
    installFailedContainer.addEventListener("click", function () {
      return window.GmApi.gmRetryapkinstall(item.apkPath);
    })
    var retryIcon = document.createElement("p");
    retryIcon.className = "retryIcon";
    var retryText = document.createElement("p");
    retryText.className = "retryText";
    retryText.innerHTML = window._arabica.localizedData["retry"];
    installFailedContainer.appendChild(retryIcon);
    installFailedContainer.appendChild(retryText);
    var downloadingContainer = document.createElement("div");
    if (item.isDownloading) downloadingContainer.className = "downloadProgress show";
    else downloadingContainer.className = "downloadProgress";
    var outerProgress = document.createElement("p");
    outerProgress.className = "outerProgress";
    var innerProgress = document.createElement("p");
    innerProgress.className = "innerProgress";
    innerProgress.style.width = item.downloadProgress + "%";
    outerProgress.appendChild(innerProgress);
    downloadingContainer.appendChild(outerProgress);
    installedGame.appendChild(image);
    installedGame.appendChild(deleteButton);
    installedGame.appendChild(installLoader);
    installedGame.appendChild(installFailedContainer);
    installedGame.appendChild(downloadingContainer);
    li.appendChild(installedGame);
    var gameName = document.createElement("p");
    gameName.className = "bold ellipsis gameName";
    gameName.innerHTML = item.name;
    li.appendChild(gameName);
    if (item.isInstalling) {
      var installTextContainer = document.createElement("p");
      installTextContainer.className = "installText flex vrtlCenter";
      var installText = document.createElement("span");
      installText.innerHTML = window._arabica.localizedData["installingApp"];
      var installIndicator = document.createElement("span");
      installIndicator.className = "installIndicator";
      installTextContainer.appendChild(installIndicator);
      installTextContainer.appendChild(installText);
      li.appendChild(installTextContainer);
    }
    if (item.installSuccess) {
      var installTextContainer = document.createElement("p");
      installTextContainer.className = "installText flex vrtlCenter";
      var installText = document.createElement("span");
      installText.innerHTML = window._arabica.localizedData["newApp"];
      var installIndicator = document.createElement("span");
      installIndicator.className = "installIndicator";
      installTextContainer.appendChild(installIndicator);
      installTextContainer.appendChild(installText);
      li.appendChild(installTextContainer);
    }
    if (item.installFailed) {
      var installTextContainer = document.createElement("p");
      installTextContainer.className = "installText flex vrtlCenter";
      var installText = document.createElement("span");
      installText.innerHTML = window._arabica.localizedData["installFailed"];
      var installIndicator = document.createElement("span");
      installIndicator.className = "installIndicator";
      installTextContainer.appendChild(installIndicator);
      installTextContainer.appendChild(installText);
      li.appendChild(installTextContainer);
    }
    return li;
  });
  $("#installedApps").append(gameList);
}

function installApp(item) {
  if (window.disableClick || item.isInstalling || item.isDownloading || item.installFailed || item.downloadFailed) {
    return false;
  }
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

function uninstallGame() {
  hideDeleteButton();
  var installedGames = window.GmApi.gmInstalledappsforvm(window.vmInfo.vm_name);
  if (
    installedGames &&
    installedGames.indexOf(window._arabica.currentPackage.package) !== -1 &&
    !window._arabica.currentPackage.installFailed
  ) {
    window.GmApi.gmUninstallApp(window._arabica.currentPackage.package);
    installedApps = installedApps.filter(
      app => app.package !== window._arabica.currentPackage.package
    );
  } else {
    installedApps = installedApps.filter(
      app => app.package !== window._arabica.currentPackage.package
    );
  }
  generateGameList(installedApps);
}

function hideDeleteButton() {
  $(".uninstallPopup").fadeOut();
  $(".deleteButton").fadeOut();
  $(".deleteOverlay").fadeOut();
  window.disableClick = false;
}

function openSystemApps() {
  $(".modalContainer").css("display", "flex");
}

function hideSystemApps() {
  $(".modalContainer").css("display", "none");
}

var payload = {
  playStore: {
    click_action_app_activity: ".AssetBrowserActivity",
    click_action_app_icon_id: "google_play_20180914_myapps_1",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/dock_apps/com.android.vending.png",
    click_action_key: "com.android.vending",
    click_action_packagename: "com.android.vending",
    click_action_title: "Google Play Store",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  camera: {
    click_action_app_activity: "com.android.camera.CameraLauncher",
    click_action_app_icon_id: "com.android.camera2_20180914_more_1",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.android.camera2.png",
    click_action_key: "com.android.camera2",
    click_action_packagename: "com.android.camera2",
    click_action_title: "Camera",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  chrome: {
    click_action_app_activity:
      "org.chromium.chrome.browser.ChromeTabbedActivity",
    click_action_app_icon_id: "com.android.chrome_20180916_more_2",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.android.chrome.png",
    click_action_key: "com.android.chrome",
    click_action_packagename: "com.android.chrome",
    click_action_title: "Browser",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  android: {
    click_action_app_activity: ".SettingsActivity",
    click_action_app_icon_id: "com.bluestacks.settings_20180914_more_3",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.bluestacks.settings.png",
    click_action_key: "com.bluestacks.settings",
    click_action_packagename: "com.bluestacks.settings",
    click_action_title: "Android Settings",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  media: {
    click_action_app_activity: "com.bluestacks.filemanager.MainActivity",
    click_action_app_icon_id: "com.bluestacks.filemanager_20180914_more_4",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/com.bluestacks.filemanager.png",
    click_action_key: "com.bluestacks.filemanager",
    click_action_packagename: "com.bluestacks.filemanager",
    click_action_title: "Media Manager",
    click_generic_action: "OpenSystemApp",
    payloadtype: "generic"
  },
  helpCenter: {
    click_action_app_activity: "",
    click_action_app_icon_id: "helpcenter_20180919_more_6",
    click_action_app_icon_url:
      "https://cdn-bgp.bluestacks.com/myapps/more_apps/help_center.png",
    click_action_key: "feedback_text",
    click_action_packagename: "feedback_text",
    click_action_title: "HelpCenter",
    click_action_value:
      "http://arabica-dot-bs3-appcenter-engg.appspot.com/bs3/feedback",
    click_generic_action: "ApplicationBrowser",
    payloadtype: "generic"
  }
};

function handleClick(param) {
  window.GmApi.gmHandleClick(payload[param]);
}

function refreshhomehtml() {
  window.GmApi.gmRefreshhomehtml();
}

function handleTabClick(tab) {
  $(".link").removeClass("activeLink");
  $(".link." + tab).addClass("activeLink");
  $(".tab").fadeOut();
  if (tab !== "library") {
    tab = "noInternet";
  }
  $("#" + tab).fadeIn();
}

function showMenuOptions() {
  $(".menuOptionsContainer").fadeIn();
}

function hideMenuOptions(e) {
  e.stopPropagation();
  $(".menuOptionsContainer").fadeOut();
}

function installApk(e) {
  hideMenuOptions(e);
  e.stopPropagation();
  window.GmApi.gmChooseandinstallapk();
}

function deleteApps(e) {
  hideMenuOptions(e);
  e.stopPropagation();
  if (installedApps.length) {
    $(".deleteButton").fadeIn();
    $(".deleteOverlay").fadeIn();
    window.disableClick = true;
    $("#installedApps").css("z-index", 9999999);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setRandomBackgroundVideo();
});

