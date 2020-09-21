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
                this.set_name("POP_RAISREQ_SCH");
                this.set_classname("POP_RAISREQ_SCH");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,668,486);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_border("0 none #999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search_wtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">전체</Col><Col id=\"codeNo\">0</Col></Row><Row><Col id=\"codeName\">회신</Col><Col id=\"codeNo\">1</Col></Row><Row><Col id=\"codeName\">미회신</Col><Col id=\"codeNo\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq_wtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">미회신</Col><Col id=\"codeNo\">N</Col></Row><Row><Col id=\"codeName\">회신</Col><Col id=\"codeNo\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clas_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codenm\">구상</Col><Col id=\"codeno\">001</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">의료과실</Col><Col id=\"codeno\">002</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">장기채무부존</Col><Col id=\"codeno\">003</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">특허침해</Col><Col id=\"codeno\">004</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">영업방해</Col><Col id=\"codeno\">005</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">계약파기</Col><Col id=\"codeno\">006</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">채무불이행</Col><Col id=\"codeno\">007</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">인사사고</Col><Col id=\"codeno\">008</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codenm\">기타</Col><Col id=\"codeno\">099</Col><Col id=\"useYn\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRea\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqTempSaveWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">예</Col><Col id=\"codeNo\">Y</Col></Row><Row><Col id=\"codeName\">아니오</Col><Col id=\"codeNo\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer01", "absolute", "14", "65", null, "60", "8", null, this);
            obj.set_taborder("11");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04", "absolute", "98", "70", null, "25", "15", null, this);
            obj.set_taborder("13");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "20", "70", "100", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03", "absolute", "212", "70", "83", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("소송제기분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05", "absolute", null, "70", "8.83%", "25", "30.09%", null, this);
            obj.set_taborder("15");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No", "absolute", "124", "73", "84", "19", null, null, this);
            obj.set_taborder("0");
            obj.set_displaynulltext("전체 ");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Clas_Code", "absolute", "44.61%", "73", "16.02%", "19", null, null, this);
            this.addChild(obj.name, obj);
            var cmb_Clas_Code_innerdataset = new Dataset("cmb_Clas_Code_innerdataset", this.cmb_Clas_Code);
            cmb_Clas_Code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">구상 (001)</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">의료과실 (002)</Col></Row><Row><Col id=\"codecolumn\">003</Col><Col id=\"datacolumn\">장기채무부존재 (003)</Col></Row><Row><Col id=\"codecolumn\">004</Col><Col id=\"datacolumn\">특허침해 (004)</Col></Row><Row><Col id=\"codecolumn\">005</Col><Col id=\"datacolumn\">영업방해 (005)</Col></Row><Row><Col id=\"codecolumn\">006</Col><Col id=\"datacolumn\">계약파기 (006)</Col></Row><Row><Col id=\"codecolumn\">007</Col><Col id=\"datacolumn\">채무불이행 (007)</Col></Row><Row><Col id=\"codecolumn\">008</Col><Col id=\"datacolumn\">인사사고 (008)</Col></Row><Row><Col id=\"codecolumn\">099</Col><Col id=\"datacolumn\">기타 (099)</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(cmb_Clas_Code_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("전체");
            obj.set_index("-1");

            obj = new Radio("radio_Wtr", "absolute", "470", "74", "190", "21", null, null, this);
            this.addChild(obj.name, obj);
            var radio_Wtr_innerdataset = new Dataset("radio_Wtr_innerdataset", this.radio_Wtr);
            radio_Wtr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">회신</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미회신</Col></Row></Rows>");
            obj.set_innerdataset(radio_Wtr_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new ImageViewer("ImageViewer07", "absolute", "98", "94", null, "25", "15", null, this);
            obj.set_taborder("17");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06", "absolute", "20", "94", "100", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("회신의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Req_Date1", "absolute", "18.56%", "97", "16.92%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_type("normal");
            obj.set_displaynulltext(" 전체 기간 ");

            obj = new Calendar("cal_Req_Date2", "absolute", "39.97%", "97", "16.92%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_type("normal");
            obj.set_displaynulltext(" 전체 기간");

            obj = new Static("Static00", "absolute", "36.83%", "98", "2.1%", "15", null, null, this);
            obj.set_text("~");
            obj.style.set_font("Dotum,11");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "10", "132", "169", "23", null, null, this);
            obj.set_text("소제기 의뢰 현황");
            obj.style.set_font("dotum,10,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_RaisReq", "absolute", "8", "155", null, "264", "7", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_raisreq");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_nodatatext("검색 버튼을 눌러주세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"의뢰번호\"/><Cell col=\"1\" text=\"분류코드\"/><Cell col=\"2\" text=\"회신여부\"/><Cell col=\"3\" text=\"의뢰자ID\"/><Cell col=\"4\" text=\"의뢰일자\"/><Cell col=\"5\" text=\"회신일자\"/><Cell col=\"6\" text=\"소제기여부\"/></Band><Band id=\"body\"><Cell text=\"bind:lawRaisreqNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:lawRaisreqClasCode\" combodataset=\"ds_clas_code\" combocodecol=\"codeno\" combodatacol=\"codenm\" combodisplay=\"edit\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:lawRaisreqRepWtr\" combodataset=\"ds_raisreq_wtr\" combocodecol=\"codeNo\" combodatacol=\"codeName\"/><Cell col=\"3\" text=\"bind:lawRaisreqReqId\"/><Cell col=\"4\" text=\"bind:lawRaisreqReqDate\" mask=\"expr:'####-##-##'\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" text=\"bind:lawRaisreqRepDate\" mask=\"expr:lawRaisreqRepDate!= null? '####-##-##' : ''\" combodisplaynulltext=\"없음\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:lawRaisreqWtr\" combodataset=\"ds_useYn\" combocodecol=\"codeNo\" combodatacol=\"codeName\" combodisplaynulltext=\"알 수 없음\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", null, "50", "6", null, this);
            obj.set_taborder("10");
            obj.set_text("  소제기 의뢰 검색");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "95", "55", "23", "77", null, this);
            obj.set_taborder("0");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #7055feff 0,100 #1004ffff");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clean", "absolute", null, "95", "55", "23", "21", null, this);
            obj.set_taborder("0");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #7055feff 0,100 #1004ffff");
            obj.set_text("초기화");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_check", "absolute", null, null, "55", "23", "63", "10", this);
            obj.set_taborder("0");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #7055feff 0,100 #1004ffff");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, null, "55", "23", "7", "10", this);
            obj.set_taborder("0");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #7055feff 0,100 #1004ffff");
            obj.set_text("닫기");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "8", "431", "97.46%", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "21.2%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("1");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "76.5%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "27.34%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "32.26%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "37.17%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("5");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "42.09%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "47%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "51.92%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "56.84%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "61.75%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "66.67%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "71.58%", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 25, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 668, 486, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("POP_RAISREQ_SCH");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");
            		p.style.set_border("0 none #999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POP_RAISREQ_SCH.xfdl", "Lib::common.xjs");
        this.registerScript("POP_RAISREQ_SCH.xfdl", function() {
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        var raiscode = "";
        /*===============================================================================
         * 1. Form 관련 Script
         *=============================================================================*                  
        /********************************************************************************
         * Event	: Form onload
         * Desc		: Form의 모든 컴포넌트가 생성되고, 모든 Object가 Load 되었을 때에
                      발생하는 Event
         *******************************************************************************/ 
        this.POP_RAISREQ_SCH_onload = function(obj,e)
        {
        	this.ds_clas_code.clearData();//데이터셋 초기화
        	this.gf_classCodeListLoad("ds_clas_code",  "ds_clas_code",  "Y", "fnCallback", "D01"); //사건유형공통코드
        	
        	this.ds_raisreq.copyData()
        	
        	raiscode = this.parent.raiscode;
        	
        	
        	this.radio_Wtr.set_value("0");
        	this.btn_search_onclick(); //모든 결과 자동 검색
        	this.btn_check.set_enable(false);
        }

        /********************************************************************************
         * Desc		: 소제기 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        //검색버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_search_wtr.clearData();
        	var search1 = this.edt_No.text.trim();	//소제기의뢰번호
            //var search2 = combo_Clas_Code.Index;	//소송제기분류코드
            var search2 = this.cmb_Clas_Code.value;
        	var search3 = this.cal_Req_Date1.value;		//의뢰일자1
            var search4 = this.cal_Req_Date2.value;		//의뢰일자2
            var search5 = this.radio_Wtr.index;			//회신여부

            //기간 유효성체크
            if(this.gfn_IsNull(search3) && search3 > search4)
            {
        		alert("날짜를 확인해 주세요.");
        		return;
            }
            if(this.gfn_IsNull(search3))
            {
        		search3="";
            }
            if(this.gfn_IsNull(search4))
            {
        		search4="";
            }
            
            //전체소제기분류코드 선택시 처리
            if(search2=="000")
            {
        		search2="";
        	}
        	else
        	{
        		//search2 = "00"+search2;
        		if(this.gfn_IsNull(search2))
        		{
        			search2="";
        		}
        		else
        		{
        			search2 = this.cmb_Clas_Code.value;
        		}
        	}	
            
            //회신여부 처리
            if(search5=="0"){
        		search5="";
            }else if(search5=="1"){
        		search5="Y";
            }else{
        		if(this.gfn_IsNull(search5))
        		{
        			search5="";
        		}
        		else
        		{
        			search5="N";
        		}
            }
            
            //소제기 검색 버튼 클릭시 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
            
            trace(this.fv_iStartPageNo +" : "+this.fv_iServerRowCount);
            
        	var strSvcid="getRaisreqList";
        	var strController="/rais/getRaisreqList.do";
        	var strParam  = "lawRaisreqNo=" +"\""+search1+"\"";
        		strParam += " lawRaisreqClasCode=" + "\""+search2+"\"";
        		strParam += " lawRaisreqReqDate1=" + "\""+search3+"\"";
        		strParam += " lawRaisreqReqDate2=" + "\""+search4+"\"";
        		strParam += " lawRaisreqRepWtr=" + "\""+search5+"\"";
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"ds_search=ds_search_wtr","ds_raisreq=ds_output",strParam,"fnCallback");
        	
        	
        }

        /*===============================================================================
         * 5. User Function 관련 Script
         *=============================================================================*
        /********************************************************************************
         * Desc		: transaction 후 호출되는 콜백함수
                      소제기 조회
         * Param	: 1.errcd  - Error Code
        			  2.errmsg - Error Msg
        			  3.svcid  - transaction id
         * Return	: 없음
         *******************************************************************************/ 

        // callback(결과전달)
        this.fnCallback = function(svcid,errcd,errmsg)
        {
        	switch (svcid)
        	{
        		case "ds_clas_code" :		
        			//trace("ds_clas_code  :: "+this.ds_clas_code.saveXML());
        			this.ds_clas_code.deleteRow(this.ds_clas_code.rowcount-1);
        			this.ds_clas_code.insertRow(0);
        			this.ds_clas_code.setColumn(0,"codeName","전체");
        			this.ds_clas_code.setColumn(0,"codeNo","000");
        			this.ds_clas_code.setColumn(0,"useYn","Y");
        			this.cmb_Clas_Code.index = 0;
        			//trace("ds_clas_code  :: "+this.ds_clas_code.saveXML());
        			break;
        		case "getRaisreqList" :
        			//trace(ds_raisreq.saveXML());
        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        					+ "소제기 조회 에러내용: "+ errmsg);
        				return false;
        			
        			}else{
        				//trace("this.fv_iStartPageNo = "+this.fv_iStartPageNo);
        				//trace("this.fv_iUnitSelRowNo = "+this.fv_iUnitSelRowNo);
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				//trace("iLastRow = "+iLastRow);
        				//trace("rownum >= "+(iLastRow + this.fv_iStartSelRowNo));
        				//trace("rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				this.ds_raisreq.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				//trace("this.ds_raisreq.getRowCount() = "+this.ds_raisreq.getRowCount());

        				if(this.ds_raisreq.getRowCount() == 0){
        					alert("해당 검색조건의 결과가 없습니다.");
        					this.ds_raisreq.filter("");
        					return;
        				}else{
        					this.fv_iServerRowCount = this.ds_raisreq.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("gray");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        					
        					//trace(this.fv_iStartPageNo +" : "+this.fv_iServerRowCount);
        				}
        			}	
        			break;
        	}
        }
        /********************************************************************************
         * Desc		: 필드에 입력된 내용 모두 지움, 즉 초기화
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        // 초기화버튼
        this.btn_clean_onclick = function(obj,e)
        {
        	this.edt_No.text = "";
        	this.cmb_Clas_Code.index = 0;
        	this.cal_Req_Date1.value = "";
        	this.cal_Req_Date2.value = "";
        	this.cal_Req_Date2.enable = false;
        	this.radio_Wtr.index = "0";
        	this.ds_raisreq.clearData();
        	this.reload();

        	//페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	this.fn_SetPageNo();
        }
        	
        /********************************************************************************
         * Desc		: 화면 종료시 
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        // 닫기버튼
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /********************************************************************************
         * Desc		: 확인버튼 누를 시 창을 닫고 소제기 회신 창에 값을 전달  
         * Param	: 없음
         * Return	: variant(회신 창에 전달할 값)
         *******************************************************************************/
        this.btn_check_onclick = function(obj,e)
        {	
        	this.grd_RaisReq_oncelldblclick();
        }

        this.grd_RaisReq_oncellclick = function(obj,e)
        {
        	this.btn_check.set_enable(true);
        }
        /********************************************************************************
         * Desc		: 셀 선택 시
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.grd_RaisReq_oncelldblclick = function(obj,e)
        {
        	//alert("value : "+this.ds_raisreq.getColumn(e.row,"lawRaisreqWtr"));
        	
        	//this.btn_check.set_enable(true);
        	//this.btn_check_onclick();
        	if(raiscode == "r1"){
        		if(this.ds_raisreq.getColumn(e.row,"lawRaisreqWtr") == "Y"){
        			var nRow= this.Dataset00.addRow();
        			this.Dataset00.copyRow(nRow,this.ds_raisreq,e.row);
        			this.close(this.ds_raisreq.getColumn(e.row,"lawRaisreqNo"));
        			this.ds_raisreq.clearData();
        		}else{
        		alert("소송제기가 가능하지 않은 조회건입니다.");
        		return false;
        		}
        	}else{
        		this.close(this.ds_raisreq.getColumn(e.row,"lawRaisreqNo"));
        		this.ds_raisreq.clearData();
        	}
        	var dsObj = obj.getBindDataset();
        	this.fnNameParsing(e.row, dsObj);	
        }

        this.fnReturnPopup = function (name,sabun,lawRaisreqNo)
        {
        	var obj = 	{
        					"name":name
        				,	"sabun":sabun
        				,	"lawRaisreqNo":lawRaisreqNo
        				}
        	
        	this.close(JSON.stringify(obj));
        };

        
        this.fnNameParsing = function(row,dsObj)
        {
        	var id = dsObj.getColumn(row, "lawRaisreqReqId");
        	var lawRaisreqNo = dsObj.getColumn(row, "lawRaisreqNo");
        	var idArr = id.split('(');	
        		
        	//this.fnReturnPopup(idArr[0], idArr[1].replace(')',''), lawRaisreqNo);
        	this.close(lawRaisreqNo);
        };

        this.fnSetClose = function ()
        {
        	var dsObj = this.ds_raisreq;	
        	this.fnNameParsing(dsObj.rowposition, dsObj);
        };

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
        	this.ds_raisreq.filter("");
        	//trace("rownum >= " + iFirstNum);
        	//trace("rownum < " + iLastNum);
        	this.ds_raisreq.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqList", 0, "succ");
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

        /********************************************************************************
         * Desc		: 확인버튼 누를 시 창을 닫고 소제기 회신 창에 값을 전달  
         * Param	: 없음
         * Return	: variant(회신 창에 전달할 값)
         *******************************************************************************/
        this.btn_check_onclick = function(obj,e)
        {
        	this.fnSetClose();
        	
        	var variant = [];
        	
        	var reqid = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqReqId");
        	
        	var reqidname = reqid.substring(0, reqid.indexOf("("));
        	var reqidnum = reqid.substring(reqid.indexOf("(")+1, reqid.indexOf(")"));
        	
        	var reqClasCode = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqClasCode");
        	
        	var idx4 = reqClasCode.indexOf(")");
        	
        	var reqclascode = reqClasCode.substring(0, reqClasCode.indexOf("("));
        	
        	//alert(reqidname + reqidnum);
        	
        	trace("작업 중");
        	variant[0] = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqNo");
        	variant[1] = reqidnum; //this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqReqId"); //lawRaisreqReqId
        	variant[2] = reqclascode; //this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqClasCode");
        	
        	var arrvars = ["lawRaisreqRea","lawRaisreqEtcPoin","lawRaisreqReqDate","lawRaisreqRepWtr","lawRaisreqWtr"
        	,"lawRaisreqDalwCont","lawRaisreqExptDate","lawRaisreqRepCont","lawRaisreqEtcreqPoin","lawRaisreqRepDate"
        	,"lawRaisreqIssuPoin","lawRaisreqTempSaveWtr"];
        	
        	
        	var cnt = 0;
        	
        	for(i=0; i<arrvars.length; i++){
        		variant[i+3] = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, arrvars[i]);
        		
        		if(i == (arrvars.length-1)){
        			cnt = i;
        		}
        	}
        	
        	variant[(cnt+1)+3] = reqidname;

        	var params = variant[0] +'/' + variant[1] + '/' + variant[2] + '/' + variant[3] +
        				'/' + variant[4] + '/' + variant[5] +'/' + variant[6] + '/' + variant[7] +'/' + variant[8] + 
        				'/' + variant[9] + '/' + variant[10] + '/' + variant[11] +'/' + variant[12] + '/' + variant[13] +
        				'/' + variant[14] + '/' + variant[15];
        	trace(params);
        	this.close(params);

        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.POP_RAISREQ_SCH_onload, this);
            this.ImageViewer01.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer04.addEventHandler("onclick", this.ImageViewer04_onclick, this);
            this.ImageViewer02.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer03.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer05.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.edt_No.addEventHandler("oneditclick", this.edt_No_oneditclick, this);
            this.cmb_Clas_Code.addEventHandler("onitemchanged", this.cmb_Clas_Code_onitemchanged, this);
            this.ImageViewer06.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.grd_RaisReq.addEventHandler("oncelldblclick", this.grd_RaisReq_oncelldblclick, this);
            this.grd_RaisReq.addEventHandler("oncellclick", this.grd_RaisReq_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clean.addEventHandler("onclick", this.btn_clean_onclick, this);
            this.btn_check.addEventHandler("onclick", this.btn_check_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
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

        this.loadIncludeScript("POP_RAISREQ_SCH.xfdl");

       
    };
}
)();
