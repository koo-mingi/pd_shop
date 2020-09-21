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
                this.set_name("legal_ad_out_no");
                this.set_classname("legal_ad_out_no");
                this.set_titletext("법률자문의뢰조회");
                this._setFormPosition(0,0,762,495);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"data\">회신</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">미회신</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adv", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_ad_out", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOpenWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvFactRela\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvQuesIssu\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtc\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReviDay\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtcReqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqRepdate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqFact\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqQues\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqReq\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgrName\" type=\"STRING\" size=\"256\"/><Column id=\"repMgrName\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lagaladvOutEtcRepPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate1\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate2\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo_wtr", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codenm\">전체</Col></Row><Row><Col id=\"codenm\">회신</Col><Col id=\"codeno\">Y</Col></Row><Row><Col id=\"codenm\">미회신</Col><Col id=\"codeno\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "737", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("#3366ffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("외부법률자문조회");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "65", "735", "61", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "20", "71", "723", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "20", "95", "723", "25", null, null, this);
            obj.set_taborder("11");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "20", "71", "105", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "20", "95", "105", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no02", "absolute", "262", "71", "105", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no04", "absolute", "262", "95", "105", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_req_date_1", "absolute", "371", "74", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_type("normal");

            obj = new Calendar("cal_req_date_2", "absolute", "527", "74", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_type("normal");
            obj.set_enable("false");

            obj = new Static("Static00", "absolute", "508", "72", "16", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "684", "96", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "624", "96", "55", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_req_no", "absolute", "128", "74", "130", "19", null, null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_law_adv_code", "absolute", "128", "98", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_datacolumn("codenm");
            obj.set_innerdataset("@ds_adv");
            obj.set_codecolumn("codeno");

            obj = new Radio("rdo_adv_req_wrt", "absolute", "375", "100", "210", "18", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.set_direction("vertical");
            obj.set_innerdataset("@ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_rowcount("-1");
            obj.set_index("0");

            obj = new ImageViewer("img_view00", "absolute", "14", "141", "735", "305", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_legal_ad", "absolute", "23", "149", "718", "291", null, null, this);
            obj.set_taborder("21");
            obj.set_scrollbars("fixedvert");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_binddataset("ds_legal_ad_out");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"80\"/><Column size=\"210\"/><Column size=\"64\"/><Column size=\"79\"/><Column size=\"76\"/><Column size=\"67\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"외뢰번호\"/><Cell col=\"1\" text=\"자문구분\"/><Cell col=\"2\" text=\"외뢰제목\"/><Cell col=\"3\" text=\"회신여부\"/><Cell col=\"4\" text=\"의뢰일자\"/><Cell col=\"5\" text=\"의뢰담당자\"/><Cell col=\"6\" text=\"회신일자\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:legaladvLawAdvReqNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:legaladvLawAdvCode\" combodataset=\"ds_adv\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:legaladvOutReqTit\"/><Cell col=\"3\" displaytype=\"combo\" style=\"color2: ;\" text=\"bind:legaladvRepWtr\" combodataset=\"ds_combo_wtr\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"4\" displaytype=\"expr:comp.parent.gfn_IsNull(legaladvOutReqDate) ?' normal' : 'date'\" edittype=\"none\" text=\"bind:legaladvOutReqDate\" mask=\"####-##-##\"/><Cell col=\"5\" text=\"bind:reqMgrName\"/><Cell col=\"6\" displaytype=\"expr:comp.parent.gfn_IsNull(legaladvRepDate) ?' normal' : 'date'\" text=\"bind:legaladvRepDate\" mask=\"####-##-##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "51", "463", "573", "18", null, null, this);
            obj.set_taborder("24");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("25");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("26");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("27");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("28");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("29");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("30");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("32");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("35");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Button("btn_select", "absolute", "630", "462", "55", "23", null, null, this);
            obj.set_taborder("22");
            obj.set_text("확인");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "690", "462", "55", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 762, 495, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_out_no");
            		p.set_titletext("법률자문의뢰조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","grd_legal_ad","","ds_legal_ad","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_req_no","value","ds_search","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_req_date_2","value","ds_search","legaladvReqDate2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cal_req_date_1","value","ds_search","legaladvReqDate1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","rdo_adv_req_wrt","value","ds_search","legaladvRepWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cmb_law_adv_code","value","ds_search","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OUT_legal_ad_out_no.xfdl", "Lib::common.xjs");
        this.registerScript("OUT_legal_ad_out_no.xfdl", function() {
        // 10페이지 이상 목록이 있을 때 처리 되는지 페이징 처리 검증필요
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        var fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        var fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        var fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        var fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        var lyrid ='';

        // 화면 로딩
        this.legal_ad_out_no_onload = function(obj,e)
        {
        	// 공통코드 로딩("O01" : 법률자문구분)
        	this.gf_codeComListLoad("dsComCode",  "ds_adv",   "Y", "", "전체", "fnCallback", "O01");
        	this.cal_req_date_2.set_value(this.gfn_Today());
        	// 라디오버튼 첫번째에 선택돼있게
        	this.rdo_adv_req_wrt.set_index(0);
        	
        	//ds_search에 변호사id 넣기
        	lyrid = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	//var lyrid = "2013082601";
        	//this.ds_search.addRow();
        	this.search_outlegaladv_list();
        }

        //외부법률자문리스트 조회
        this.search_outlegaladv_list = function()
        {
        // 페이징 초기화 
        	fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	var strSvcid 		= "getOutLegaladList";
        	var strController 	= "/out/outLegalAdListModal.do";
        	
        	this.ds_search.setColumn(0,"legaladvOutReqLyrid", lyrid);
        	
        	var date1 = this.ds_search.getColumn(0,'legaladvReqDate1');
        	var date2 = this.ds_search.getColumn(0,'legaladvReqDate2');
        	
        	 //기간 유효성체크
            if(!this.gfn_IsNull(date1) && (date1 > date2)){
        		alert("날짜를 확인해 주세요.");
        		this.cal_req_date_1.set_value('');
        		this.cal_req_date_1.dropdown();
        		return;
            }
            
        	/*
        	var legaladvReqDate1 = this.cal_req_date_1.value;
        	var legaladvReqDate2 = this.cal_req_date_2.value;
        	var legaladvLawAdvReqNo = this.edt_req_no.value;
        	var legaladvRepWtr = this.rdo_adv_req_wrt.value;
        	var legaladvLawAdvCode = this.cmb_law_adv_code.value;
        	
        	this.ds_search.setColumn(this.ds_search.rowposition, "legaladvReqDate1", legaladvReqDate1);
        	this.ds_search.setColumn(this.ds_search.rowposition, "legaladvReqDate2", legaladvReqDate2);
        	this.ds_search.setColumn(this.ds_search.rowposition, "legaladvLawAdvReqNo", legaladvLawAdvReqNo);
        	this.ds_search.setColumn(this.ds_search.rowposition, "legaladvRepWtr", legaladvRepWtr);
        	this.ds_search.setColumn(this.ds_search.rowposition, "legaladvLawAdvCode", legaladvLawAdvCode);
        	*/
        	
        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"ds_search=ds_search",  
        					"ds_legal_ad_out=ds_output",
        					"", 
        					"fnCallback"
        					);
        }

        // 검색버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.search_outlegaladv_list();
        }

        //초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	//페이징 초기화 
        	fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	this.ds_search.setColumn(0,'legaladvReqDate1','');
        	this.ds_search.setColumn(0,'legaladvReqDate2',this.gfn_Today());
        	this.ds_search.setColumn(0,'legaladvLawAdvReqNo','');
        	this.rdo_adv_req_wrt.set_index(0);
        	this.cmb_law_adv_code.set_index(0);
        	//this.reload();
        }

        //콜백함수
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	switch (sSvcId)
        	{	
        	case "getOutLegaladList":
        		
        		if(nErrorCode != 0)
        		{
        			alert(sSvcId + " : " + sErrorMsg);
        		}
        		else
        		{
        			var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        			// filter():  데이터셋에서 조건식을 만족하는 row만 보이게 함
        			this.ds_legal_ad_out.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        			
        			// 검색 결과가 없는 경우
        			if (this.ds_legal_ad_out.getRowCount()==0)
        			{
        				trace("dataset row count : "+this.ds_legal_ad_out.getRowCount());
        				trace("조회할 자료가 없습니다.");
        				this.ds_legal_ad_out.filter("");
        				return;
        			}
        			else
        			{
        				this.fv_iServerRowCount = this.ds_legal_ad_out.getRowCount();
        				this.fn_SetStyle();
        				this.fn_SetPageNo();
        				//1페이지 스타일(블랙, 클릭돼있게)
        				this.div_page.stc_No0.style.set_color("black");
        				this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        			} 
        		}		
        		break;
        	}
        }

        
        //닫기
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        //셀 더블클릭(확인기능)
        this.grd_legal_ad_oncelldblclick = function(obj,e)
        {
        	this.btn_select_onclick();
        }

        // 확인버튼
        this.btn_select_onclick = function(obj,e)
        {
        	var v_RtnVal = this.ds_legal_ad_out.getColumn(this.ds_legal_ad_out.rowposition,"legaladvLawAdvReqNo");
        	trace("v_RtnVal : "+v_RtnVal);
        	this.close(v_RtnVal);
        }

        

        // 중요!!! 확실히 이해하고 넘어가야 함
        //페이징처리 부분-----------------------------------------------------------------------------------------------------------------------------

        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	var iFirstNum = (iNo-1) * this.fv_iMaxPageNum + 1;
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	this.fn_SetStyle();
        	obj.style.set_color("black");
        	this.ds_legal_ad_out.filter("");
        	this.ds_legal_ad_out.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
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
        		this.div_page.components["stc_No"+i].style.set_color("gray");			
        	}	
        }

        
        this.grd_legal_ad_onheadclick = function(obj,e)
        {
        	this.gfnGridHeadSort(obj.getBindDataset(), e.cell, false);
        }

        this.cal_req_date_1_onchanged = function(obj,e)
        {
        	if(!this.gfn_IsNull(obj.value)){
        		this.cal_req_date_2.set_enable(true);
        	}else{
        		this.cal_req_date_2.set_enable(false);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legal_ad_out_no_onload, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no04.addEventHandler("onclick", this.sta_no_onclick, this);
            this.cal_req_date_1.addEventHandler("oneditclick", this.cal_req_date_1_oneditclick, this);
            this.cal_req_date_1.addEventHandler("onchanged", this.cal_req_date_1_onchanged, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.rdo_adv_req_wrt.addEventHandler("onitemclick", this.rdo_adv_req_wrt_onitemclick, this);
            this.grd_legal_ad.addEventHandler("oncelldblclick", this.grd_legal_ad_oncelldblclick, this);
            this.grd_legal_ad.addEventHandler("onheadclick", this.grd_legal_ad_onheadclick, this);
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
            this.btn_select.addEventHandler("onclick", this.btn_select_onclick, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);

        };

        this.loadIncludeScript("OUT_legal_ad_out_no.xfdl");

       
    };
}
)();
