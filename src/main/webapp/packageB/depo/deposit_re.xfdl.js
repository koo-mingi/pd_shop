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
                this.set_name("deposit_re");
                this.set_titletext("공탁관리");
                this._setFormPosition(0,0,1024,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_depo", this);
            obj._setContents("<ColumnInfo><Column id=\"depositDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositJuriCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositForcExecSeq\" type=\"STRING\" size=\"256\"/><Column id=\"depositOthDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepuName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositKeepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoReleDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepchgCollDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollRea\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrSeq\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrId\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrAsigDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_depo_mgr_id", "absolute", "155", "256", "143", "19", null, null, this);
            obj.set_taborder("13");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "54", "70", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_text("공탁관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_adm_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_03", "absolute", "14", "115", "197", "19", null, null, this);
            obj.set_text("공탁사항등록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "132", "996", "84", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "54", "137", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "54", "161", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "137", "115", "25", null, null, this);
            obj.set_text("관할법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "350", "137", "115", "25", null, null, this);
            obj.set_text("강제집행일련번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "350", "161", "115", "25", null, null, this);
            obj.set_text("대리인명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("edt_depo_juri_cort", "absolute", "140", "140", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Static("subTitle_12", "absolute", "14", "371", "197", "19", null, null, this);
            obj.set_text("공탁금회수");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "14", "386", "996", "154", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_depo_search", "absolute", "287", "71", "55", "23", null, null, this);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "690", "137", "115", "25", null, null, this);
            obj.set_text("피공탁자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "161", "115", "25", null, null, this);
            obj.set_text("공탁자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_judge_name00", "absolute", "252", "394", "376", "19", null, null, this);
            obj.set_taborder("23");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10", "absolute", "53", "391", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "20", "391", "115", "25", null, null, this);
            obj.set_text("공탁금회수일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "53", "415", "950", "120", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("wSta_13", "absolute", "20", "415", "115", "120", null, null, this);
            obj.set_text("공탁회수사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_coll_rea", "absolute", "140", "418", "856", "113", null, null, this);
            obj.set_taborder("20");
            obj.set_scrollbars("fixedvert");
            obj.set_maxlength("3000");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_forc_exec_seq", "absolute", "471", "140", "140", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("10");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "54", "185", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "20", "185", "115", "25", null, null, this);
            obj.set_text("보관부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "350", "185", "115", "25", null, null, this);
            obj.set_text("공탁일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_depo_Date", "absolute", "471", "188", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Static("sta_25", "absolute", "690", "161", "115", "25", null, null, this);
            obj.set_text("공탁금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("subTitle_27", "absolute", "14", "232", "197", "19", null, null, this);
            obj.set_text("공탁담당자");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view03", "absolute", "14", "248", "996", "35", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_28", "absolute", "54", "253", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_30", "absolute", "20", "253", "115", "25", null, null, this);
            obj.set_text("공탁담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_31", "absolute", "350", "253", "115", "25", null, null, this);
            obj.set_text("배정일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "690", "253", "115", "25", null, null, this);
            obj.set_text("담당자부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_char_search", "absolute", "288", "254", "55", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_mgr_name", "absolute", "140", "256", "140", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_depo_asig_date", "absolute", "470", "256", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Static("subTitle_29", "absolute", "14", "300", "197", "19", null, null, this);
            obj.set_text("공탁서불출");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view04", "absolute", "14", "317", "996", "35", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32", "absolute", "54", "322", "950", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34", "absolute", "20", "322", "115", "25", null, null, this);
            obj.set_text("공탁불출일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depu_name", "absolute", "471", "164", "140", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_depu_search", "absolute", "623", "162", "55", "23", null, null, this);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_depo_rele_date", "absolute", "140", "325", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Calendar("cal_chg_coll_date", "absolute", "140", "394", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Static("sta_14", "absolute", "350", "391", "115", "25", null, null, this);
            obj.set_text("공탁회수금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("notice", "absolute", "376", "76", "370", "17", null, null, this);
            obj.set_text("* 신규등록이 아닌경우 공탁관리번호를 검색해주세요.");
            obj.style.set_color("red");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "893", "551", "53", "24", null, null, this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "953", "551", "53", "24", null, null, this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_oth_name", "absolute", "810", "140", "140", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("20");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_inputtype("english,full,half");
            obj.set_inputfilter("dot,comma,sign,symbol,digit,space");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_coll_chg", "absolute", "470", "394", "140", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_mask("###,###,###,###");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_depo_chg", "absolute", "810", "164", "140", "18", null, null, this);
            obj.set_taborder("10");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_depo_mgr_dept", "absolute", "140", "188", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("@ds_dept");
            obj.set_datacolumn("codenm");
            obj.set_codecolumn("codeno");
            obj.set_index("-1");

            obj = new Combo("cb_keep_dept_code", "absolute", "810", "256", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Edit("edt_depo_name", "absolute", "140", "164", "140", "19", null, null, this);
            obj.set_taborder("26");
            obj.set_maxlength("20");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("true");
            obj.set_inputfilter("dot,comma,sign,symbol,digit,space");
            obj.set_inputtype("english,full,half");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "94.04%", "518", null, "10", "0.29%", null, this);
            obj.set_taborder("27");
            obj.set_text("/ 1000");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "937", "508", null, "30", "61", null, this);
            obj.set_taborder("28");
            obj.set_text("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static20", "absolute", "39", "139", "37", "23", null, null, this);
            obj.set_taborder("29");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static02", "absolute", "46", "163", "37", "23", null, null, this);
            obj.set_taborder("30");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static03", "absolute", "39", "187", "37", "23", null, null, this);
            obj.set_taborder("31");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static04", "absolute", "348", "139", "37", "23", null, null, this);
            obj.set_taborder("32");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static05", "absolute", "372", "164", "37", "23", null, null, this);
            obj.set_taborder("33");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static06", "absolute", "712", "140", "37", "23", null, null, this);
            obj.set_taborder("34");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static07", "absolute", "712", "163", "37", "23", null, null, this);
            obj.set_taborder("35");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("star_Static08", "absolute", "372", "187", "37", "23", null, null, this);
            obj.set_taborder("36");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Div("DivTitle", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("37");
            obj.set_text("  공탁관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.DivTitle,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.set_text("  공탁관리");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.DivTitle.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("deposit_re");
            		p.set_titletext("공탁관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","edt_depo_name","value","ds_depo","depositDepoName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_depo_adm_no","value","ds_depo","depositDepoAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_depo_juri_cort","value","ds_depo","depositJuriCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_forc_exec_seq","value","ds_depo","depositForcExecSeq");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_depo_oth_name","value","ds_depo","depositOthDepoName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_depu_name","value","ds_depo","depositDepuName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_depo_chg","value","ds_depo","depositDepoChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","cb_keep_dept_code","value","ds_depo","depositmgrDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cal_depo_Date","value","ds_depo","depositDepoDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cal_depo_rele_date","value","ds_depo","depositDepoReleDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cal_chg_coll_date","value","ds_depo","depositDepchgCollDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_coll_chg","value","ds_depo","depositDepoCollChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","txt_coll_rea","value","ds_depo","depositDepoCollRea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_depo_mgr_name","value","ds_depo","depositmgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cal_depo_asig_date","value","ds_depo","depositmgrAsigDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cb_depo_mgr_dept","value","ds_depo","depositKeepDeptCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("deposit_re.xfdl", "Lib::common.xjs");
        this.registerScript("deposit_re.xfdl", function() {

        //include "Lib::common.xjs";

        this.saveKey = "";

        var strMgr = new Array();

        this.deposit_re_onload = function(obj,e)
        {	
        	//this.gfnOnload(this);
        	this.gf_codeComListLoad("dsComCode", "ds_dept", "N", "", "", "transaction_callback", "S01"); // 공통코드(부서)조회
        	this.ds_depo.addRow();
        	this.ds_depo.setColumn(0, "depositDepoDate", this.gfn_Today());
        }

        
        // 정보 초기화
        this.btn_reset_onclick = function(obj,e)
        {
        	this.ds_depo.clearData();
        	this.ds_court.clearData();
        	this.reload();
        	this.ds_depo.addRow();
        }

        // 공탁관리번호 모달창
        this.btn_depo_search_onclick = function(obj,e)
        {
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "depo::pop_depo.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
            
        }

        // 담당자 조회 모달창
        this.btn_char_search_onclick = function(obj,e)
        {
        	
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup2"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "depo::pop_char.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        // 대리인명 조회 모달창
        this.btn_depu_search_onclick = function(obj,e)
        {
        	/*
        	var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup3"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LEGAL_OFFICIAL_CHECK.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	*/				
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	
        	var newChild = new ChildFrame;
        	newChild.init("LEGAL_OFFICIAL_CHECK"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LEGAL_OFFICIAL_CHECK.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame() 
        					, {job:''}
        					, this
        					, "modal_callback");	
        }

        
        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	if(strID == "Popup1")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}		
        		this.modal_selectDepo(variant);
        	}
        	else if(strID == "Popup2")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		this.modal_selectChar(variant);
        	}
        	else if(strID == "LEGAL_OFFICIAL_CHECK")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		var varArr = variant.split('&');
        		var nameArr = varArr[1].split('=');
        		this.ds_depo.setColumn(0,'depositDepuName',nameArr[1]);
        	}
        }

        
        // 트랜잭션 콜백
        this.transaction_callback = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	if(nErrorCode < 0)
        	{
        		this.alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        	
        	if(sSvcId == "deposit_re_selectDepoView")
        	{
        		this.alert("조회완료");
        	}else if(sSvcId == "dsComCode")
        	{
        		this.gf_codeComListLoad("dsComCode2", "ds_court", "N", "", "", "transaction_callback", "A01"); // 공통코드(관할법원)조회
        	}else if(sSvcId == "saveDepoList")
        	{
        		
        		var str = this.ds_depo.getColumn(this.ds_depo.rowposition, "depositDepoAdmNo");
        		
        		if(this.gfn_IsNull(str))
        		{
        			this.edt_depo_adm_no.set_value(this.saveKey);
        			this.modal_selectDepo(this.saveKey);
        			this.alert("저장 완료");
        		}else
        		{
        			this.edt_depo_adm_no.set_value(str);
        			this.modal_selectDepo(str);
        			this.alert("수정 완료");		
        		}
        		
        	}else if(sSvcId == "deleteDepoList")
        	{
        		this.alert("삭제 완료");
        		this.btn_reset_onclick();
        	}
        }

        // 공탁번호 지정 후 자동조회
        this.modal_selectDepo = function(variant)
        {
        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
        	
        	this.ds_search.setColumn(0, "searchKeyword", variant);
        	
        	this.gfn_transaction(this,
        						"selectDepoView",
        						"depo/Depo/selectDepoView.do",
        						"ds_search=ds_search",
        						"ds_depo=ds_output",
        						"",
        						"transaction_callback"
        						);
        	
        }

        // 공탁담당자 조회 후 값 지정
        this.modal_selectChar = function(variant)
        {
        	var arrRtn = variant.split("|");
        	this.ds_depo.setColumn(0, "depositmgrName", arrRtn[0]);
        	if(this.gfn_IsNull(arrRtn[1]))
        	{
        		this.cb_keep_dept_code.value = null;
        	}else
        	{
        		this.ds_depo.setColumn(0, "depositmgrDeptCode", arrRtn[1]);
        	}
        	this.ds_depo.setColumn(0, "depositmgrId", arrRtn[2]);
        	this.ds_depo.setColumn(0, "depositmgrAsigDate", this.gfn_Today());
        }

        // 대리인명 조회 후 값 지정
        this.modal_selectMgr = function(variant)
        {
        	var arrRtn = variant.split("|");
        	this.ds_depo.setColumn(0, "depositDepuName", arrRtn[0]);
        }

        // 공탁 저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_IsNull(this.edt_depo_juri_cort.value)){
        			this.alert("관할법원을 선택해주세요.");
        			this.edt_depo_juri_cort.dropdown();
        			return;
        		}
        		else if(this.gfn_IsNull(this.edt_forc_exec_seq.value)){
        			this.alert("강제집행일련번호를 입력해주세요.");
        			this.edt_forc_exec_seq.setFocus();
        			return;
        		}
        		else if(this.gfn_IsNull(this.edt_depo_oth_name.value)){
        			this.alert("피공탁자를 입력해주세요.");
        			this.edt_depo_oth_name.setFocus();
        			return;
        		}
        		else if(this.gfn_IsNull(this.edt_depo_name.value)){
        			this.alert("공탁자를 입력해주세요.");
        			this.edt_depo_name.setFocus();
        			return;
        		}
        		else if(this.gfn_IsNull(this.edt_depu_name.value)){
        			this.alert("대리인을 입력해주세요.");
        			this.btn_depu_search_onclick();
        			return;
        		}
        		else if(this.gfn_IsNull(this.edt_depo_chg.value)){
        			this.alert("공탁금액을 입력해주세요.");
        			this.edt_depo_chg.setFocus();
        			return;
        		}
        		else if(this.gfn_IsNull(this.cb_depo_mgr_dept.value)){
        			this.alert("보관부서를 선택해주세요.");
        			this.cb_depo_mgr_dept.dropdown();
        			return;
        		}
        		else if(this.gfn_IsNull(this.cal_depo_Date.value)){
        			this.alert("공탁일자를 입력해주세요.");
        			this.cal_depo_Date.setFocus();
        			return;
        		}

        	var yn = confirm("저장하시겠습니까?");
        	
        	if(yn == true)
        	{
        		this.depo_transaction("saveDepoList");
        	}else
        	{
        		return;
        	}
        }

        // 공탁 저장/수정/삭제 시 공통트랜잭션 호출하는 메서드
        this.depo_transaction = function(sSvcid)
        {
        	var strSvcid = sSvcid;
        	var strController = "depo/Depo/dbAccessDepo.do";
        	
        	this.gfn_transaction(this,
        						strSvcid,
        						strController,
        						"ds_input=ds_depo:U",
        						"ds_depo=ds_output",
        						"",
        						"transaction_callback"
        						);
        }

        // 삭제 버튼 처리
        this.btn_del_onclick = function(obj,e)
        {
        	
        	var rtnValue = Iject.confirm("삭제 하시겠습니까?");
        	
        	if(rtnValue)
        	{
        		var nRow = this.ds_depo.rowposition;
        		this.ds_depo.deleteRow(nRow);
        		this.depo_transaction("deleteDepoList");
        	}
        }

        
        // 텍스트에어리어 글자수 표시
        this.txt_coll_rea_ontextchanged = function(obj,e)
        {
        	var strLength = this.txt_coll_rea.getLength();
        	this.Static01.set_text(strLength);
        }

        this.cb_keep_dept_code_onitemchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.deposit_re_onload, this);
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.subTitle_03.addEventHandler("onclick", this.sta_03_onclick, this);
            this.edt_depo_juri_cort.addEventHandler("onitemchanged", this.edt_depo_juri_cort_onitemchanged, this);
            this.btn_depo_search.addEventHandler("onclick", this.btn_depo_search_onclick, this);
            this.txt_coll_rea.addEventHandler("ontextchanged", this.txt_coll_rea_ontextchanged, this);
            this.edt_forc_exec_seq.addEventHandler("oneditclick", this.edt_forc_exec_seq_oneditclick, this);
            this.subTitle_27.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_char_search.addEventHandler("onclick", this.btn_char_search_onclick, this);
            this.subTitle_29.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_depu_search.addEventHandler("onclick", this.btn_depu_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);
            this.cb_keep_dept_code.addEventHandler("onitemchanged", this.cb_keep_dept_code_onitemchanged, this);

        };

        this.loadIncludeScript("deposit_re.xfdl");

       
    };
}
)();
