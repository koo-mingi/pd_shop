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
                this.set_name("legal_ad");
                this.set_titletext("법률자문의뢰");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adv", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">예</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOpenWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvFactRela\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvQuesIssu\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtc\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_openlaw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">legal_ad::legal_ad_up</Col><Col id=\"UP_MENU_CD\"/><Col id=\"MENU_NM\">법률자문회신</Col><Col id=\"MENU_LVL\"/><Col id=\"PGM_PATH\">legal_ad</Col><Col id=\"PGM_ID\">legal_ad_up.xfdl</Col><Col id=\"SORT\"/><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_legal_adv_no", this);
            obj._setContents("<ColumnInfo><Column id=\"legalAdvNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("subTitle_01", "absolute", "17", "129", "197", "19", null, null, this);
            obj.set_taborder("12");
            obj.set_text("법률자문 기본사항");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "146", "996", "62", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "53", "152", "950", "25", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "30", "176", "973", "25", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "20", "152", "115", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("의뢰부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no00", "absolute", "20", "176", "115", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_req_dept", "absolute", "140", "155", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("cb_adv_code", "absolute", "140", "179", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("@ds_adv");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");

            obj = new Static("sta_no02", "absolute", "359", "152", "115", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("의뢰담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no03", "absolute", "359", "176", "115", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("내용공개여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no04", "absolute", "678", "152", "115", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_mgr", "absolute", "479", "155", "140", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_open_wtr", "absolute", "479", "179", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("@ds_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_value("Y");
            obj.set_text("예");
            obj.set_index("0");

            obj = new Calendar("cal_req_date", "absolute", "798", "155", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_type("normal");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("subTitle_02", "absolute", "17", "240", "197", "19", null, null, this);
            obj.set_taborder("22");
            obj.set_text("법률자문 의뢰");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "264", "1000", "343", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "20", "270", "987", "25", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no05", "absolute", "20", "270", "115", "25", null, null, this);
            obj.set_taborder("25");
            obj.set_text("의뢰제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_adv_tit_nosize", "absolute", "140", "273", "860", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("150");
            obj.set_lengthunit("utf8");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "294", "987", "97", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "390", "987", "116", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "20", "504", "987", "97", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no06", "absolute", "20", "294", "115", "97", null, null, this);
            obj.set_taborder("29");
            obj.set_text("사실관계");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no07", "absolute", "20", "504", "115", "97", null, null, this);
            obj.set_taborder("30");
            obj.set_text("기타사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no08", "absolute", "20", "390", "115", "115", null, null, this);
            obj.set_taborder("31");
            obj.set_text("질의요지");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "889", "614", "55", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_fact_rela", "absolute", "140", "297", "861", "90", null, null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("fixedvert");
            obj.set_wordwrap("char");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_etc", "absolute", "140", "507", "861", "90", null, null, this);
            obj.set_taborder("9");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("4000");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_ques_issu", "absolute", "140", "394", "861", "108", null, null, this);
            obj.set_taborder("8");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("500");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "24", "70", "979", "25", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_tooltiptype("inplace");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("33");
            obj.set_text("법률자문의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "942", "71", "55", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "287", "71", "55", "23", null, null, this);
            obj.set_taborder("36");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "953", "614", "55", "23", null, null, this);
            obj.set_taborder("37");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "89.84%", "273", null, "21", "3.32%", null, this);
            obj.set_taborder("52");
            obj.set_text("0 / 150");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "89.84%", "366", null, "21", "3.42%", null, this);
            obj.set_taborder("53");
            obj.set_text("0 / 1000");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div08", "absolute", "89.84%", "481", null, "21", "3.42%", null, this);
            obj.set_taborder("54");
            obj.set_text("0 / 500");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div09", "absolute", "89.84%", "576", null, "21", "3.42%", null, this);
            obj.set_taborder("55");
            obj.set_text("0 / 4000");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reply", "absolute", "952", "238", "55", "23", null, null, this);
            obj.set_taborder("56");
            obj.set_text("회신");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete00", "absolute", "953", "649", "55", "23", null, null, this);
            obj.set_taborder("57");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WFSA_Search");
            obj.set_visible("false");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("58");
            obj.set_text("  법률자문의뢰");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static20", "absolute", "27", "177", "37", "23", null, null, this);
            obj.set_taborder("59");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "366", "177", "37", "23", null, null, this);
            obj.set_taborder("60");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "40", "271", "37", "23", null, null, this);
            obj.set_taborder("61");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "38", "435", "37", "23", null, null, this);
            obj.set_taborder("62");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 70, 21, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.set_text("0 / 150");
            		p.set_visible("false");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad");
            		p.set_titletext("법률자문의뢰");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_req_no","value","ds_legal_ad","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cb_req_dept","value","ds_legal_ad","legaladvReqDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_req_mgr","value","ds_legal_ad","reqMgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cal_req_date","value","ds_legal_ad","legaladvReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cb_adv_code","value","ds_legal_ad","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cb_open_wtr","value","ds_legal_ad","legaladvOpenWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_adv_tit_nosize","value","ds_legal_ad","legaladvAdvTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","txt_ques_issu","value","ds_legal_ad","legaladvQuesIssu");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","txt_etc","value","ds_legal_ad","legaladvEtc");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","txt_fact_rela","value","ds_legal_ad","legaladvFactRela");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad.xfdl", function() {
        //include "Lib::common.xjs";

        this.LEGAL_ADV_NO = '';

        //처음 로딩 부분
        this.legal_ad_onload = function(obj,e)
        {
        	//this.gfnOnload(this);
        	//입력:	strSvcId, strDataSet, strAllYn, strAllCode, strAllName, strCallbackFunc, strVParam(공통코드)
        	this.gf_codeComListLoad("dsComCode2",  "ds_dept",  "N", "", "", "fnCallback", "S01");//S01 아님? // 공통코드(부서)조회
        	this.gf_codeComListLoad("dsComCode1",  "ds_adv",   "N", "", "", "fnCallback", "O01"); // 공통코드(법률자문)조회
        	
        	var mgrCode	= application.gds_User.getColumn(application.gds_User.rowposition,	"sabun"			);
        	var mgrName	= application.gds_User.getColumn(application.gds_User.rowposition,	"name"			);
        	var deptCode= application.gds_User.getColumn(application.gds_User.rowposition,	"insaDeptCode"	);
        	
        	if (deptCode == '004')	return this.fnEnable(false);
        	
        	var nRow = this.ds_legal_ad.addRow();
        	
        	this.ds_legal_ad.setColumn(nRow, "legaladvReqDeptCode"	, deptCode	);
        	this.ds_legal_ad.setColumn(nRow, "legaladvReqMgrCode"	, mgrCode	);
        	this.ds_legal_ad.setColumn(nRow, "reqMgr"				, mgrName	);
        	
        	// 캘린더 컴포넌트에 오늘 날짜 세팅
        	this.cal_req_date.set_value(this.gfn_Today());
        }

        this.fnEnable = function(bCheck)
        {
        	this.cb_adv_code.set_enable(bCheck);
        	this.cb_open_wtr.set_enable(bCheck);
        	this.cb_req_dept.set_enable(bCheck);
        	this.edt_req_mgr.set_enable(bCheck);
        	
        	this.edt_adv_tit_nosize.set_enable(bCheck);
        	this.txt_fact_rela.set_enable(bCheck);
        	this.txt_ques_issu.set_enable(bCheck);
        	this.txt_etc.set_enable(bCheck);
        	
        	this.btn_save.set_visible(bCheck);
        };

        //콜백함수
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	switch (sSvcId)
        	{
        		case "dsComCode1":			
        			this.cb_adv_code.set_index(0);
        			this.cb_open_wtr.set_index(0);
        		break;
        		
        		case "dsComCode2":
        			
        		break;
        		
        		case "saveLegalAdDetail":	// id 구분
        			alert("저장 되었습니다.");
        			
        			if(this.LEGAL_ADV_NO=='-1')	
        				this.LEGAL_ADV_NO = this.ds_legal_adv_no.getColumn(0,"legaladvLawAdvReqNo");
        			
        			this.modal_selectlegal_ad(this.LEGAL_ADV_NO);
        			
        		break;
        		
        		case "deleteLegalList":	
        			this.reload();
        			alert("삭제되었습니다.");
        		break;
        		
        		case "selectLegalList":
        			var strLength = this.edt_adv_tit_nosize.getLength();
        			//글자수 제한 및 글자수 표시
        			strLength += " / 150 ";
        			this.Div06.set_text(strLength);

        			var strLength = this.txt_fact_rela.getLength();
        			strLength += " / 1000 ";
        			this.Div07.set_text(strLength);

        
        			var strLength = this.txt_ques_issu.getLength();
        			strLength += " / 500 ";
        			this.Div08.set_text(strLength);

        
        			var strLength = this.txt_etc.getLength();
        			strLength += " / 4000 ";
        			this.Div09.set_text(strLength);
        			
        			//
        			var repWtr 	= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvRepWtr");
        			var deptCode= application.gds_User.getColumn(application.gds_User.rowposition,	"insaDeptCode"	);
        			trace("repWtr :: "+repWtr+" // deptCode :: "+deptCode);
        			
        			if (deptCode != '004')
        			{
        				if (repWtr == "Y")
        				{
        					this.btn_reply.set_visible(true);
        					return this.fnEnable(false);
        				}
        				else
        				{
        					this.btn_reply.set_visible(false);
        					return this.fnEnable(true);
        				}
        			}
        			else
        			{
        				if (repWtr == "Y")	this.btn_reply.set_visible(true);
        				else				this.btn_reply.set_visible(false);
        				
        				return this.fnEnable(false);
        			}
        		break;
        	}
        }

        //초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	//화면 다시 로드하는 함수
        	this.reload();
        }

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.gfnDsChangeCheck(this.ds_legal_ad))	return alert("저장할 데이터가 없습니다.");
        	
        	var legaladvLawAdvReqNo = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	
        	if(this.gfn_IsNull(legaladvLawAdvReqNo))	legaladvLawAdvReqNo = '-1';		
        	this.LEGAL_ADV_NO = legaladvLawAdvReqNo;
        		
        	var yn = confirm("저장하시겠습니까?");
        	
        	if(yn == true){
        		//필수 입력항목들 체크
        		if(this.gfn_IsNull(this.cb_req_dept.value)){
        			alert("의뢰부서를 입력해주세요.");
        			this.cb_req_dept.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cal_req_date.value)){
        			alert("의뢰일자를 입력해주세요.");
        			this.cal_req_date.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cb_adv_code.value)){
        			alert("법률자문구분을 입력해주세요.");
        			this.cb_adv_code.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cb_open_wtr.value)){
        			alert("내용공개여부를 입력해주세요.");
        			this.cb_open_wtr.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edt_adv_tit_nosize.value)){
        			alert("의뢰제목을 입력해주세요.");
        			this.edt_adv_tit_nosize.setFocus();
        		}
        		else if(this.gfn_IsNull(this.txt_ques_issu.value)){
        			alert("질의요지를 입력해주세요.");
        			this.txt_ques_issu.setFocus();
        		}
        		else{
        			var strSvcid = "saveLegalAdDetail";
        			var strController = "legal_ad/saveLegalAdDetail.do";
        			var strParam = "";
        			
        			//공통 트랜잭션 함수 호출
        			this.gfn_transaction(this
        							,strSvcid
        							,strController
        							//:U(Update), 업데이트 된 내용만 담음
        							,"ds_input=ds_legal_ad:U"
        							,"ds_legal_adv_no=ds_output"
        							,strParam
        							,"fnCallback");
        		}
        	}
        }

        //검색 모달창 띄우는 설정
        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	 var newChild = new ChildFrame;
        	 newChild.init("Search01"
        					, "absolute", 10, 10, 300, 250, null, null
        					, "legal_ad::legal_ad_no.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        
        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Search01")
        	{
        		if(!this.gfn_IsNull(variant))	this.modal_selectlegal_ad(variant);
        	}
        }

        
        this.modal_selectlegal_ad = function(variant)
        {
        	var strSvcid 		= "selectLegalList";
        	var strController 	= "legal_ad/selectLegalAdDetail.do";
        	var strParam 		=  "legaladvLawAdvReqNo="+variant;

        	
        	
        	// 트랜잭션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"",  
        					"ds_legal_ad=ds_output",
        					strParam, 
        					"fnCallback"
        					);
        }

        //삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	// this.ds_legal_ad.getRowCount() <= 0 : Dataset에서 전체 Row의 개수가 0이하. 즉, 데이터가 없다.
        	if(this.gfn_IsNull(this.edt_req_no.value) || this.ds_legal_ad.getRowCount() <= 0){
        		alert("삭제할 자문의뢰가 존재하지 않습니다.");
        	}
        	else{
        		var yn = confirm("해당 자문의뢰를 삭제하시겠습니까?");
        		
        		if(yn == true){
        			this.ds_legal_ad.deleteRow(this.ds_legal_ad.rowposition);
        			
        			var strSvcid = "deleteLegalList";
        			var strController = "legal_ad/saveLegalAdDetail.do";
        			var strParam = "";
        					
        			this.gfn_transaction(this
        							,strSvcid
        							,strController
        							,"ds_input=ds_legal_ad:U"
        							,"ds_legal_ad=ds_output"
        							,strParam
        							,"fnCallback");
        		}
        	}
        }

        
        this.edt_adv_tit_ontextchanged = function(obj,e)
        {
        	var strLength = this.edt_adv_tit_nosize.getLength();
        	strLength += " / 150 ";
        	this.Div06.set_text(strLength);
        }

        this.txt_fact_rela_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_fact_rela.getLength();
        	strLength += " / 1000 ";
        	this.Div07.set_text(strLength);
        }

        this.txt_ques_issu_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_ques_issu.getLength();
        	strLength += " / 500 ";
        	this.Div08.set_text(strLength);
        }

        this.txt_etc_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_etc.getLength();
        	strLength += " / 4000 ";
        	this.Div09.set_text(strLength);
        }

        this.btn_reply_onclick = function(obj,e)
        {
        	var legalAdvNo = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	
        	this.gfnOpenMenu("legal_ad::legal_ad_up", aArgs);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.gfnClose();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legal_ad_onload, this);
            this.subTitle_01.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no03.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no04.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_mgr.addEventHandler("oneditclick", this.edt_req_mgr_oneditclick, this);
            this.subTitle_02.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_02.addEventHandler("onclick", this.sta_02_onclick, this);
            this.sta_no05.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_adv_tit_nosize.addEventHandler("ontextchanged", this.edt_adv_tit_ontextchanged, this);
            this.wSta_no06.addEventHandler("onclick", this.sta_no_onclick, this);
            this.wSta_no07.addEventHandler("onclick", this.sta_no_onclick, this);
            this.wSta_no08.addEventHandler("onclick", this.sta_no_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.txt_fact_rela.addEventHandler("onkeyup", this.txt_fact_rela_onkeyup, this);
            this.txt_fact_rela.addEventHandler("ontextchanged", this.txt_fact_rela_ontextchanged, this);
            this.txt_etc.addEventHandler("onkeyup", this.txt_etc_onkeyup, this);
            this.txt_etc.addEventHandler("ontextchanged", this.txt_etc_ontextchanged, this);
            this.txt_ques_issu.addEventHandler("onkeyup", this.txt_ques_issu_onkeyup, this);
            this.txt_ques_issu.addEventHandler("ontextchanged", this.txt_ques_issu_ontextchanged, this);
            this.img_view01.addEventHandler("onclick", this.img_view01_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_no.addEventHandler("oneditclick", this.edt_req_no_oneditclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_reply.addEventHandler("onclick", this.btn_reply_onclick, this);
            this.btn_delete00.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("legal_ad.xfdl");

       
    };
}
)();
