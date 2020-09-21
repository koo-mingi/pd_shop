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
                this.set_name("pop_depo_no");
                this.set_classname("pop_depo_no");
                this.set_titletext("담당자 조회");
                this._setFormPosition(0,0,700,459);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mgr", this);
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"INT\" size=\"256\"/><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaEmail\" type=\"STRING\" size=\"256\"/><Column id=\"insaDeptCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_official", this);
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrPsw\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoRelaSep\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoTeamname\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoMail\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoPhone\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoHdpn\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoCityCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"classCode\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg", "absolute", "9", "8", "682", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#333333ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("법률관계자 정보 조회");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 굴림");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "10", "63", "681", "35", null, null, this);
            obj.set_taborder("5");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "16", "68", "669", "25", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            this.addChild(obj.name, obj);

            obj = new Edit("search_mgr", "absolute", "282", "71", "206", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.style.set_selectcolor("#333333ff");
            obj.style.set_selectbackground("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.style.set_padding("0 5 0 5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "493", "70", "52", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("100");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "21", "117", "197", "19", null, null, this);
            obj.set_taborder("7");
            obj.set_text("법률관계 목록");
            obj.style.set_color("black");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_depo", "absolute", "10", "137", "681", "268", null, null, this);
            obj.set_taborder("8");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_binddataset("ds_official");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,0 none #808080ff,0 none #808080ff");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/><Column size=\"169\"/><Column size=\"168\"/><Column size=\"169\"/><Column size=\"310\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 9 dotum;\" text=\"법률관계자번호\"/><Cell col=\"1\" style=\"font:bold 9 dotum;\" text=\"소속명\"/><Cell col=\"2\" style=\"font:bold 9 dotum;\" text=\"이름\"/><Cell col=\"3\" style=\"font:bold 9 dotum;\" text=\"이메일\"/><Cell col=\"4\" style=\"font:bold 9 dotum;\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:legalOfficialinfoRelaNo\" combodisplayrowcount=\"5\"/><Cell col=\"1\" text=\"bind:legalOfficialinfoTeamname\" combodisplayrowcount=\"5\"/><Cell col=\"2\" text=\"bind:legalOfficialinfoLyrName\" combodisplayrowcount=\"5\"/><Cell col=\"3\" text=\"bind:legalOfficialinfoMail\" combodisplayrowcount=\"5\"/><Cell col=\"4\" text=\"bind:legalOfficialinfoPhone\" editlimit=\"-1\" combodisplayrowcount=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select", "absolute", "603", "424", "39", "24", null, null, this);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9 9");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "646", "424", "39", "24", null, null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9 9");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "150", "70", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_value("insa_sabun");
            obj.set_text("사번");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.set_innerdataset("@ds_dept");
            obj.set_index("0");

            obj = new Div("div_page", "absolute", "-5", "431", "573", "18", null, null, this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("13");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("14");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("16");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("18");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("20");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("21");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("btn_legal", "absolute", "639", "115", "52", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_opacity("100");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 459, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pop_depo_no");
            		p.set_titletext("담당자 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LEGAL_OFFICIAL_CHECK.xfdl", "Lib::common.xjs");
        this.registerScript("LEGAL_OFFICIAL_CHECK.xfdl", function() {

        //include "Lib::common.xjs";

        // 닫기 버튼 클릭 시 이벤트
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        // 모달창 업로드 시 자동 검색 호출
        this.pop_depo_no_onload = function(obj,e)
        {
        	this.gf_classCodeListLoad("dsComCodeList", "ds_dept", "Y","transaction_callback", "Z01");
        }

        // 검색 버튼 호출
        this.btn_search_onclick = function(obj,e)
        {	

        	//소송관리번호조회 버튼 클릭시 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	
        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	var searchCondition = this.Combo00.value;
        	var searchKeyword = this.search_mgr.value;
        	
        	this.ds_search.setColumn(0, "searchCondition", searchCondition);
        	this.ds_search.setColumn(0, "searchKeyword", searchKeyword);
        	
        	this.gfn_transaction(this,
        						"selectCharList",
        						"depo/Depo/selectCharList.do",
        						"ds_search=ds_search",
        						"ds_mgr=ds_output",
        						"",
        						"transaction_callback"
        						);
        	
        }

        // 트랜잭션 후 콜백
        this.transaction_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	if(sSvcId=='dsComCodeList')
        	{
        		this.btn_search_onclick();
        	}
        	else if (sSvcId=='selectCharList')
        	{
        		var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        		this.ds_mgr.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        	
        		if (this.ds_mgr.getRowCount() == 0)
        		{
        			this.ds_mgr.filter("");
        			this.div_page.set_visible("false");
        			this.alert("조회할 자료가 없습니다.");
        			
        			return;
        		}
        		else
        		{
        			this.div_page.set_visible("true");
        			this.fv_iServerRowCount = this.ds_mgr.getRowCount();
        			this.fn_SetStyle();
        			this.fn_SetPageNo();
        			this.div_page.stc_No0.style.set_color("gray");
        			this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        		}
        	
        	}
        }

        // 담당자 선택 후 부모창으로 전송
        this.btn_select_onclick = function(obj,e)
        {
        	var v_RtnVal = new Array();
        	
        	v_RtnVal[0] = this.ds_mgr.getColumn(this.ds_mgr.rowposition, "insaName");
        	v_RtnVal[1] = this.ds_mgr.getColumn(this.ds_mgr.rowposition, "insaDeptCode");
        	v_RtnVal[2] = this.ds_mgr.getColumn(this.ds_mgr.rowposition, "insaSabun");
        	
        	var arrMgr = v_RtnVal[0] + "|" + v_RtnVal[1] + "|" + v_RtnVal[2];
        	this.close(arrMgr);
        }

        // 더블 클릭 시 부모창 전송 호출
        this.grd_depo_oncelldblclick = function(obj,e)
        {
        	this.btn_select_onclick();
        }

        

        

        //////////////////// 페이징 처리 관련

        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	//trace("obj.text ="+obj.text);
        	var iFirstNum = (iNo-1) * this.fv_iMaxPageNum + 1;
        	//trace("(iNo-1) * this.fv_iMaxPageNum + 1; =" + (iNo-1) * this.fv_iMaxPageNum + 1);
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	//trace("iFirstNum + this.fv_iMaxPageNum; =" + iFirstNum + this.fv_iMaxPageNum);
        	this.fn_SetStyle();
        	obj.style.set_color("gray");
        	this.ds_mgr.filter("");
        	//trace("rownum >= " + iFirstNum);
        	//trace("rownum < " + iLastNum);
        	this.ds_mgr.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("selectCharList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.transaction_callback("selectCharList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function()
        {
        	var sPage = this.fv_iStartPageNo * this.fv_iMaxPageNum;
        	
        	// 이전버튼 처리
        	if (this.fv_iStartPageNo < 1)
        	{
        		this.div_page.stc_Prev.set_visible(false);
        	} 
        	else 
        	{
        		this.div_page.stc_Prev.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if (this.fv_iServerRowCount < this.fv_iUnitSelRowNo)
        	{
        		this.div_page.stc_Next.set_visible(false);
        	}
        	else
        	{
        		this.div_page.stc_Next.set_visible(true);
        	}

        	// 인덱스 번호 처리
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].set_visible(true);
        		this.div_page.components["stc_No"+i].set_text(sPage+i+1);

        		if (this.fv_iServerRowCount < (i * this.fv_iMaxPageNum))
        		{
        			this.div_page.components["stc_No"+i].set_visible(false);			
        		} 
        		else 
        		{
        			this.div_page.components["stc_No"+i].set_visible(true);			
        		}
        	}	
        }
        //-------------------------------------------------------------------------------------------------
        // Style조정
        //-------------------------------------------------------------------------------------------------
        this.fn_SetStyle = function()
        {
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].style.set_color("black");			
        	}	
        }

        this.ImageViewer00_onclick = function(obj,e)
        {
        	
        }

        this.btn_legal_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.pop_depo_no_onload, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_depo.addEventHandler("oncelldblclick", this.grd_depo_oncelldblclick, this);
            this.btn_select.addEventHandler("onclick", this.btn_select_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
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
            this.btn_legal.addEventHandler("onclick", this.btn_legal_onclick, this);

        };

        this.loadIncludeScript("LEGAL_OFFICIAL_CHECK.xfdl");

       
    };
}
)();
