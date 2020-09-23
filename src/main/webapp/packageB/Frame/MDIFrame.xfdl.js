﻿(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("MDIFrame");
                this._setFormPosition(0,0,1280,42);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Tab", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_KO\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "230", "42", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MDI_Logo");
            obj.style.set_background("#272f39ff URL('img::PD_LAW_LOGO.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "230", "0", null, "42", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreMdi", "absolute", null, "0", "18", "42", "131", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_TabSpinup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NexMdi", "absolute", null, "0", "18", "42", "110", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_TabSpindown");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize", "absolute", null, "0", "25", "42", "70", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_Extend");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade", "absolute", null, "0", "31", "42", "39", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_Cascade");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll", "absolute", null, "0", "39", "42", "0", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_AllClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1149", "0", "3", "42", null, null, this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1145", "41", "33", "22", null, null, this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.style.set_color("red");
            obj.set_text("w3");
            this.addChild(obj.name, obj);

            obj = new Div("div_Tab", "absolute", "230", "5", null, null, "152", "0", this);
            obj.set_taborder("10");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Tab,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_Tab.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1280, 42, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MDIFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MDIFrame.xfdl", "Lib::common.xjs");
        this.registerScript("MDIFrame.xfdl", function() {
        /***********************************************************************************
        * SYSTEM      : 넥사크로플랫폼 PackageB
        * BUSINESS    : 넥사크로플랫폼 PackageB
        * FILE NAME   : MDIFrame.xfdl
        * PROGRAMMER  : 
        * DATE        : 
        * DESCRIPTION : MDIFrame
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER			DESCRIPTION
        *------------------------------------------------------------------
        * 
        *------------------------------------------------------------------
        ***********************************************************************************/

        /***********************************************************************************
        * Common Library
        ***********************************************************************************/
        //include "Lib::common.xjs";

        
        /***********************************************************************************
        * Global/Local Variable
        ***********************************************************************************/
        this.FIRST_GAP = 1;
        this.BTN_GAP = 0;
        this.MARGIN_WIDTH = 38;
        this.TAB_WIDTH = 90;
        this.TAB_HEIGHT = 36;
        this.TAB_EXTRA_RIGHT_GAP = 13;
        this.EXTRA_WIDTH = 7;
        this.EXTRA_TOP = 15;
        this.EXTRA_HEIGHT = 7;
        this.EXTRA_BTN_PREFIX = "EXTRA_";
        this.TAB_BTN_PREFIX = "TAB_";
        /***********************************************************************************
        * Form Event
        ***********************************************************************************/
        /**
         * form onload 함수
         * @return 
         * @example
         *
         * @memberOf this
         */
        this.fn_onload = function(obj,e)
        {
        }

         /**
         * 메뉴 tab 삭제
         * @param {string} 메뉴key값
         * @param
         * @return
         * @example
         * @memberOf 
         */
        this.fn_delTab = function (winID)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) return false;

        	var tabID = this.TAB_BTN_PREFIX + winID;
        	// Removing Tab button.
        	this.fn_delTabBtn(tabID);
        	this.ds_Tab.deleteRow(nRow);
        	this.fn_redrawTab();
        	return true;
        }

        /**
         * 메뉴 tab Button 동적생성
         * @public
         * @param {string} 메뉴키값
         * @param {string} 메뉴명
         * @return
         * @example
         * @memberOf 
         */
        this.fn_addTab = function (winID,name)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	
        	if (nRow > -1) return nRow;
        	
        	var tabID = this.TAB_BTN_PREFIX + winID;	
        		nRow = this.ds_Tab.addRow();
        		this.ds_Tab.setColumn(nRow, "TAB_ID", tabID);
        		this.ds_Tab.setColumn(nRow, "WIN_ID", winID);
        		this.ds_Tab.setColumn(nRow, "TITLE", name);
        	
        	this.fn_addTabBtn(tabID, name);
        	this.fn_redrawTab();
        	this.bClose = true;
        	return nRow;
        }

        /**
         * 메뉴 tab 신규 동적 생성
         * @public
         * @param {string} 메뉴키값
         * @param {string} 메뉴명
         * @return
         * @example
         * @memberOf 
         */
        this.fn_addTabBtn = function (tabID,tabName)
        {
         	var tabObj;
         	var BtnObj;
         	var exBtnId = this.EXTRA_BTN_PREFIX + tabID;   //extra button id
         	var tabLength = 35;
            var objTextWidth =  "";
             
        	if (this.fn_findObj(tabID) == null) 
        	{
        		tabObj = new Button();
        	    tabObj.init(tabID, "absolute", this.fn_getLeft(tabID), 0,0,this.TAB_HEIGHT,null,null);
        	    this.div_Tab.addChild(tabObj.name, tabObj);
        	}
        	
        	tabObj.style.set_align("left middle");
        	tabObj.style.set_padding_left("5");
        	tabObj.set_text(tabName);
        	tabObj.set_tooltiptext(tabName);
        	tabObj.setEventHandler("onclick", this.btn_Tab_OnClick, this);
        	tabObj.set_visible(true);	
        	tabObj.show();
        	var nCompWidth = this.fn_getWidth(tabObj,tabName)+30;	
        	tabObj.set_cssclass("btn_MDI_02");	
        	tabObj.set_width(nCompWidth+this.TAB_EXTRA_RIGHT_GAP);
            
        	if (this.fn_findObj(exBtnId) == null && tabName != "MAIN" ) 
        	{
        		BtnObj = new Button();		
        		BtnObj.init(exBtnId, "absolute", tabObj.getOffsetRight()-this.TAB_EXTRA_RIGHT_GAP, this.EXTRA_TOP, tabObj.getOffsetRight() - this.TAB_EXTRA_RIGHT_GAP + this.EXTRA_WIDTH - (tabObj.getOffsetRight() - this.TAB_EXTRA_RIGHT_GAP), this.EXTRA_TOP + this.EXTRA_HEIGHT - this.EXTRA_TOP);
                
        		this.fn_addObj(exBtnId, BtnObj);
        	
                BtnObj.style.set_cursor("hand"); // set  
        		BtnObj.setEventHandler("onclick", this.btn_Extra_OnClick, this);
        		BtnObj.set_visible(true);
        		BtnObj.show();	
        	    BtnObj.set_cssclass("btn_MDI_03");
        	}
        }
          
        /**
         * 메뉴 tab 이동
         * @public
         * @param {string} 메뉴키값
         * @return
         * @example
         * @memberOf 
         */
        this.fn_moveTab = function (winID)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) return nRow;
        	
        	var tabID = this.TAB_BTN_PREFIX + winID;	
        	this.fn_setActive(tabID);
        	this.fn_redrawTab();
        }

        
        /**
         * 메뉴 tab 변경 처리 함수
         * @public
         * @param {string}WIN_ID fromID
         * @param {string} WIN_ID toID
         * @return
         * @example
         * @memberOf 
         */
        this.fn_changeTab = function (fromID,toID)
        {
        	var nfromRow = this.ds_Tab.findRow("WIN_ID", fromID);
        	var ntoRow = this.ds_Tab.findRow("WIN_ID", toID);
        	this.ds_Tab.moveRow(nfromRow, ntoRow);
        	this.fn_redrawTab();
        }

        
        /**
         * 메뉴 tab id가져오는 함수
         * @public
         * @param {string} 메뉴키값
         * @return
         * @example
         * @memberOf 
         */
        this.fn_getTab = function (winID)
        {
        	return this.ds_Tab.findRow("WIN_ID", winID);
        }

        /**
         * 메뉴 현재 tab id가져오는 함수
         * @public
         * @param
         * @return  {string} winid
         * @example
         * @memberOf 
         */
        this.fn_getCurTab = function ()
        {
        	if (this.ds_Tab.rowposition < 0) 
        	{
        		return false;
        	}
        	return this.ds_Tab.getColumn(this.ds_Tab.rowposition, "WIN_ID");
        }

        /**
         * 메뉴 현재 tab 정보 가져오는 함수
         * @public
         * @param
         * @return  {string} winid
         * @example
         * @memberOf 
         */
        this.fn_getTabInfo = function (winID,sCol)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) 
        	{
        		return "";
        	}
        	return this.ds_Tab.getColumn(nRow, sCol);
        }

        /**
         * 메뉴 현재 tab title 가져오는 함수
         * @public
         * @param    {string} winID
         * @return  {string} TITLE
         * @example
         * @memberOf 
         */
        this.fn_getTitle = function (winID)
        {
        	var curRow = this.ds_Tab.findRow("winID", winID);
        	if (this.lookup("nRow") < 0) 
        	{
        		return "";
        	}
        	return this.ds_Tab.getColumn(curRow, "TITLE");
        }

        /**
         *  메뉴 tab title setting
         * @public
         * @param    {string} winID
         * @return  {string} TITLE
         * @example
         * @memberOf 
         */
        this.fn_setTitle = function (winID,sTitle)
        {
        	var nRow = this.ds_Tab.findRow("WIN_ID", winID);
        	if (nRow < 0) 
        	{
        		return "";
        	}

        	var tabID = this.TAB_BTN_PREFIX + winID;
        	var panelObj = this.fn_findObj(tabID);
        	if ((panelObj == null) || (panelObj == "")) 
        	{
        		return;
        	}
        	panelObj.set_text(sTitle);
        }

        /**
         *  메뉴 tab onclick event 
         * @public
         * @param  
         * @return 
         * @example
         * @memberOf 
         */
        this.btn_Tab_OnClick = function (obj,e)
        {
            var winId = obj.name.split(this.TAB_BTN_PREFIX).join("");

        	 this.isActiveFrame(winId);

        }

        /**
         * 메뉴 tab extra버튼 클릭시 발생되는 event
         * @public
         * @param  
         * @return 
         * @example
         * @memberOf 
         */
        this.btn_Extra_OnClick = function (obj,e)
        {
        	//alert(obj.name);
            var winId = obj.name.split(this.TAB_BTN_PREFIX).join("").split(this.EXTRA_BTN_PREFIX).join("");
             var curTab = this.fn_getCurTab();
             this.isActiveFrame(curTab);
         	this.fn_TabOnClose(winId);
        	
        	this.bClose = true;
        }
         
        /**
         * 메뉴 tab 닫기 실행 함수
         * @public
         * @param {string} winid
         * @param {string} winid
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_TabOnClose = function (winid)
        {
        	var objFrame = Iject.$["workFrame"].frames;
        	var objFrameCnt = Iject.$["workFrame"].frames.length;
            var nRow = application.gds_openMenu.findRow("WIN_ID", winid);
            
           // this.gfn_findData(application.gds_openMenu, "WIN_ID", winid);
           
            var nCloseIdx = nRow;
            application.gds_openMenu.deleteRow(nRow);
            // MDI 탭버튼 삭제
            if(!Eco.isEmpty(objFrame[winid]) && nRow > -1)
            {
                this.fn_delTab(winid);
                this.bClose = false;
                var rObj = Iject.$["workFrame"].removeChild(winid);
            }
            
            //window id
            var winId = application.gds_openMenu.getColumn(application.gds_openMenu.rowposition,"WIN_ID");

            // 탭버튼을 닫은 후에 next Tab버튼 설정
            this.fn_setActive(this.ds_Tab.getColumn(this.ds_Tab.findRow("WIN_ID", winId),"TAB_ID"));
        }

         
        /**
         * 메뉴 Mdi 다음  split버튼 
         * @public
         * @return 
         * @example
         * @memberOf 
         */
        this.btn_NexMdi_onclick = function (obj,e)
        {
        	this.fn_moveFirst(this.fn_getFirstTabIndex() + 1);
        	this.fn_redrawTab();
        }
         
        /**
         * 메뉴 Mdi 이전   split버튼 
         * @public
         * @return 
         * @example
         * @memberOf 
         */
        this.btn_PreMdi_onclick = function (obj,e)
        {
        	this.fn_moveFirst(this.fn_getFirstTabIndex() - 1);
        	this.fn_redrawTab();
        }

        /**
         * menu tab 버튼 첫번째 index 가져오는 함수
         * @public
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_getFirstTabIndex = function ()
        {
        	for(var i=0; i < this.ds_Tab.rowcount;i++)
        	{
        		var tabID   = this.ds_Tab.getColumn(i, "TAB_ID");
        		var tabObj  = this.fn_findObj(tabID);
        		if(0 < tabObj.left) {
        			return i;
        		}
        	}
        	return -1;
        }

        /**
         * menu tab 버튼 첫번째 이동 함수
         * @public
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_moveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var tabID;
        	var tabObj;
        	var btnObj;
        	var tabFirstObj;

        	nIndex = this.fn_getFirstTabIndex();
        	if (nIndex < 0) 
        	{
        		return;
        	}

        	if (nMoveIdx < 0) 
        	{
        		return;
        	}
        	if (nMoveIdx >= this.ds_Tab.rowcount) 
        	{
        		return;
        	}

        	tabID = this.ds_Tab.getColumn(nIndex, "TAB_ID");
        	var tabFirstObj = this.fn_findObj(tabID);

        	tabID = this.ds_Tab.getColumn(nMoveIdx, "TAB_ID");
        	tabObj = this.fn_findObj(tabID);

        	var nShiftPos = tabObj.getOffsetLeft() - tabFirstObj.getOffsetLeft();

        	for (var i = 0; i < this.ds_Tab.rowcount; i++) 
        	{
        		tabID = this.ds_Tab.getColumn(i, "TAB_ID");
        		tabObj = this.fn_findObj(tabID);
        		btnObj = this.fn_findObj(this.EXTRA_BTN_PREFIX + tabID);		
        		tabObj.move(tabObj.getOffsetLeft() - nShiftPos, tabObj.getOffsetTop());
        		if(Eco.isEmpty(btnObj) == false )
        			btnObj.move(btnObj.getOffsetLeft() - nShiftPos, btnObj.getOffsetTop());
        	}
        }

        /**
         * menu tab 현재 버튼 이동
         * @public
         * @param {string} tabID
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_setActive = function (tabID)
        {
        	var nRow = this.ds_Tab.findRow("TAB_ID", tabID);
        	if (nRow < 0) 
        	{
        	    
        		return false;
        	}
        	this.ds_Tab.set_rowposition(nRow);
        	this.fn_setActiveBtn(tabID);

        	return true;
        }

        /**
         * menu tab 현재 버튼 이동
         * @public
         * @param {string} tabID
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_setActiveBtn = function (tabID)
        {
        	var TabObj;
        	var BtnObj;

        	for (var i = 0; i < this.ds_Tab.rowcount; i++) 
        	{
        		TabObj = this.fn_findObj(this.ds_Tab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fn_findObj(this.EXTRA_BTN_PREFIX + this.ds_Tab.getColumn(i, "TAB_ID"));
        		
        		if(tabID == this.ds_Tab.getColumn(i, "TAB_ID")) 
        		{
        		
        			TabObj.set_cssclass("btn_MDI_02");
        			this.fn_showTabBtn(i);
        		}
        		else 
        		{
        		   TabObj.set_cssclass("btn_MDI_01");
        			

        		}
        	}
        }

        /**
         * menu tab 현재 버튼 보여주는 함수
         * @public
         * @param {string} nIdx
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_showTabBtn = function (nIdx)
        {
        	var i;
        	var nLeft;
        	var nRight;

        	var tabObj = this.fn_findObj(this.ds_Tab.getColumn(nIdx, this.lookup("_ID")));
        	nLeft = tabObj.getOffsetLeft();
        	nRight = tabObj.getOffsetRight();

        	if(0 <= nLeft && this.div_Tab.getOffsetWidth() >= nRight) 
        	{
        		return;
        	}

        	nRight = tabObj.getOffsetRight();
        	nLeft = tabObj.getOffsetLeft();

        	if (nLeft < 0) 
        	{
        		this.fn_moveFirst(nIdx);
        		return;
        	}

        	for (var i = this.fn_getFirstTabIndex() + 1; i < this.ds_Tab.rowcount; i++) 
        	{
        		tabObj = this.fn_findObj(this.ds_Tab.getColumn(i, "TAB_ID"));
        		if (nRight - tabObj.getOffsetLeft() <= this.div_Tab.getOffsetWidth()) 
        		{
        			break;
        		}
        		this.fn_moveFirst(i);
        	}
        }

        /**
         * menu tab 삭제
         * @public
         * @param {string} tabID
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_delTabBtn = function (tabID)
        {
        	var exBtnId = this.EXTRA_BTN_PREFIX + tabID;
        	var TabObj = this.fn_findObj(tabID);
        	var BtnObj = this.fn_findObj(exBtnId);

        	var nShitLeft = TabObj.getOffsetWidth() + this.BTN_GAP;
        	var curRow = this.ds_Tab.findRow("TAB_ID", tabID);

        	this.fn_removeObj(exBtnId);
        	this.fn_removeObj(tabID);

        	for (var i = curRow + 1; i < this.ds_Tab.rowcount; i++) 
        	{
        		TabObj = this.fn_findObj(this.ds_Tab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fn_findObj(this.EXTRA_BTN_PREFIX + this.ds_Tab.getColumn(i, "TAB_ID"));
        		TabObj.move(TabObj.getOffsetLeft() - nShitLeft, TabObj.getOffsetTop());
        		BtnObj.move(BtnObj.getOffsetLeft() - nShitLeft, BtnObj.getOffsetTop());
        	}
        }

        /**
         * menu tab 찾는 함수
         * @public
         * @param {string} tabID
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_findObj = function (strId)
        {
        	return this.div_Tab.components[strId];
        }

        /**
         * menu tab 삭제  함수
         * @public
         * @param {string} strId
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_removeObj = function (strId)
        {
        	if (this.fn_findObj(strId) == null) 
        	{
        		return;
        	}
        	var strObj = this.div_Tab.removeChild(strId);
        	if (strObj != null) 
        	{
        		strObj.destroy();
        	}
        }

        /**
         * menu tab 추가   함수
         * @public
         * @param {string} strId
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_addObj = function (strId,obj)
        {
        	return this.div_Tab.addChild(strId, obj);
        }

        /**
         * menu tab 체크 
         * @public
         * @param 
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_redrawTab = function ()
        {
        	var tabObj;
        	var exBtnObj;

        	this.fn_checkShowBtnAll();
        	this.fn_setTabSpinBtnShow();
        }

        /**
         * menu tab 모든 버튼 체크 
         * @public
         * @param 
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_checkShowBtnAll = function ()
        {
        	if (this.ds_Tab.rowcount == 0) return;

        	var tabFirstObj = this.fn_findObj(this.ds_Tab.getColumn(0, "TAB_ID"));
        	var tabLastObj = this.fn_findObj(this.ds_Tab.getColumn(this.ds_Tab.rowcount - 1, "TAB_ID"));
        	var nLeft = tabFirstObj.getOffsetLeft();
        	var nRight = tabLastObj.getOffsetRight();

        	if (this.div_Tab.getOffsetWidth() >= (nRight - nLeft)) 
        	{
        		this.fn_moveFirst(0);
        		return;
        	}
        }

        /**
         * left size조정 
         * @public
         * @param 
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_getLeft = function (tabID)
        {
        	var curRow = this.ds_Tab.findRow("TAB_ID", tabID);
        	if (curRow == 0) return this.FIRST_GAP;

        	var prevTab = this.fn_findObj(this.ds_Tab.getColumn(curRow - 1, "TAB_ID"));
        	return prevTab.getOffsetRight() + this.BTN_GAP;
        }

        /**
         * width size조정 
         * @public
         * @param {object} 버튼
         * @param {name}   버튼명
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_getWidth = function (obj,name)
        {
            var tabID = obj.name;
        	var curRow = this.ds_Tab.findRow("TAB_ID", tabID);
        	var TabObj = this.fn_findObj(this.ds_Tab.getColumn(curRow, "TAB_ID"));
            var objFont =  Iject.Util.getObjFont(obj,10);
        	var objSize = nexacro._getTextSize2(name, objFont);

        	return objSize[0];

        }

        /**
         * mdi arrange 처리 함수
         * @public
         * @return 
         * @example
         * @memberOf 
         */
        this.btn_arrange_onclick = function(obj,e)
        {
            var strType = obj.name.replace("btn_", "");
        	this.fn_ArrangeWin(strType);
        }

        /**
         * mdi spin 버튼 visible 처리
         * @public
         * @return 
         * @example
         * @memberOf 
         */
        this.fn_setTabSpinBtnShow = function ()
        {
        	var tabObj;
        	
        	if(this.ds_Tab.rowcount == 0) 
        	{
        		this.btn_PreMdi.set_visible(false);
        		this.btn_NexMdi.set_visible(false);
        		return;
        	}

        	tabObj = this.fn_findObj(this.ds_Tab.getColumn(this.ds_Tab.rowcount - 1, "TAB_ID"));

        	if(this.div_Tab.getOffsetWidth() < tabObj.getOffsetRight()) 
        	{
        		this.btn_NexMdi.set_visible(true);
        	}
        	else 
        	{
        		this.btn_NexMdi.set_visible(false);
        	}

        	tabObj = this.fn_findObj(this.ds_Tab.getColumn(0, "TAB_ID"));

        	if(tabObj.getOffsetLeft() < 0) 
        	{
        		this.btn_PreMdi.set_visible(true);
        	}
        	else 
        	{
        		this.btn_PreMdi.set_visible(false);
        	}
        }

        /**
         * 열려있는 윈도우 화면을 정렬
         * @param	: 	strType: 정렬 타입
         * @return	:   N/A
         */
        this.fn_ArrangeWin = function(strType) 
        {
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = Iject.$["workFrame"].frames.length;
        	if (Iject.$["gds_openmenu"].getRowCount() < 1) return;

        	switch(strType)
        	{
        		case "maximize" :
        		for (var i=0; i<iFramesCnt; i++) 
        		{
        			Iject.$["workFrame"].frames[i].set_openstatus("maximize");		
        			Iject.$["workFrame"].frames[i].set_showtitlebar(false);		
        			Iject.$["workFrame"].frames[i].style.set_border("0 solid #006666ff");
        		}
                
        	   break;
        	   case "closeAll" :
        	   
        	  
        		for (var i=iFramesCnt; i>1; i--) 
        		{			
        			    //this.fn_TabOnClose(Iject.$["workFrame"].frames[i-1].name);
        				Iject.$["mdiFrame"].form.fn_TabOnClose(Iject.$["workFrame"].frames[i-1].name);
        		}
        	    break;
        	   case "hidden" :
        		for (i=0; i<iFramesCnt; i++) 
        		{
        			Iject.$["workFrame"].frames[i].set_showtitlebar(true);
        			Iject.$["workFrame"].frames[i].style.set_border("1 solid #7f7f7bff");
        			Iject.$["workFrame"].frames[i].style.set_bordertype("round 3 3");
        			Iject.$["workFrame"].frames[i].set_openstatus("minimize");		
        		}
        		
        		Iject.$["workFrame"].arrange(strType);
        	    break;
        	    default :
        		for (i=0; i<iFramesCnt; i++) 
        		{			
        			//if( Iject.$["workFrame"].frames[i].name != "MainForm" ){			
        				Iject.$["workFrame"].frames[i].set_showtitlebar(true);
        				Iject.$["workFrame"].frames[i].style.set_border("1 solid #7f7f7bff");
        			//}	

        			Iject.$["workFrame"].frames[i].style.set_bordertype("round 3 3");
        			Iject.$["workFrame"].frames[i].set_openstatus("normal");							
        		}
        		
        		  Iject.$["workFrame"].arrange(strType);
        	    break;
        	   
        	}
        }

         /**
         * 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * @private
         * @param {string} winid: 윈도우 생성 키
         * @param {string} aArgs  : 전달인자
         * @return {boolen}
         * @example
         *
         * @memberOf 
         */
        this.isActiveFrame = function (winid,aArgs)
        {
        	var framesInfo = Iject.$["workFrame"].frames;
        	if(Eco.isEmpty(winid)){return true;}

        	if(framesInfo[winid])
        	{
        		this.fn_moveTab(winid);   //tab이동		
        		framesInfo[winid].setFocus();
        		return true;
        	}
        }

        //JKIM_2020.02.05 : close a previous window
        this.closePreWin = function()
        {
        	var iFramesCnt = Iject.$["workFrame"].frames.length;
        	
        	for (var i=iFramesCnt; i>1; i--) 
        	{			
        		Iject.$["mdiFrame"].form.fn_TabOnClose(Iject.$["workFrame"].frames[i-1].name);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.btn_PreMdi.addEventHandler("onclick", this.btn_PreMdi_onclick, this);
            this.btn_NexMdi.addEventHandler("onclick", this.btn_NexMdi_onclick, this);
            this.btn_maximize.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_cascade.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_closeAll.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_closeAll.addEventHandler("onkillfocus", this.btn_closeAll_onkillfocus, this);
            this.div_Tab.addEventHandler("onclick", this.div_Tab_onclick, this);

        };

        this.loadIncludeScript("MDIFrame.xfdl");

       
    };
}
)();
