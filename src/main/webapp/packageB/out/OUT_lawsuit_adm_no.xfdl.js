(function()
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
                this.set_name("out_lawsuit_adm_no");
                this.set_classname("out_lawsuit_adm_no001");
                this.set_titletext("소송관리번호조회");
                this._setFormPosition(0,0,600,431);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search_cb", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">전체</Col><Col id=\"value\">0</Col></Row><Row><Col id=\"id\">소제기의뢰번호</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"id\">심급명</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"id\">원피고명</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"id\">소송담당자</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit_no", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"INT\" size=\"10\"/><Column id=\"instAdmEntLyrId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceType_cp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit_no_cp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sim", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view_01", "absolute", "14", "106", "580", "282", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view_00", "absolute", "14", "65", "580", "35", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Search", "absolute", "20", "112", "568", "270", null, null, this);
            obj.set_taborder("4");
            obj.set_scrollbars("autoboth");
            obj.set_binddataset("ds_lawsuit_no");
            obj.set_autofittype("col");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_nodatatext("조회된 자료가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"58\"/><Column size=\"145\"/><Column size=\"86\"/><Column size=\"99\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소송관리번호\"/><Cell col=\"1\" text=\"심급\"/><Cell col=\"2\" text=\"심급명\"/><Cell col=\"3\" text=\"원피고구분\"/><Cell col=\"4\" text=\"원피고명\"/><Cell col=\"5\" text=\"소송담당자명\"/></Band><Band id=\"body\"><Cell text=\"bind:lawsuitAdmNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:instAdmCode\" combodataset=\"ds_sim\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:instAdmName\"/><Cell col=\"3\" text=\"bind:lawsuitCpPladefSepcode\"/><Cell col=\"4\" text=\"bind:pladefName\"/><Cell col=\"5\" text=\"bind:insaName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "20", "70", "568", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Edit("search_ed", "absolute", "220", "73", "230", "19", null, null, this);
            obj.set_taborder("6");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Button("search_btn_", "absolute", "457", "71", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_search", "absolute", "73", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("@ds_search_cb");
            obj.set_codecolumn("value");
            obj.set_datacolumn("id");
            obj.set_taborder("8");
            obj.style.set_border("1 solid #a8a8a8ff");

            obj = new Div("div_page", "absolute", "14", "400", "573", "18", null, null, this);
            obj.set_taborder("9");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "82", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("13");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "452", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("14");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "122", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "154", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("16");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "186", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "218", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("18");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "250", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "282", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("20");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "314", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("21");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "346", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "378", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "410", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "580", "50", null, null, this);
            obj.set_taborder("12");
            obj.set_text("  소송관리번호조회");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_visible("true");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 431, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("out_lawsuit_adm_no001");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송관리번호조회");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OUT_lawsuit_adm_no.xfdl", "Lib::common.xjs");
        this.registerScript("OUT_lawsuit_adm_no.xfdl", function() {
        //include "Lib::common.xjs";

        var fv_iStartPageNo 	= 0;	//전체 페이지 순서
        var fv_iUnitSelRowNo 	= 100;	//한번 server 호출시 가져올 row 갯수
        var fv_iStartSelRowNo 	= 1;	//server 호출시 시작할 row no
        var fv_iMaxPageNum 		= 10;	//화면에 보여줄 최대 page번호 갯수
        var fv_iServerRowCount 	= 0;	//server에서 넘어온 Row갯수

        
        /******************************************************************************************
         * 함  수  명	:	out_lawsuit_adm_no001_onload() / PC 버전
         * 입      력	:	
         * 반      환	:	 
         * 기      능	:	소송관리번호 조회 페이지 구분코드 "전체" 로 검색
         *****************************************************************************************/
        this.out_lawsuit_adm_no_onload=function(obj,e)
        {
        	//this.gfnOnload(this);
        	this.cb_search.set_value(0);
        	this.gf_codeComListLoad("ds_sim"		, "ds_sim"			, "N", "", "", "fnCallback", "G01");
        	this.LawNoSearch();
        	this.search_ed.setFocus();
        }

        /********************************************************************************
         * Desc		: 소송관리번호 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
         this.LawNoSearch = function()
         {
        	var selectedId = this.cb_search.value;
        	var selectedId1 = this.search_ed.text;
        	var lyrid = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	
        	// JKIM_2020.02.02 : sql mapper (out/outlawsuit_skw.xml) 전체검색 불가 수정
        	lyrid = ""; // 로그인 ID가 반드시 변호사가 아니다. 수정해야 함
        		
        	var strSvcid="selectList";
        	var strController="/out/selectlawsuitlist.do";
        	var strParam = "selectedId="+"\""+selectedId+"\""; //"를 문자로 인식시키기 위해 '\'를 앞에 붙인다.
        	strParam += "selectedId1="+"\""+selectedId1+"\"";
        	strParam += "lyrId="+"\""+lyrid+"\"";
        	// 변호사no parameter로 넘기기.
        	//alert(strParam);
        	
        	this.gfn_transaction(this,strSvcid,strController,"","ds_lawsuit_no=ds_output",strParam,"fnCallback");
        	
        	/*this.gfn_transaction=function(objFrm, svcid, strURL, inputDs, outputDs, 
        									params, callbackFnc)*/
         }
         
         
        /********************************************************************************
         * Event	: btn_search onclick
         * Desc		:소송관리번호조회 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.search_btn_onclick = function(obj,e)
        {
        	var search_ed_test = "\""+this.search_ed.text+"\""; //검색어 입력확인을 위한 변수
        	
        	if(this.cb_search.index!=0)
        	{
        		if(search_ed_test=="\""+"\"")
        		{
        			alert("검색어를 입력하세요.");
        			//this.search_ed.text="";
        			this.search_ed.setFocus();
        			return;
        		}
        	}
        	else
        	{
        		if(search_ed_test!="\""+"\"")
        		{
        			alert("검색조건을 선택해주세요.");
        			return;
        		}
        	}
        	//조회 버튼 클릭 시 페이징 초기화
        	fv_iStartPageNo 	= 0;
        	fv_iUnitSelRowNo 	= 100;
        	fv_iStartSelRowNo 	= 1;
        	fv_iMaxPageNum 		= 10;
        	fv_iServerRowCount	= 0;
        		
        	this.LawNoSearch();
        }

        /********************************************************************************
         * Event	: Button_search_ed OnKeyDown
         * Desc		: 엔터키를 입력했을 경우 발생되는 Event
         *******************************************************************************/
        this.search_btn_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{
        		this.search_btn_onclick();
        	}
        }

        
        /*===============================================================================
         * User Function 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Desc		: transaction 후 호출되는 콜백함수
                      소송관리 조회,신규,수정,삭제,결재
         * Param	: 1.errcd  - Error Code
        			  2.errmsg - Error Msg
        			  3.svcid  - transaction id
         * Return	: 없음
         *******************************************************************************/ 
        this.fnCallback=function(svcid,errcd,errmsg)
        {
        	switch(svcid)
        	{
        		case "selectList":
        			if(errcd!="0")
        			{
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        						+ "소송관리조회 에러내용 : " + errmsg);
        				return false;
        			}
        			else
        			{
        				/*
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				this.ds_lawsuit_no.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+
        										" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        										
        				trace("+++ RowCount = " + this.ds_lawsuit_no.getRowCount());
        										
        				if(this.ds_lawsuit_no.getRowCount()==0) //rowCount == 0 아닌데 왜 걸리지??
        				{
        					this.div_page.set_visible("false");
        					alert("조회할 자료가 없습니다.");
        					this.ds_lawsuit_no.filter("");
        					return;
        				}
        				else
        				{
        					this.div_page.set_visible("true");
        					this.fv_iServerRowCount = this.ds_lawsuit_no.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("red");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        				}
        				*/
        			}
        			break;
        	}
        	
        }

        /*===============================================================================
         * Grid 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Event	: grd_Search_OnCellDblClick
         * Desc		: 소송관리번호 목록을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.grd_Search_oncelldblclick = function(obj,e)
        {
        	var val1 = this.grd_Search.getCellValue(e.row,0);
        	var val2 = this.grd_Search.getCellValue(e.row,1);
        	this.close(this.gfnNVL(val1)+this.gfnNVL(val2));
        }
        // 소송관리번호(index[0]) + 심급차수(index[1])

        /********************************************************************************
         * Desc		: 화면 종료시 
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/

        this.out_lawsuit_adm_no_onclose = function(obj,e)
        {
        	this.close();
        }

        /**************************************************************************
        	index click event

        ***************************************************************************/
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iFirstNum = (iNo-1) * fv_iMaxPageNum +1;
        	var iLastNum = iFirstNum + fv_iMaxPageNum;
        	this.fn_SetStyle();
        	obj.style.set_color("red");
        	this.ds_lawsuit_no.filter("");
        	this.ds_lawsuit_no.filter("rownum >= "+ iFirstNum+" && rownum < " + iLastNum);
        }

        /**************************************************************************
        	prev click event

        ***************************************************************************/

        this.div_page_stc_Prev_onclick = function(obj,e)
        {
        	fv_iStartPageNo = fv_iStartPageNo -1;
        	this.fnCallback("selectList", 0, "succ");
        }

        /**************************************************************************
        	next click event

        ***************************************************************************/

        this.div_page_stc_Next_onclick = function(obj,e)
        {
        	fv_iStartPageNo = fv_iStartPageNo +1;
        	this.fnCallback("selectList",0,"succ");
        }

        /**************************************************************************
        	Page Num Setting

        ***************************************************************************/
        this.fn_SetPageNo = function()
        {
        	var sPage = fv_iStartPageNo * fv_iMaxPageNum;
        	
        	//prev button
        	if(fv_iStartPageNo < 1)
        	{
        		this.div_page.stc_Prev.set_visible(false);
        	}
        	else
        	{
        		this.div_page.stc_Prev.set_visible(true);
        	}
        	
        	// last button
        	if(fv_iServerRowCount < fv_iUnitSelRowNo)
        	{
        		this.div_page.stc_Next.set_visible(false);
        	}
        	else
        	{
        		this.div_page.stc_Next.set_visible(true);
        	}
        	
        	// index Num
        	for(var i=0; i < fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].set_visible(true);
        		this.div_page.components["stc_No"+i].set_text(sPage+i+1);
        		
        		if(fv_iServerRowCount < (i * fv_iMaxPageNum))
        		{
        			this.div_page.components["stc_No"+i].set_visible(false);
        		}
        		else
        		{
        			this.div_page.components["stc_No"+i].set_visible(true);
        		}
        	}
        }

        /**************************************************************************
        	Style

        ***************************************************************************/
        this.fn_SetStyle = function()
        {
        	for(var i=0; i<fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].style.set_color("black");
        	}
        }

        

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.out_lawsuit_adm_no_onload, this);
            this.addEventHandler("onclose", this.out_lawsuit_adm_no_onclose, this);
            this.grd_Search.addEventHandler("oncelldblclick", this.grd_Search_oncelldblclick, this);
            this.grd_Search.addEventHandler("onheadclick", this.grd_Search_onheadclick, this);
            this.search_ed.addEventHandler("onkeydown", this.search_btn_onkeydown, this);
            this.search_btn_.addEventHandler("onclick", this.search_btn_onclick, this);
            this.div_page.stc_Prev.addEventHandler("onclick", this.div_page_stc_Prev_onclick, this);
            this.div_page.stc_Next.addEventHandler("onclick", this.div_page_stc_Next_onclick, this);
            this.div_page.stc_No0.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No1.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No2.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No3.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No4.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No5.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No6.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No7.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No8.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No9.addEventHandler("onclick", this.div_page_stc_No_onclick, this);

        };

        this.loadIncludeScript("OUT_lawsuit_adm_no.xfdl");

       
    };
}
)();
