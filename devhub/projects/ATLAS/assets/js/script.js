function ATLASJSCode() {
  //Define Variabes:
  var navSrchInput = document.getElementById("navSrchInput");
  var navSrchBtun = document.getElementById("navSrchBtn");
  var navDataTab = document.getElementById("dataTab");
  var subNav = document.getElementById("subNav");
  var locoNav = document.getElementById("locoNav");
  var dataChoice = document.querySelector(".dataChoice");
  var dashChoice = document.querySelector(".dashChoice");
  var toolsChoice = document.querySelector(".toolsChoice");
  var dataSiteInfo = document.getElementById("dataSiteInfo");
  var dataAppsInfo = document.getElementById("dataAppsInfo");
  var dataSFInfo = document.getElementById("dataSFInfo");
  var dataCBSSInfo = document.getElementById("dataCBSSInfo");
  var dataSite = document.getElementById("dataSite");
  var dataApps = document.getElementById("dataApps");
  var dataSecureFold = document.getElementById("dataSecureFold");
  var dataCBSS = document.getElementById("dataCBSS");
  var navDashTab = document.getElementById("dashTab");
  var navToolsTab = document.getElementById("toolsTab");
  var navSrchBox = document.getElementsByClassName("srch-box")[0];
  var buttOpnFold2 = document.getElementById("buttOp2");
  var opnFold2 = document.getElementById("opnFoldr2");
  var col2 = document.getElementById("myCollapsible2");
  var opnFold3 = document.getElementById("opnFoldr3");
  var col3 = document.getElementById("myCollapsible3");
  var buttOpnFold3 = document.getElementById("buttOp3");
  var atlasApp = document.getElementById("atlasApp");
  var opnFoldrMain = document.getElementById("opnFoldrMain");
  var buttOpMain = document.getElementById("buttOpMain");
  var buttOpnFoldClose = document.getElementById("buttOp4");
  var opnFoldClose = document.getElementById("opnFoldr4");
  var collapseIsSelctd = false;
  var dataTabisSelctd = false;
  var dashTabisSelctd = false;
  var toolTabisSelctd = false;
  var siteisSelctd = false;
  var appsisSelctd = false;
  var SFisSelctd = false;
  var CBSSisSelctd = false;



  function hideStart() {
    //Hide main ATLAS Book Start Icon and Unhide Main ATLAS HTML Elements 
    buttOpMain.hidden = true;
    atlasApp.hidden = false;
  };

  function hideClose() {
    //close the ATLAS App, by hiding the main ATLAS HTML Elements, then returning to ATLAS Book Start Icon.
    buttOpMain.hidden = false;
    navSrchInput.hidden = true;
    dataSiteInfo.hidden = true;
    dataAppsInfo.hidden = true;
    dataCBSSInfo.hidden = true;
    dataSFInfo.hidden = true;
    dataChoice.hidden = true;
    dashChoice.hidden = true;
    toolsChoice.hidden = true;
    subNav.hidden = true;
    dataTabisSelctd = true;
    dashTabisSelctd = true;
    toolTabisSelctd = true;
    dataTabEnabled();
    mapColapsExpand();
    navSrchInput.value = "";
    atlasApp.hidden = true;
  };

  function hideElem() {
    //Hide Main ATLAS HTML Elements, also clearing Search Input Value
    navSrchInput.hidden = true;
    dataSiteInfo.hidden = true;
    dataAppsInfo.hidden = true;
    dataSFInfo.hidden = true;
    dataCBSSInfo.hidden = true;
    locoNav.hidden = true;
    subNav.hidden = true;
    dataChoice.hidden = true;
    dashChoice.hidden = true;
    toolsChoice.hidden = true;
    navSrchInput.value = "";
    atlasApp.hidden = true;
  };
  //Call hideElem Function on pageload
  hideElem();

  function mapColapsExpand() {
    //test if collapseIsSelctd is true
    if (collapseIsSelctd) {
      //Create Collapsible button animation for ATLAS Mobile View NavBar
      //First toggle the collapsible menu
      col2.classList.toggle("collapse");
      col2.classList.toggle("show");
      //Second toggle the Map-Open Font Awesome Icon - to create folder open animation when the Collapsible is expanded
      opnFold2.classList.toggle("fa-map");
      //else do nothing
    } else {
      return false;
    };

  };


  // Menu Button Animations
  function animateMenuButtons() {
    buttOpMain.addEventListener("click", function () {
      //toggle the Open Book Font-Awesome Icon - To create opening book animation
      opnFoldrMain.classList.toggle("fa-book-open");
      //confirm prompt to enable a choice dynamic
      var yes = confirm("YOU DARE READ THE MIGHTY ATLAS?");
      //test if the choice was yes - then calls hideStart function to hide ATLAS start icon HTML Element, then unhide ATLAS App HTML Elements
      if (yes) {
        hideStart();
        //Otherwise test if "cancel" is selected - then, close book and do nothing
      } else {
        //toggle the Open Book Font-Awesome Icon - To create closing book animation
        opnFoldrMain.classList.toggle("fa-book-open");
        return false;
      };
    });

    buttOpnFoldClose.addEventListener("click", function () {
      //toggle the ATLAS Book Font-Awesome Icon - To create closing book animation and end on ATLAS book Icon
      opnFoldClose.classList.toggle("fa-atlas");
      //confirm prompt to enable a choice dynamic
      var yes = confirm("YOU WISH TO CLOSE THE MIGHTY ATLAS?");
      //test if the choice was yes - then calls hideClose function to hide ATLAS App HTML Elements, then unhide ATLAS start icon HTML Element
      if (yes) {
        opnFoldrMain.classList.toggle("fa-book-open")
        hideClose();
        //Otherwise test if "cancel" is selected - then, do nothing
      } else {
        return false;
      };
    });

    buttOpnFold2.addEventListener("click", function () {
      collapseIsSelctd = true;
      mapColapsExpand();
    });

    buttOpnFold3.addEventListener("click", function () {
      //Create Collapsible button animation for ATLAS Seconday-Location NavBar
      //First toggle the collapsible menu
      col3.classList.toggle("collapse");
      col3.classList.toggle("show");
      //Second toggle the Arrow-Up Font Awesome Icon - to create folder open animation when the Collapsible is expanded
      opnFold3.classList.toggle("fa-angle-double-up");
    });
  };
  animateMenuButtons();
  //Menu Button Animations

  //NAV SearchButton
  function ATNavSearchButton() {
    navSrchBtun.addEventListener("mouseover", function () {
      //Event to create expanded search-box elusion
      //UnHide the search-box on mouse-over of the HTML Element, then return false
      navSrchInput.hidden = false;
      return false;
    });

    navSrchBox.addEventListener("mouseleave", function () {
      //Event to create collapsed search-box elusion
      //Hide the search-box on mouse-leave of the HTML Element, then return false
      navSrchInput.hidden = true;
      return false;
    });

    navSrchInput.addEventListener("keypress", function () {
      //Event to create input submitted/search elusion
      //test if the "Enter" key has been pressed on the search input field
      if (event.key === "Enter") {
        //Then clear the search field, and do nothing - trust me it gets them everytime !! 
        navSrchInput.value = "";
        return false;
      };
    });
  };
  ATNavSearchButton();
  //NAV SearchButton

  //ATLAS Nav Tabs
  //enable data tab
  function dataTabEnabled() {
    //created togglable event
    //test if navDataTab has been "clicked" also test if isSelctd is false
    //then show the site info page, and add the hova1Active class to the tab
    if (navDataTab && !dataTabisSelctd) {
      mapColapsExpand();
      collapseIsSelctd = false;
      subNav.hidden = false;
      dataChoice.hidden = false;
      toolsChoice.hidden = true;
      dashChoice.hidden = true;
      dataTabisSelctd = true;
      dashTabisSelctd = false;
      toolTabisSelctd = false;
      document.getElementById("dashBtnActv").classList.remove("hova1Active");
      document.getElementById("dataBtnActv").classList.add("hova1Active");
      document.getElementById("toolBtnActv").classList.remove("hova1Active");
      return false;
    } else if (navDataTab && dataTabisSelctd) {
      mapColapsExpand();
      collapseIsSelctd = false;
      dataSubSiteDis();
      dataSubAppDis();
      dataSubSFDis();
      dataSubCBSSDis();
      dataChoice.hidden = true;
      subNav.hidden = true;
      dataTabisSelctd = false;
      document.getElementById("dataBtnActv").classList.remove("hova1Active");
    };

  };
  //data tab site sub tab
  //activate data > Site sub tab
  function dataSubSiteActv() {
    dataSubAppDis();
    dataSubSFDis();
    dataSubCBSSDis();
    dataApps.classList.remove("hovaSubActive");
    dataSecureFold.classList.remove("hovaSubActive");
    dataCBSS.classList.remove("hovaSubActive");
    dataSite.classList.add("hovaSubActive");
    dataSiteInfo.hidden = false;
    locoNav.hidden = false;
    siteisSelctd = true;
    return false;
  };
  //deactivate data > Site sub tab
  function dataSubSiteDis() {
    dataSite.classList.remove("hovaSubActive");
    dataSiteInfo.hidden = true;
    locoNav.hidden = true;
    siteisSelctd = false;
  };

  //data tab applications sub tab
  //activate data > applications sub tab
  function dataSubAppActv() {
    dataSubSiteDis();
    dataSubSFDis();
    dataSubCBSSDis();
    dataApps.classList.add("hovaSubActive");
    dataSite.classList.remove("hovaSubActive");
    dataSecureFold.classList.remove("hovaSubActive");
    dataCBSS.classList.remove("hovaSubActive");
    dataAppsInfo.hidden = false;
    locoNav.hidden = false;
    appsisSelctd = true;

  };
  //deactivate data > applications sub tab
  function dataSubAppDis() {
    dataApps.classList.remove("hovaSubActive");
    dataAppsInfo.hidden = true;
    locoNav.hidden = true;
    appsisSelctd = false;
  };

  //data tab Secure Folder sub tab
  //activate data > applications sub tab
  function dataSubSFActv() {
    dataSubSiteDis();
    dataSubAppDis();
    dataSubCBSSDis();
    dataSecureFold.classList.add("hovaSubActive");
    dataSite.classList.remove("hovaSubActive");
    dataApps.classList.remove("hovaSubActive");
    dataCBSS.classList.remove("hovaSubActive");
    dataSFInfo.hidden = false;
    locoNav.hidden = false;
    SFisSelctd = true;
  };
  //deactivate data > applications sub tab
  function dataSubSFDis() {
    dataSecureFold.classList.remove("hovaSubActive");
    dataSFInfo.hidden = true;
    locoNav.hidden = true;
    SFisSelctd = false;
  };

  //data tab CBSS sub tab
  //activate data > CBSS sub tab
  function dataSubCBSSActv() {
    dataSubSiteDis();
    dataSubAppDis();
    dataSubSFDis();
    dataCBSS.classList.add("hovaSubActive");
    dataSite.classList.remove("hovaSubActive");
    dataApps.classList.remove("hovaSubActive");
    dataSecureFold.classList.remove("hovaSubActive");
    dataCBSSInfo.hidden = false;
    locoNav.hidden = false;
    CBSSisSelctd = true;
  };
  //deactivate data > CBSS sub tab
  function dataSubCBSSDis() {
    dataCBSS.classList.remove("hovaSubActive");
    dataCBSSInfo.hidden = true;
    locoNav.hidden = true;
    CBSSisSelctd = false;
  };

  //data tab functions all
  function navBarDataTab() {
    navDataTab.addEventListener("click", function () {
      dataTabEnabled();
    });

    function actvDataSubButtons() {
      dataSite.addEventListener("click", function () {
        if (dataSite && !siteisSelctd) {
          dataSubSiteActv();
        } else if (dataSite && siteisSelctd) {
          dataSubSiteDis();
        };
      });
      dataApps.addEventListener("click", function () {
        if (dataApps && !appsisSelctd) {
          dataSubAppActv();
        } else if (dataApps && appsisSelctd) {
          dataSubAppDis();
        };
      });
      dataSecureFold.addEventListener("click", function () {
        if (dataSecureFold && !SFisSelctd) {
          dataSubSFActv();
        } else if (dataSecureFold && SFisSelctd) {
          dataSubSFDis();
        };
      });
      dataCBSS.addEventListener("click", function () {
        if (dataCBSS && !CBSSisSelctd) {
          dataSubCBSSActv();
        } else if (dataCBSS && CBSSisSelctd) {
          dataSubCBSSDis();
        };
      });
    };
    actvDataSubButtons();
  };
  navBarDataTab();

  //enable dash tab
  function dashTabEnabled() {
    //created togglable event
    //test if navDataTab has been "clicked" also test if isSelctd is false
    //then show the site info page, and add the hova1Active class to the tab
    if (navDashTab && !dashTabisSelctd) {
      mapColapsExpand();
      collapseIsSelctd = false;
      dataSubSiteDis();
      dataSubAppDis();
      dataSubSFDis();
      dataSubCBSSDis();
      subNav.hidden = false;
      dashChoice.hidden = false;
      dataChoice.hidden = true;
      toolsChoice.hidden = true;
      dashTabisSelctd = true;
      dataTabisSelctd = false;
      toolTabisSelctd = false;
      document.getElementById("dashBtnActv").classList.add("hova1Active");
      document.getElementById("dataBtnActv").classList.remove("hova1Active");
      document.getElementById("toolBtnActv").classList.remove("hova1Active");
      return false;
    } else if (navDashTab && dashTabisSelctd) {
      mapColapsExpand();
      collapseIsSelctd = false;
      subNav.hidden = true;
      dashTabisSelctd = false;
      dashChoice.hidden = true;
      document.getElementById("dashBtnActv").classList.remove("hova1Active");
    };

  };
  navDashTab.addEventListener("click", function () {
    dashTabEnabled();
  });

  //enable tool tab
  function toolTabEnabled() {
    //created togglable event
    //test if navDataTab has been "clicked" also test if isSelctd is false
    //then show the site info page, and add the hova1Active class to the tab
    if (navDataTab && !toolTabisSelctd) {
      mapColapsExpand();
      collapseIsSelctd = false;
      dataSubSiteDis();
      dataSubAppDis();
      dataSubSFDis();
      dataSubCBSSDis();
      mapColapsExpand();
      subNav.hidden = false;
      toolsChoice.hidden = false;
      dataChoice.hidden = true;
      dashChoice.hidden = true;
      toolTabisSelctd = true;
      dataTabisSelctd = false;
      dashTabisSelctd = false;
      document.getElementById("toolBtnActv").classList.add("hova1Active");
      document.getElementById("dashBtnActv").classList.remove("hova1Active");
      document.getElementById("dataBtnActv").classList.remove("hova1Active");
      return false;
    } else if (navDataTab && toolTabisSelctd) {
      mapColapsExpand();
      collapseIsSelctd = false;
      toolTabisSelctd = false;
      toolsChoice.hidden = true;
      subNav.hidden = true;
      document.getElementById("toolBtnActv").classList.remove("hova1Active");
    };
  };
  navToolsTab.addEventListener("click", function () {
    toolTabEnabled();
  });

  //ATLAS Nav Tabs

};

ATLASJSCode() 