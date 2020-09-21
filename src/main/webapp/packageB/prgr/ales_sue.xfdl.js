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
                this.set_name("ales_sue");
                this.set_classname("ales_sue");
                this.set_titletext("응소(제소)보고관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_case", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_accusee", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitRaisRea\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_alessue", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"alesSueIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"alesSueReqCont\" type=\"STRING\" size=\"256\"/><Column id=\"alesSueRepoDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_08", "absolute", "14", "320", "996", "267", null, null, this);
            obj.set_taborder("97");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_22", "absolute", "28", "556", "976", "25", null, null, this);
            obj.set_taborder("115");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_21", "absolute", "28", "396", "976", "161", null, null, this);
            obj.set_taborder("114");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "24", "326", "980", "71", null, null, this);
            obj.set_taborder("113");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "14", "136", "996", "150", null, null, this);
            obj.set_taborder("80");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "28", "188", "976", "92", null, null, this);
            obj.set_taborder("112");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("109");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "60", "70", "942", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("lawsuitAdmNo", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("14");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sc", "absolute", "285", "71", "55", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "940", "71", "55", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34", "absolute", "17", "601", "93", "24", null, null, this);
            obj.set_text("결재 진행 상태");
            obj.style.set_color("black");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 굴림");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aprv", "absolute", "831", "609", "55", "23", null, null, this);
            obj.set_taborder("39");
            obj.set_text("결재");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "889", "609", "55", "23", null, null, this);
            obj.set_taborder("40");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "17", "301", "100", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("의견 등록");
            obj.style.set_background("transparent");
            obj.style.set_border("0 none white");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv01", "absolute", "11", "622", "105", "20", null, null, this);
            obj.set_taborder("72");
            obj.set_visible("true");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv02", "absolute", "115", "622", "105", "20", null, null, this);
            obj.set_taborder("73");
            obj.set_visible("true");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv03", "absolute", "219", "622", "105", "20", null, null, this);
            obj.set_taborder("74");
            obj.set_visible("true");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv11", "absolute", "11", "641", "105", "20", null, null, this);
            obj.set_taborder("75");
            obj.set_visible("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv12", "absolute", "115", "641", "105", "20", null, null, this);
            obj.set_taborder("76");
            obj.set_visible("true");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "28", "142", "976", "25", null, null, this);
            obj.set_taborder("81");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14", "absolute", "28", "166", "976", "25", null, null, this);
            obj.set_taborder("82");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "142", "115", "25", null, null, this);
            obj.set_taborder("83");
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "20", "166", "115", "25", null, null, this);
            obj.set_taborder("84");
            obj.set_text("신청법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "349", "142", "115", "25", null, null, this);
            obj.set_taborder("85");
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "349", "166", "115", "25", null, null, this);
            obj.set_taborder("86");
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "678", "142", "115", "25", null, null, this);
            obj.set_taborder("87");
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "678", "166", "115", "25", null, null, this);
            obj.set_taborder("88");
            obj.set_text("피고");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27", "absolute", "20", "190", "115", "90", null, null, this);
            obj.set_taborder("89");
            obj.set_text("소송제기사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_usedecorate("false");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_case", "absolute", "798", "144", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("90");
            obj.set_innerdataset("@ds_case");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("font", "disabled", "9 dotum");
            obj.set_index("-1");

            obj = new Combo("cmb_court", "absolute", "140", "169", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("font", "disabled", "9 dotum");

            obj = new TextArea("txt_comment", "absolute", "140", "196", "858", "78", null, null, this);
            obj.set_taborder("92");
            obj.set_scrollbars("autoboth");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_caseNo", "absolute", "469", "145", "140", "19", null, null, this);
            obj.set_taborder("93");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_raisreqNo", "absolute", "140", "145", "140", "19", null, null, this);
            obj.set_taborder("94");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_plaintiff", "absolute", "798", "169", "140", "19", null, null, this);
            obj.set_taborder("95");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_sep", "absolute", "469", "169", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_innerdataset("@ds_accusee");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("font", "disabled", "9 dotum");

            obj = new Static("sta_02", "absolute", "20", "326", "115", "71", null, null, this);
            obj.set_taborder("98");
            obj.set_text("쟁점사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "20", "396", "115", "161", null, null, this);
            obj.set_taborder("99");
            obj.set_text("의뢰내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "20", "556", "115", "25", null, null, this);
            obj.set_taborder("100");
            obj.set_text("보고일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_issuPoin", "absolute", "140", "330", "858", "63", null, null, this);
            obj.set_taborder("101");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            obj.set_maxlength("1000");
            obj.set_lengthunit("utf16");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_reqCont", "absolute", "140", "399", "859", "155", null, null, this);
            obj.set_taborder("102");
            obj.set_scrollbars("autoboth");
            obj.set_wordwrap("char");
            obj.set_lengthunit("utf16");
            obj.set_maxlength("1500");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cld_repoDate", "absolute", "140", "559", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Button("btn_close", "absolute", "946", "609", "55", "23", null, null, this);
            obj.set_taborder("107");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv13", "absolute", "219", "641", "105", "20", null, null, this);
            obj.set_taborder("108");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("110");
            obj.set_text("  응소(제소) 보고관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "115", "100", "25", null, null, this);
            obj.set_taborder("111");
            obj.set_text("소송 기본사항");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "36", "350", "37", "23", null, null, this);
            obj.set_taborder("116");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "36", "465", "37", "23", null, null, this);
            obj.set_taborder("117");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "36", "558", "37", "23", null, null, this);
            obj.set_taborder("118");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("ales_sue");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("응소(제소)보고관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","lawsuitAdmNo","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmb_case","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cmb_case","text","ds_case","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmb_court","value","ds_lawsuit","lawsuitAplCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cmb_court","text","ds_court","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","txt_comment","value","ds_lawsuit","lawsuitRaisRea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_caseNo","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_raisreqNo","value","ds_lawsuit","lawRaisreqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_plaintiff","value","ds_pladef","pladefName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmb_sep","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cmb_sep","text","ds_accusee","codenm");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txt_issuPoin","value","ds_alessue","alesSueIssuPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","txt_reqCont","value","ds_alessue","alesSueReqCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cld_repoDate","value","ds_alessue","alesSueRepoDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","lawsuitAdmNo","tooltiptext","ds_alessue","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("ales_sue.xfdl", "Lib::common.xjs");
        this.registerScript("ales_sue.xfdl", function() {
        //include "Lib::common.xjs"; 

        
        var strConfirm = "";
        var g_nLawsuitNo = 0;

        var saveYN = "N";
        var bookNo = "";
        var infoStepCode = "003";

        this.lawsuit_onload = function(obj,e)
        {
        // 	var strController = "svcurl::code/selectCodeList.do";
        // 	var strParam = "AllYn=Y, AllCode='', AllName='', ";
        // 	
        // 	this.transaction("trCase", strController, "", "ds_case=ds_output", strParam+"CLASS_CODE=A02", "fnCallback");
        // 	this.transaction("trCourt", strController, "", "ds_court=ds_output", strParam+"CLASS_CODE=A01", "fnCallback");
        // 	this.transaction("trAccusee", strController, "", "ds_accusee=ds_output", strParam+"CLASS_CODE=H02", "fnCallback");
        	
        			

        // 		// JKIM_2020.01.02 : 상신진행리스트에서 메뉴이동
        // 	if(typeof (application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL"))!='undefined'){
        // 		g_nLawsuitNo = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL").substr(0,10);
        // 
        // 		if(g_nLawsuitNo) {
        // 			this.LawsuitSearch();
        // 		}
        // 	}
        // 
        // 	if(typeof (application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL"))!='undefined'){
        // 		//전체결제
        // 		g_nLawsuitNo = application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL").substr(0,10);
        // 		if(g_nLawsuitNo) {
        // 			this.LawsuitSearch();
        // 		}
        // 	}

        	//결제진행리스트에서 응소제기접수 등록
        	var rtnObj = this.gfnGetArgument();
        	
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        	g_nLawsuitNo=rtnObj.legaladvLawAdvReqNo.substr(0,10);
        		if(g_nLawsuitNo) {
        		this.LawsuitSearch();
        		}
        	}
        	
        	//상시결제리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListEmpl))
        	{
        	g_nLawsuitNo=rtnObj.aprvListEmpl.substr(0,10);
        		if(g_nLawsuitNo)this.LawsuitSearch();
        	}
        	
        		//전체결재리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListAll))
        	{
        		g_nLawsuitNo=rtnObj.aprvListAll.substr(0,10);
        		if(g_nLawsuitNo) this.LawsuitSearch();
        	}
        }

        this.fnCallback=function(strSvcId,nErrCode,strErrMessage)
        {
        	var strParam="lawsuitAdmNo="+"\""+g_nLawsuitNo+"\"";
        	
        	switch(strSvcId)
        	{	
        		case "law_suitSelect":
        			if(nErrCode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        				return false;
        			}
        			else{
        				this.transaction("pla_defSelect", "svcurl::ales_sue/pla_defSelect.do", "", "ds_pladef=ds_output", strParam, "fnCallback"); 
        			}
        			break;
        			
        		case "pla_defSelect":
        			if(nErrCode == "0"){
        				this.transaction("ales_sueSelect", "svcurl::ales_sue/ales_sueSelect.do", "", "ds_alessue=ds_output", strParam, "fnCallback"); 
        			}
        			break;
        		
        		case "ales_sueSelect":
        			bookNo = this.ds_alessue.getColumn(0, "lawsuitAdmNo") + "003" + "000";
        			//this.txt_comment.set_value(this.ds_alessue.getColumn(0, "lawsuitRaisRea"));
        				
        			if (this.ds_alessue.getRowCount()==0) {
        				var nAddRow = this.ds_alessue.addRow();
        				this.ds_alessue.setColumn(nAddRow, "lawsuitAdmNo", this.g_nLawsuitNo);
        			}	
        			
        			var strInstAdmCode = this.ds_lawsuit.getColumn(0, "instAdmCode");
        			var strPladefCode = this.ds_lawsuit.getColCount(0, "lawsuitCpPladefSepcode");
        		
        			var sepCode = this.ds_lawsuit.getColumn(0,"lawsuitCpPladefSepcode");
        			this.setTitle(sepCode);

        			var aprvSearchNo='002' + this.g_nLawsuitNo + strInstAdmCode + strPladefCode;		
        			
        					
        // 		trace("소송관리번호 조회 :: " + this.ds_lawsuit.saveXML());
        // 		trace("소송관리번호 조회 :: " + this.ds_alessue.saveXML());
        		
        			
        			this.aprv_search(bookNo);		//결재조회		

        			break;
        						
        		case "trCase":
        			this.cmb_case.set_index(-1);
        			break;
        		case "trCourt": 
        			break;
        		case "trAccusee": 
        			break;	
        			
        		case "ales_sueSave":					
        // 			var tmpType = this.ds_alessue.getRowType();
        // 			if(tmpType == 2) {
        // 				alert("저장 되었습니다");
        // 			} else if(tmpType == 4) {
        // 				alert("수정 되었습니다");
        // 			}
        			
        			alert("저장 되었습니다");
        			break;
        			
        		case "AprvSearch":
        // 			if(nErrCode != "0"){	
        // 				alert("데이터가 정상적으로 조회되지 않았습니다.\n" + "결재목록 에러내용: " + errmsg);
        // 				return false;
        // 			}
        // 			else{
        // 				
        // 				var cnt = 0;
        // 			
        // 				for( i=0 ; i<=this.ds_position.getRowCount() ; i++){	//결제라인box (ds_position_code) 생성	
        // 					this.ds_position_code.addRow();
        // 					if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){				//결재완료
        // 						this.ds_position_code.setColumn(cnt, "codeNo","Y");
        // 						this.ds_position_code.setColumn(cnt, "codeName","결제완료");
        // 					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        // 						this.ds_position_code.setColumn(cnt, "codeNo","N");
        // 						this.ds_position_code.setColumn(cnt, "codeName","결제대기");
        // 					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z"){
        // 						this.ds_position_code.setColumn(cnt, "codeNo","Z");
        // 						this.ds_position_code.setColumn(cnt, "codeName","반려");			//반려
        // 					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A"){
        // 						this.ds_position_code.setColumn(cnt, "codeNo","A");
        // 						this.ds_position_code.setColumn(cnt, "codeName","전결");			//전결
        // 					}else{
        // 					
        // 					}
        // 					cnt++;
        // 				}	
        // 				
        // 			}
        // 						
        // //			this.aprv_lock();	//결재화면(비)활성화 여부 처리
        // 			break;
        		
        		
        		case "outList":
        			if (nErrCode < 0) {
        				alert("데이터를 불러오기에 실패하였습니다." + strErrMessage);
        			} else {
        			
        				// 결재라인 박스 생성.
        				var cnt = 0;
        			//	var cc = "y";
        				var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        				
        				//trace("광훈 ::: " + this.ds_position.saveXML());
        				
        				for(var i=0 ; i < this.ds_position.getRowCount() ; i++) {
        					//alert(this.ds_position.getColumn(i,"aprvInfoCondCode"));
        					this.ds_position_code.addRow();
        					
        // 					if(this.ds_position_code.rowcount == 0) {
        // 						this.ds_position_code.addRow();
        // 					}
        					
        					if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){				// 결재완료
        						this.ds_position_code.setColumn(cnt, "codeNo","Y");
        						this.ds_position_code.setColumn(cnt, "codeName","결재완료");
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        						this.ds_position_code.setColumn(cnt, "codeNo","N");
        						this.ds_position_code.setColumn(cnt, "codeName","결재대기");
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z"){		//반려
        						this.ds_position_code.setColumn(cnt, "codeNo","Z");
        						this.ds_position_code.setColumn(cnt, "codeName","반려");			
        			//			cc="n";
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A"){		//전결
        						this.ds_position_code.setColumn(cnt, "codeNo","A");
        						this.ds_position_code.setColumn(cnt, "codeName","전결");			
        					}else{
        					
        					}
        					cnt++;

        				}
        				
        // 				// 반려시 상신자만 결재라인 초기화
        // 				if(cc == "n" && this.ds_position.getColumn(0, "aprvprgrInfoWritSabun") == loginSabun){
        // 					this.ds_position.clearData();
        // 					this.ds_position_code.clearData();
        // 					return false;
        // 				}
        				
        				
        				if(this.ds_position.rowcount > 0) {
        				//	this.aprv_lock();
        				}
        				
        			}
        		
        		trace("result ::: " + this.ds_position.saveXML());
        		
        		this.aprv_lock();
        		this.fn_staSet("sta_aprv01","sta_aprv02","sta_aprv03","sta_aprv11","sta_aprv12","sta_aprv13");
        		break;
        			
        	}
        }

        this.fn_staSet = function(sta1,sta2,sta3,val1,val2,val3) {
        // 	this.ds_position.clearData();
        // 	this.ds_position_code.clearData();
        // 	var deptName = this.ds_position.getColumn(0,"aprvInfoDeptName");
        // 	var name = this.ds_position.getColumn(0,"aprvInfoName");
        // 	var codeName = this.ds_position_code.getColumn(0, "codeName");
        // alert("아오 " + this.ds_position_code.saveXML());
        //alert(this.ds_position_code.rowcount);

        	if(this.ds_position_code.rowcount == 0)
        	{	
        		this[sta1].set_text("");
        		this[sta2].set_text("");
        		this[sta3].set_text("");
        		this[val1].set_text("");
        		this[val2].set_text("");
        		this[val3].set_text("");
        	}
        	else
        	{
        		
        		this[sta1].set_text("");
        		this[sta2].set_text("");
        		this[sta3].set_text("");
        		this[val1].set_text("");
        		this[val2].set_text("");
        		this[val3].set_text("");

        		
        		for(var i = 0 ; i < this.ds_position_code.rowcount ; i++) {
        			
        			if(i == 0) 
        			{
        				this[sta1].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        				this[val1].set_text(this.ds_position_code.getColumn(i, "codeName"));
        				//this.sta_aprv01.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        				//this.sta_aprv11.set_text(this.ds_position_code.getColumn(i, "codeName"));
        			}
        			else if (i == 1)
        			{		
        				this[sta2].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        				this[val2].set_text(this.ds_position_code.getColumn(i, "codeName"));
        			} 
        			else if (i == 2) 
        			{
        				this[sta3].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        				this[val3].set_text(this.ds_position_code.getColumn(i, "codeName"));
        			}
        		
        		}
        	}
        	
        	
        // 	if(this.ds_position.getColumn(2, "aprvInfoCondCode") == "Y"){
        // 		this.btn_aprv.set_enable(false);
        // 	}
        	
        application.gds_Params.deleteAll();
        	
        // 	this.sta_aprv01.set_text(this.ds_position.getColumn(0,"aprvInfoDeptName") + " " + this.ds_position.getColumn(0,"aprvInfoName"));
        // 	this.sta_aprv11.set_text(this.ds_position_code.getColumn(0, "codeName"));
        // 	this.sta_aprv02.set_text(this.ds_position.getColumn(1,"aprvInfoDeptName") + " " + this.ds_position.getColumn(1,"aprvInfoName"));
        // 	this.sta_aprv12.set_text(this.ds_position_code.getColumn(1, "codeName"));
        // 	this.sta_aprv03.set_text(this.ds_position.getColumn(2,"aprvInfoDeptName") + " " + this.ds_position.getColumn(2,"aprvInfoName"));
        // 	this.sta_aprv13.set_text(this.ds_position_code.getColumn(2, "codeName"));
        }

        //초기화 
        this.btn_reset_onclick = function(obj,e)
        {
        	this.reload();
        }

        //소송관리번호 검색
        this.btn_sc_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("SearchNo"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        																	
        }

        //모달콜백
        this.modal_callback = function(sSvcId,variant)
        {
        	var strParam="lawsuitAdmNo="+"\""+g_nLawsuitNo+"\"";
        	
        	if(sSvcId == "SearchNo")
        	{
        		if(this.gfn_IsNull(variant)==false){
        // 			this.ds_position.clearData();
        // 			this.ds_position_code.clearData();

        			var strController = "svcurl::code/selectCodeList.do";
        			var strParam = "AllYn=Y, AllCode='', AllName='', ";
        			
        			this.transaction("trCase", strController, "", "ds_case=ds_output", strParam+"CLASS_CODE=A02", "fnCallback");
        			this.transaction("trCourt", strController, "", "ds_court=ds_output", strParam+"CLASS_CODE=A01", "fnCallback");
        			this.transaction("trAccusee", strController, "", "ds_accusee=ds_output", strParam+"CLASS_CODE=H02", "fnCallback");

        
        		
        			g_nLawsuitNo = variant.substr(0,10);	// 소송관리번호
        			this.LawsuitSearch();//소송
        			
        			//this.fn_staSet();
        		}else{
        			return false;
        		}
        	}
        	
        	if(sSvcId == "ApprovalReq"){
        //		this.aprv_search(bookNo);
        		this.LawsuitSearch();
        //		this.fn_staSet();
        	}
        	
        	this.txt_issuPoin.setFocus();
        }

        // 소송관리번호 조회
        this.LawsuitSearch=function()
        {
        	var strParam="lawsuitAdmNo="+"\""+g_nLawsuitNo+"\"";

        	this.ds_lawsuit.clearData();
        	this.transaction("law_suitSelect", "svcurl::ales_sue/law_suitSelect.do", "", "ds_lawsuit=ds_output", strParam, "fnCallback"); 
        	
        }

        // 의견등록 저장
        this.btn_save_onclick = function(obj,e)
        {
        		if(this.gfn_IsNull(this.txt_issuPoin.value)){
        			alert("쟁점사항을 입력해 주십시오!");
        			this.txt_issuPoin.setFocus();
        		}
        		else if(this.gfn_IsNull(this.txt_reqCont.value)){
        			alert("의뢰내용을 입력해주십시오!");
        			this.txt_reqCont.setFocus();
        		}
        		else if(this.gfn_IsNull(this.cld_repoDate.value)){
        			alert("보고날짜를 입력해 주십시오!");
        			this.cld_repoDate.setFocus();
        		}
        		else{
        		
        			var sSvcId = "ales_sueSave";
        			var strController = "svcurl::ales_sue/ales_sueSave.do";			
        		
        			var tmpNo = this.ds_lawsuit.getColumn(0,"lawsuitAdmNo");

        			this.transaction(sSvcId, strController, "ds_alessue=ds_alessue:U", "", "", "fnCallback");
        			saveYN = "Y";		

        			
        			// 하던중..
        			//this.updateAlesSue();

        

        
        		}

        }

        // 닫기 버튼
        this.btn_close_onclick = function(obj,e){
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        this.aprv_view_true=function()
        {
        	this.txt_issuPoin.set_enable(true);
        	this.txt_reqCont.set_enable(true);
        	this.cld_repoDate.set_enable(true);
        	
        	this.btn_aprv.set_visible(true);
        	
        	this.sta_aprv01.set_visible(true);
        	this.sta_aprv02.set_visible(true);
        	this.sta_aprv03.set_visible(true);
        	this.sta_aprv11.set_visible(true);
        	this.sta_aprv12.set_visible(true);
        	this.sta_aprv13.set_visible(true);
        	
        }

        this.aprv_view_false=function()
        {
        	this.txt_issuPoin.set_enable(false);
        	this.txt_reqCont.set_enable(false);
        	this.cld_repoDate.set_enable(false);
        	
        	this.btn_aprv.set_visible(false);
        	
        	this.sta_aprv01.set_visible(false);
        	this.sta_aprv02.set_visible(false);
        	this.sta_aprv03.set_visible(false);
        	this.sta_aprv11.set_visible(false);
        	this.sta_aprv12.set_visible(false);
        	this.sta_aprv13.set_visible(false);
        	
        }

        /********************************************************************************
         * Desc		: 결재조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        // this.aprv_search=function(aprvprgrInfoBookNo)
        // {
        // 	var strSvcid="AprvSearch";
        // 	var strController="lawsuit/getApprovalLineList.do";
        // 	var strParam="aprvprgrInfoStepCode=" + "\"" + infoStepCode + "\"";//결재 진행 코드
        // 	strParam += " aprvprgrInfoBookNo=" +"\""+aprvprgrInfoBookNo+"\""; 	//결재 대장 번호
        // 	
        // 	//trace(strParam);		
        // 	this.gfn_transaction(this,strSvcid,strController,"","ds_position=ds_output",strParam,"fnCallback");
        // }

        /********************************************************************************
         * Desc		: 결재(비)활성화 기능
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        // this.aprv_lock=function()
        // {
        // 	var strSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        // 	
        // 	if(this.gfn_IsNull(strSabun)) {
        // 		strSabun = "0";
        // 	}
        // 	
        // 	
        // 	//결재 미 시행시
        // 	if(this.ds_position.rowcount < 1){
        // 		//alert("aprvTest0: "+id);
        // 		//this.btn_aprv.set_enable(true);			//결재버튼 활성화
        // 		this.btn_save.set_enable(true);			//저장버튼 활성화
        // 		//this.aprv_view_true();					//화면기능 활성화
        // 	}
        // 	//1차 결재시
        // 	else if(this.ds_position.getColumn(0,"aprvInfoCont") == ""){		
        // 		if(this.ds_position.getColumn(0,"aprvprgrInfoWritSabun") == strSabun){		//작성자와 접속자가 같은경우
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(true);
        // //			this.aprv_view_true();
        // 		}
        // 		else if(this.ds_position.getColumn(0,"aprvInfoSabun") == strSabun){		//결재자와 접속자가 같은경우
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 		else if(this.ds_position.getColumn(1,"aprvInfoSabun") == strSabun){		//2차결재자와 접속자가 같은경우
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 		else{	//그외 경우
        // // 			this.btn_aprv.set_enable(false);
        // // 			this.btn_save.set_enable(false);
        // // 			this.aprv_view_false();
        // 		}
        // 	}
        // 	//2차 결재시
        // 	else if(this.ds_position.getColumn(1,"aprvInfoCont") == ""){		
        // 		
        // 		if(this.ds_position.getColumn(0,"aprvInfoSabun") == strSabun){		//결재자와 접속자가 같은경우
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 		else if(this.ds_position.getColumn(1,"aprvInfoSabun") == strSabun){		
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 		else if(this.ds_position.getColumn(2,"aprvInfoSabun") == strSabun){		
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}		
        // 		else{	//그외 경우
        // // 			this.btn_aprv.set_enable(false);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 	}
        // 	//3차 결재시
        // 	else if(this.ds_position.getColumn(2,"aprvInfoCont") == ""){		
        // 		
        // 		if(this.ds_position.getColumn(1,"aprvInfoSabun") == strSabun){		//결재자와 접속자가 같은경우
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 		else if(this.ds_position.getColumn(2,"aprvInfoSabun") == strSabun){		
        // // 			this.btn_aprv.set_enable(true);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 		else{	//그외 경우
        // // 			this.btn_aprv.set_enable(false);
        // // 			this.btn_save.set_enable(false);
        // //			this.aprv_view_false();
        // 		}
        // 	}
        // 	//3차 결재완료시
        // 	else if(this.ds_position.getColumn(2,"aprvInfoCont") != ""){		
        // // 		this.btn_aprv.set_enable(false);
        // // 		this.btn_save.set_enable(false);
        // //		this.aprv_view_false();	
        // 	}
        // 	
        // }

        // 2020.01.08 최광훈
        // 결재버튼 동작
        this.btn_aprv_onclick = function(obj,e)
        {

        	var validation = true;
        	var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        	var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
        	var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
        	var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
        	var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        		
        //	var BookNo="";
        	// 소송정보 등록 시 유효성 체크
        	if(this.lawsuitAdmNo.text==''){
        		alert("소송관리번호를 조회해 주십시오.");
        		validation=false;
        	}else if(this.txt_issuPoin.text==''){
        		alert("쟁점사항을 저장해 주십시오.");
        		this.txt_issuPoin.setFocus();
        		validation=false;
        	}else if(this.txt_reqCont.text==""){
        		alert("의뢰내용을 저장해 주십시오.");
        		this.txt_reqCont.setFocus();
        		validation=false;
        	}else if(this.cld_repoDate.text==""){
        		alert("보고일자를 저장해 주십시오.");
        		this.cld_repoDate.dropdown();
        		validation=false;
        	}

        	if(validation == true) {

        		if(this.ds_alessue.getRowType(this.ds_alessue.rowposition) == 4){
        			alert("먼저 작성 내용을 저장해주세요.");
        			return false;
        		}
        		
        		
        		var strParam="aprvprgrInfoStepCode="+"\""+infoStepCode+"\"";//결재 진행 코드
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		 
        		var newChild = new ChildFrame();
        		
        //		alert("설마............ " + this.ds_position.saveXML());
        		
        		var aprvprgrInfoSeq = this.ds_position.getColumn(0, "aprvprgrInfoSeq" );
        		if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun) {
        			newChild.init("ApprovalReq"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "aprv::APRV_COMMENT.xfdl");
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			newChild.showModal(this.getOwnerFrame()
        								, {stepCode:"003", bookNo:bookNo, dataset:this.ds_position.saveXML() , aprvprgrInfoSeq:aprvprgrInfoSeq}
        								, this
        								, "modal_callback");
        		} else if(writSabun == loginSabun || writSabun == null) {
        			
        			newChild.init("ApprovalReq"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "aprv::APRV_PROG_COMMENT.xfdl");
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			newChild.showModal(this.getOwnerFrame()
        								, {stepCode:"003", bookNo:bookNo , aprvprgrInfoSeq:aprvprgrInfoSeq }
        								, this
        								, "modal_callback");
        		}  else {
        		
        		}
        		
        		
        		
        					
        // 		var strParam="aprvprgrInfoStepCode="+"\""+infoStepCode+"\"";//결재 진행 코드
        // 		
        // 		var nLeft = system.clientToScreenX(this, 10);
        // 		var nTop = system.clientToScreenY(this, 10);
        // 		 
        // 		var newChild = new ChildFrame;
        // 		newChild.init("ApprovalReq"
        // 					, "absolute", nLeft, nTop, 300, 250, null, null
        // 					, "aprv::APRV_PROG_COMMENT.xfdl");
        // 		newChild.set_openalign("center middle");
        // 		newChild.set_dragmovetype("all");
        // 		newChild.showModal(this.getOwnerFrame()
        // 							, {stepCode:"003", bookNo:bookNo}
        // 							, this
        // 							, "modal_callback");
        		
        		
        		if(bookNo == "" || bookNo == null) {
        		} else {
        			this.aprv_search(bookNo);
        		}
        							
        	}
        }

        this.aprv_search = function(bookNo) {

        	this.ds_position.clearData();
        	this.ds_position_code.clearData();
        	
        	var strSvcid = "outList";
        	var strUrl = "svcurl::approval/approvalLineList.do";
        	var strInputDs = ""; 
        	var strOutputDs = "ds_position=ds_output";
        	var strParam = "";
        	var strFnCallback = "fnCallback";
        	
        	strParam += "APRVPRGR_INFO_STEP_CODE=" + "\"" + infoStepCode + "\""; 
        	strParam += " APRVPRGR_INFO_BOOK_NO=" + "\"" + bookNo + "\""; 

        	this.transaction(strSvcid
        				, strUrl
        				, strInputDs
        				, strOutputDs
        				, strParam
        				, strFnCallback);

        
        }

        
        // 2020.01.08 최광훈
        // 소송관리번호로 응소 또는 제소 데이터로 스위칭.
        this.setTitle = function(sepCode){
        	if(sepCode == "001") { // 피고일때
        		this.Div00.set_text("  제소보고");
        		this.sta_20.set_text("피고");
        		this.sta_15.set_text("소송의뢰번호");
        		this.sta_27.set_text("소송제기사유");
        	} else { // 원고일때
        		this.Div00.set_text("  응소보고");
        		this.sta_20.set_text("원고");
        		this.sta_15.set_text("소송고지번호");
        		this.sta_27.set_text("고지내용");
        	};
        }

        // 2020.01.20 최광훈
        // 저장 버튼 동작.
        this.updateAlesSue = function() {
        	var strSvcID = "updateAlesSue";
        	var strURL = "svcurl::progress/updateAlesSue.do";
        	var strInDatasets = "ds_input=ds_ales_sue";
        	var strOutDatasets = "";
        	var strArgument = "voClass='nexacro.sample.vo.prgr.Ales_sueVO'";
        	var strCallbackFunc = "fnCallback";
           
            this.transaction(strSvcID,
        				strURL,
        				strInDatasets,
        				strOutDatasets,
        				strArgument,
        				strCallbackFunc);	

        }

        

        /* 2020.01.08 최광훈
         기존 소스가 작동하지 않아 주석처리
        */
        // this.btn_aprv_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	var strValid=true;
        // 		
        // 	var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        // 	
        // 	var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
        // 	var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
        // 	var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
        // 	var loginSabun = this.gb_Param.substr("4","10");
        // 	var BookNo="";
        // 	
        // 	if(this.g_nLawsuitNo.value=""){
        // 		alert("소송정보가 등록되어 있어야 합니다.");
        // 		strValid=false;
        // 	}else if(this.txt_issuPoin.value == ""){
        // 		alert("쟁점사항을 저장해 주십시오.");
        // 		this.txt_issuPoin.setFocus();
        // 		strValid=false;
        // 	}else if(this.txt_reqCont.value == ""){
        // 		alert("의뢰내용을 저장해 주십시오.");
        // 		this.txt_reqCont.SetFocus();
        // 		strValid=false;
        // 	}else if(this.cld_repoDate.value == ""){
        // 		alert("보고일자를 저장해 주십시오.");
        // 		this.cld_repoDate.DropDown();
        // 		strValid=false;
        // 	}
        // 	
        // 	if(validation){
        // 	
        // 	    var aprvprgrInfoBookNo = '002'
        // 							+ this.g_nLawsuitNo
        // 							+ this.ds_lawsuit.getColumn(0, "instAdmCode");
        //                             + this.ds_lawsuit.getColumn(0, "lawsuitCpPladefSepcode");
        //                            
        // 		dialog("Report","sample::SAMPLE0007.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0);
        // 		return;                    
        //     }                    
        //                               
        // }

        

        

        this.aprv_lock = function() {
        	var id = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	
            // 임시저장 여부 체크
            if(this.ds_position.getRowCount() < 1){
        		this.btn_aprv.set_enable(true);
        		this.btn_save.set_enable(true);
        		this.enable_true();
        		
        	}else if(this.ds_position.getRowCount() == 1){	//1차 결재진행중
        		if(this.ds_position.getColumn(0, "aprvprgrInfoWritSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(true);
        			this.enable_true();
        	
        		}else if(this.ds_position.getColumn(0, "aprvInfoSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        	
        		}
        		
        	}else if(this.ds_position.getRowCount() == 2){	//2차 결재진행중
        		if(this.ds_position.getColumn(0, "aprvInfoSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        		
        		}else if(this.ds_position.getColumn(1, "aprvInfoSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        		
        		}
        	}else if(this.ds_position.getRowCount() == 3 && this.ds_position.getColumn(2, "aprvInfoCondCode") != "Y"){	// 3차 결재진행중
        		if(this.ds_position.getColumn(1, "aprvInfoSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        			
        		}else if(this.ds_position.getColumn(2, "aprvInfoSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        			
        		}
        	}else if(this.ds_position.getColumn(2, "aprvInfoCondCode") == "Y"){
        		if(this.ds_position.getColumn(2, "aprvInfoSabun") == id){
        			this.btn_aprv.set_enable(true);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        					
        		}else {
        			this.btn_aprv.set_enable(false);
        			this.btn_save.set_enable(false);
        			this.enable_false();
        		}
        	}
        }

        

        //enable_true 이벤트
        this.enable_true = function(){
        	this.txt_issuPoin.set_enable(true);
        	this.txt_reqCont.set_enable(true);
        	this.cld_repoDate.set_enable(true);
        }

        //enable_false 이벤트
        this.enable_false = function(){
        	this.txt_issuPoin.set_enable(false);
        	this.txt_reqCont.set_enable(false);
        	this.cld_repoDate.set_enable(false);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.lawsuit_onload, this);
            this.btn_sc.addEventHandler("onclick", this.btn_sc_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.btn_aprv.addEventHandler("onclick", this.btn_aprv_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.edt_raisreqNo.addEventHandler("oneditclick", this.edt_caseNo00_oneditclick, this);
            this.edt_raisreqNo.addEventHandler("onchanged", this.edt_raisreqNo_onchanged, this);
            this.cmb_sep.addEventHandler("onitemchanged", this.cmb_sep_onitemchanged, this);
            this.cld_repoDate.addEventHandler("oneditclick", this.cld_repoDate_oneditclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("ales_sue.xfdl");

       
    };
}
)();
