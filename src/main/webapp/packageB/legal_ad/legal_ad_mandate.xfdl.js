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
                this.set_name("legal_ad_mandate");
                this.set_classname("legal_ad_mandate");
                this.set_titletext("법률자문위임");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_legal_ad", this);
            obj._setContents("<ColumnInfo><Column id=\"legaladvLawAdvReqNo\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOpenWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvAdvTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvFactRela\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvQuesIssu\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtc\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvLawAdvCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvReviDay\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepMgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvEtcReqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqTit\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqLyrid\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqRepdate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqFact\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqQues\" type=\"STRING\" size=\"256\"/><Column id=\"legaladvOutReqReq\" type=\"STRING\" size=\"256\"/><Column id=\"advTit\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/><Column id=\"reqMgr\" type=\"STRING\" size=\"256\"/><Column id=\"repMgr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adv", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("1");
            obj.set_text("  법률자문위임");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "954", "595", "55", "23", null, null, this);
            obj.set_taborder("31");
            obj.set_text("저장");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("49");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("50");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("51");
            obj.set_text("법률자문의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("53");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "286", "71", "55", "23", null, null, this);
            obj.set_taborder("54");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_01", "absolute", "17", "113", "197", "19", null, null, this);
            obj.set_taborder("55");
            obj.set_text("법률자문 기본사항");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "130", "996", "62", null, null, this);
            obj.set_taborder("56");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "20", "160", "984", "25", null, null, this);
            obj.set_taborder("57");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "20", "136", "984", "25", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no09", "absolute", "20", "136", "115", "25", null, null, this);
            obj.set_taborder("59");
            obj.set_text("법률자문구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_adv_code", "absolute", "140", "139", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_adv");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("edt_req_mgr00", "absolute", "140", "163", "140", "19", null, null, this);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no10", "absolute", "20", "160", "115", "25", null, null, this);
            obj.set_taborder("62");
            obj.set_text("의뢰담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no11", "absolute", "351", "136", "115", "25", null, null, this);
            obj.set_taborder("63");
            obj.set_text("회신요청일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_req_repdate", "absolute", "471", "139", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Calendar("cal_req_date", "absolute", "471", "163", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("sta_no12", "absolute", "351", "160", "115", "25", null, null, this);
            obj.set_taborder("67");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no13", "absolute", "676", "136", "115", "25", null, null, this);
            obj.set_taborder("68");
            obj.set_text("의뢰변호사명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_lyr", "absolute", "796", "139", "140", "19", null, null, this);
            obj.set_taborder("70");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_02", "absolute", "18", "216", "197", "19", null, null, this);
            obj.set_taborder("74");
            obj.set_text("외부 법률자문 의뢰");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search00", "absolute", "942", "137", "55", "23", null, null, this);
            obj.set_taborder("19");
            obj.set_text("검색");
            obj.set_cssclass("btn_WFSA_Search");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "233", "1000", "341", null, null, this);
            obj.set_taborder("75");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "239", "987", "25", null, null, this);
            obj.set_taborder("76");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "263", "987", "121", null, null, this);
            obj.set_taborder("77");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "20", "383", "987", "91", null, null, this);
            obj.set_taborder("78");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no00", "absolute", "20", "263", "115", "121", null, null, this);
            obj.set_taborder("79");
            obj.set_text("사실관계");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no01", "absolute", "20", "239", "115", "25", null, null, this);
            obj.set_taborder("80");
            obj.set_text("의뢰제목");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no02", "absolute", "20", "383", "115", "91", null, null, this);
            obj.set_taborder("81");
            obj.set_text("질의요지");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_out_req_tit_nosize", "absolute", "141", "241", "859", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_maxlength("100");
            obj.set_lengthunit("utf8");
            this.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "927", "242", "68", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("0 / 100");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "20", "473", "987", "95", null, null, this);
            obj.set_taborder("83");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_no03", "absolute", "20", "473", "115", "95", null, null, this);
            obj.set_taborder("82");
            obj.set_text("기타사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_out_req_fact", "absolute", "141", "266", "859", "115", null, null, this);
            obj.set_taborder("32");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("255");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "927", "360", "68", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("0 / 255");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_out_req_ques", "absolute", "141", "386", "859", "85", null, null, this);
            obj.set_taborder("34");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("500");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div08", "absolute", "927", "451", "68", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("0 / 500");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_out_req_req", "absolute", "141", "476", "859", "89", null, null, this);
            obj.set_taborder("33");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("255");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div09", "absolute", "926", "546", "68", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("0 / 255");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("bn_rep", "absolute", "917", "206", "87", "23", null, null, this);
            obj.set_taborder("84");
            obj.set_text("회신내용보기");
            obj.set_cssclass("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static05", "absolute", "42", "418", "37", "23", null, null, this);
            obj.set_taborder("85");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static00", "absolute", "41", "240", "37", "23", null, null, this);
            obj.set_taborder("86");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static01", "absolute", "360", "138", "37", "23", null, null, this);
            obj.set_taborder("87");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "685", "138", "37", "23", null, null, this);
            obj.set_taborder("88");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 68, 21, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_text("0 / 100");
            		p.set_visible("false");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 69, 21, this.Div07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("40");
            		p.set_text("0 / 255");
            		p.set_visible("false");

            	}
            );
            this.Div07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("legal_ad_mandate");
            		p.set_titletext("법률자문위임");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","edt_out_req_tit_nosize","value","ds_legal_ad","legaladvOutReqTit");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","txt_out_req_fact","value","ds_legal_ad","legaladvOutReqFact");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","txt_out_req_req","value","ds_legal_ad","legaladvOutReqReq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","txt_out_req_ques","value","ds_legal_ad","legaladvOutReqQues");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_req_no","value","ds_legal_ad","legaladvLawAdvReqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cb_adv_code","value","ds_legal_ad","legaladvLawAdvCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_req_mgr00","value","ds_legal_ad","reqMgr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_req_repdate","value","ds_legal_ad","legaladvOutReqRepdate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_req_date","value","ds_legal_ad","legaladvOutReqDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_req_lyr","value","ds_legal_ad","legalOfficialinfoLyrName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("legal_ad_mandate.xfdl", "Lib::common.xjs");
        this.registerScript("legal_ad_mandate.xfdl", function() {
        //include "Lib::common.xjs";

        this.legal_ad_mandate_onload = function(obj,e)
        {
        	var deptCode= application.gds_User.getColumn(application.gds_User.rowposition,	"insaDeptCode"	);
        	if (deptCode != '004')
        	{
        		alert("권한이 없습니다");
        		return this.gfnClose();
        	}
        	//this.gfnOnload(this);
        	this.gf_codeComListLoad("dsComCode",  "ds_adv",   "N", "", "", "fnCallback", "O01"); // 공통코드(법률자문)조회
        	
        	var nRow = this.ds_legal_ad.addRow();
        	
        	//넘겨받은 parameter 셋팅
        	var rtnObj = this.gfnGetArgument();
        	
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        		//trace("rtnObj :: "+JSON.stringify(rtnObj));
        		this.modal_selectlegal_ad(rtnObj.legaladvLawAdvReqNo,"selectLegalListOpen");		
        	}
        }

        this.btn_lawsuit_search_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Search01"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "legal_ad::legal_ad_no.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, {"legaladvOutReqWtr":'Y'}
        						, this
        						, "modal_callback");
        }

        
        this.fnCompEnable = function(bCheck)
        {
        	this.edt_out_req_tit_nosize.set_enable(bCheck);
        	this.txt_out_req_fact.set_enable(bCheck);
        	this.txt_out_req_ques.set_enable(bCheck);
        	this.txt_out_req_req.set_enable(bCheck);
        	this.cal_req_repdate.set_enable(bCheck);
        	
        	this.btn_save.set_visible(bCheck);
        	this.bn_rep.set_visible(bCheck);	
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
        		case "selectLegalListOpen":
        			
        			var mgrCode	= application.gds_User.getColumn(application.gds_User.rowposition,	"sabun"			);
        			var mgrName	= application.gds_User.getColumn(application.gds_User.rowposition,	"name"			);
        			var deptCode= application.gds_User.getColumn(application.gds_User.rowposition,	"insaDeptCode"	);
        			var repWtr	= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, 'legaladvRepWtr');
        			
        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqDate", this.gfn_Today());
        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvRepMgrCode", mgrCode);
        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "repMgr", mgrName);
        			
        			var tit	= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvAdvTit");
        			var fact= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvFactRela");
        			var ques= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvQuesIssu");
        			var req = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvEtc");

        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqTit", tit);
        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqFact", fact);
        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqQues", ques);
        			this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqReq", req);
        			
        			if(repWtr == "Y"){
        				this.fnCompEnable(false);
        				this.bn_rep.set_visible(true);
        			}else if(repWtr == "N"){
        				this.fnCompEnable(true);
        				this.bn_rep.set_visible(false);
        			}		
        				
        		break;
        		
        		case "selectLegalList":
        		
        			var repWtr	= this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, 'legaladvRepWtr');
        			
        			if(repWtr == "Y"){
        				this.fnCompEnable(false);
        				this.bn_rep.set_visible(true);
        			}else if(repWtr == "N"){
        				this.fnCompEnable(true);
        				this.bn_rep.set_visible(false);
        			}	
        				
        				
        			/*	
        			if(this.gfn_IsNull(this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvOutReqRepdate"))){
        				this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqRepdate", this.gfn_Today());
        			}
        			if(this.gfn_IsNull(this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvOutReqDate"))){
        				this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqDate", this.gfn_Today());
        			}
        			
        			var strLength = this.edt_out_req_tit_nosize.getLength();
        			strLength += " / 100 ";
        			this.Div06.set_text(strLength);
        			
        			var strLength = this.txt_out_req_fact.getLength();
        			strLength += " / 255 ";
        			this.Div07.set_text(strLength);
        			
        			var strLength = this.txt_out_req_ques.getLength();
        			strLength += " / 500 ";
        			this.Div08.set_text(strLength);
        			
        			var strLength = this.txt_out_req_req.getLength();
        			strLength += " / 255 ";
        			this.Div09.set_text(strLength);
        			
        			//alert("조회 완료");
        			*/
        		break;
        		
        		case "saveLegalList" :
        			alert("법률자문의뢰를 저장하였습니다.");
        			this.modal_selectlegal_ad(legaladvLawAdvReqNo_val,"selectLegalList");
        		break;
        	}
        }

        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Search01")
        	{
        		if(this.gfn_IsNull(variant))		return;
        		
        		
        		this.modal_selectlegal_ad(variant,"selectLegalList");
        	}
        	
        	
        	else if(strID == "Search02")
        	{
        		if(this.gfn_IsNull(variant))	return;
        		
        		if (!this.gfn_IsNull(variant)
        		||	variant=="null"
        		||	!variant)
        		{
        			var sp1 = "";
        			var sp2 = "";
        			var sp3 = "";
        			
        			sp1 = variant.split("&");
        			sp2 = sp1[0].split("=");
        			sp3 = sp1[1].split("=");

        			var lawyerid = sp2[1];	
        			var lawyername= sp3[1];	
        			
        			if(!this.gfn_IsNull(lawyername)){	
        				this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition,"legalOfficialinfoLyrName",lawyername);
        				this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition,"legaladvOutReqLyrid",lawyerid);
        			}
        			
        		}		
        	}
        }

        this.modal_selectlegal_ad = function(variant,strSvcid)
        {
        	//var strSvcid 		= "selectLegalList";
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

        

        
        //초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	//this.reload();
        	this.ds_legal_ad.clearData();
        }

        
        //변호사 검색
        this.btn_lawsuit_search00_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Search02"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LEGAL_OFFICIAL_CHECK.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ''
        						, this
        						, "modal_callback");
        }

        this.fnValidation = function()
        {
        	var row = this.ds_legal_ad.rowposition;
        	var legaladvOutReqRepdate 	= this.ds_legal_ad.getColumn(row, "legaladvOutReqRepdate"	);
        	var legalOfficialinfoLyrName= this.ds_legal_ad.getColumn(row, "legalOfficialinfoLyrName");
        	var legaladvOutReqTit 		= this.ds_legal_ad.getColumn(row, "legaladvOutReqTit"		);
        	var legaladvLawAdvReqNo 	= this.ds_legal_ad.getColumn(row, "legaladvLawAdvReqNo"		);
        	
        	if (this.gfn_IsNull(legaladvLawAdvReqNo))
        	{
        		alert('법률자문의뢰번호를 입력해주세요.');
        		this.cal_req_repdate.setFocus();
        		return false;
        	}
        	if (this.gfn_IsNull(legaladvOutReqRepdate))
        	{
        		alert('회신요청일자를 입력해주세요.');
        		this.cal_req_repdate.setFocus();
        		return false;
        	}
        	if (this.gfn_IsNull(legalOfficialinfoLyrName))
        	{
        		alert('의뢰변호사를 검색해주세요.');
        		this.edt_req_lyr.setFocus();
        		return false;
        	}
        	if (this.gfn_IsNull(legaladvOutReqTit))
        	{
        		alert('의뢰제목을 입력하세요.');
        		this.edt_out_req_tit_nosize.setFocus();
        		return false;
        	}
        	
        	return true;
        };

        var legaladvLawAdvReqNo_val='';
        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.gfnDsChangeCheck(this.ds_legal_ad))	return alert("저장할 데이터가 없습니다.");
        	if(!this.fnValidation())	return;
        	legaladvLawAdvReqNo_val = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	this.ds_legal_ad.setColumn(this.ds_legal_ad.rowposition, "legaladvOutReqWtr","Y");
        	
        	this.save_legal("saveLegalList");
        	
        	/*
        	var yn = confirm("저장하시겠습니까?");
        	
        	if(yn == true){
        		if(this.gfn_IsNull(this.edt_req_no.value)){
        			alert("법률자문의뢰번호를 검색해주세요.");
        		}
        		else if(this.gfn_IsNull(this.edt_out_req_tit_nosize.value)){
        			alert("의뢰제목을 입력해주세요.");
        			this.edt_out_req_tit_nosize.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cal_req_repdate.value)){
        			alert("회신요청일자를 입력해주세요.");
        			this.cal_req_repdate.setFocus();
        		}
        		else if(this.gfn_IsNull(this.edt_req_lyr.value)){
        			alert("의뢰변호사를 입력해주세요.");
        			this.btn_char_search_onclick();
        		}
        		else{
        			this.save_legal("saveLegalList");
        		}
        	}
        	*/
        }

        // 저장
        this.save_legal = function(Svcid){
        	var strSvcid = Svcid;
        	var strController = "legal_ad/saveLegalAdMandate.do";
        	var strParam = "";
        	
        	this.gfn_transaction(this
        					,strSvcid
        					,strController
        					,"ds_input=ds_legal_ad:U"
        					,""
        					,strParam
        					,"fnCallback");
        }

        this.edt_out_req_tit_nosize_ontextchanged = function(obj,e)
        {
        	var strLength = this.edt_out_req_tit_nosize.getLength();
        	strLength += " / 100 ";
        	this.Div06.set_text(strLength);
        }

        this.txt_out_req_fact_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_out_req_fact.getLength();
        	strLength += " / 255 ";
        	this.Div07.set_text(strLength);
        }

        this.txt_out_req_ques_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_out_req_ques.getLength();
        	strLength += " / 500 ";
        	this.Div08.set_text(strLength);
        }

        this.txt_out_req_req_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_out_req_req.getLength();
        	strLength += " / 255 ";
        	this.Div09.set_text(strLength);
        }

        this.bn_rep_onclick = function(obj,e)
        {
        	var legaladvNo = this.ds_legal_ad.getColumn(this.ds_legal_ad.rowposition, "legaladvLawAdvReqNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legaladvNo
        				}
        	
        	this.gfnOpenMenu("legal_ad::legal_ad_up", aArgs);
        }

        this.cal_req_date00_oneditclick = function(obj,e)
        {
        	trace("obj.enable :: "+obj.enable);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.legal_ad_mandate_onload, this);
            this.DivTitle.addEventHandler("onclick", this.sta_title_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.img_view01.addEventHandler("onclick", this.img_view01_onclick, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_no.addEventHandler("oneditclick", this.edt_req_no_oneditclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.subTitle_01.addEventHandler("onclick", this.sta_03_onclick, this);
            this.sta_no09.addEventHandler("onclick", this.sta_no_onclick, this);
            this.cb_adv_code.addEventHandler("onitemchanged", this.cmb_adv_code_onitemchanged, this);
            this.edt_req_mgr00.addEventHandler("oneditclick", this.edt_req_mgr_oneditclick, this);
            this.sta_no10.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no11.addEventHandler("onclick", this.sta_no_onclick, this);
            this.cal_req_repdate.addEventHandler("oneditclick", this.cal_req_date00_oneditclick, this);
            this.cal_req_date.addEventHandler("oneditclick", this.cal_req_date00_oneditclick, this);
            this.sta_no12.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no13.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_req_lyr.addEventHandler("oneditclick", this.edt_req_mgr_oneditclick, this);
            this.subTitle_02.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_lawsuit_search00.addEventHandler("onclick", this.btn_lawsuit_search00_onclick, this);
            this.img_view00.addEventHandler("onclick", this.img_view00_onclick, this);
            this.wSta_no00.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_no01.addEventHandler("onclick", this.sta_no_onclick, this);
            this.wSta_no02.addEventHandler("onclick", this.sta_no_onclick, this);
            this.edt_out_req_tit_nosize.addEventHandler("ontextchanged", this.edt_out_req_tit_nosize_ontextchanged, this);
            this.wSta_no03.addEventHandler("onclick", this.sta_no_onclick, this);
            this.txt_out_req_fact.addEventHandler("ontextchanged", this.txt_out_req_fact_ontextchanged, this);
            this.txt_out_req_ques.addEventHandler("ontextchanged", this.txt_out_req_ques_ontextchanged, this);
            this.txt_out_req_req.addEventHandler("ontextchanged", this.txt_out_req_req_ontextchanged, this);
            this.bn_rep.addEventHandler("onclick", this.bn_rep_onclick, this);

        };

        this.loadIncludeScript("legal_ad_mandate.xfdl");

       
    };
}
)();
