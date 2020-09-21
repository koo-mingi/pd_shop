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
                this.set_classname("deposit_re");
                this.set_titletext("공탁관리");
                this._setFormPosition(0,0,1024,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_depo", this);
            obj._setContents("<ColumnInfo><Column id=\"depositDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositJuriCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositForcExecSeq\" type=\"STRING\" size=\"256\"/><Column id=\"depositOthDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepuName\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositKeepDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoReleDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepchgCollDate\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollChg\" type=\"STRING\" size=\"256\"/><Column id=\"depositDepoCollRea\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mgr", this);
            obj._setContents("<ColumnInfo><Column id=\"depositmgrDepoAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrId\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"depositmgrAsigDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_depo_mgr_id", "absolute", "155", "256", "143", "19", null, null, this);
            obj.set_taborder("13");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "0.88%", "8", "98.24%", "50", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("cornflowerblue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_text("공탁관리");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "0.98%", "63", "98%", "35", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "1.66%", "68", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "1.56%", "68", "12.8%", "25", null, null, this);
            obj.set_text("공탁관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_adm_no", "absolute", "14.75%", "71", "17%", "19", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "21", "114", "197", "19", null, null, this);
            obj.set_text("공탁사항등록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "0.98%", "132", "97.95%", "84", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "1.56%", "137", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "1.56%", "161", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "1.56%", "137", "12.79%", "25", null, null, this);
            obj.set_text("관할법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "34.38%", "137", "13.67%", "25", null, null, this);
            obj.set_text("강제집행일련번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "34.38%", "161", "13.67%", "25", null, null, this);
            obj.set_text("대리인명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("edt_depo_juri_cort", "absolute", "14.65%", "140", "16.8%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("4");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");

            obj = new Static("sta_12", "absolute", "25", "368", "197", "19", null, null, this);
            obj.set_text("공탁금회수");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view02", "absolute", "0.98%", "386", "97.95%", "154", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Button("btn_depo_search", "absolute", "32.03%", "70", "52", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "67.68%", "137", "12.79%", "25", null, null, this);
            obj.set_text("피공탁자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "1.56%", "161", "12.79%", "25", null, null, this);
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

            obj = new Static("sta_10", "absolute", "1.66%", "391", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11", "absolute", "1.66%", "391", "12.7%", "25", null, null, this);
            obj.set_text("공탁금회수일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "1.66%", "415", "96.88%", "120", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "1.66%", "415", "12.7%", "120", null, null, this);
            obj.set_text("공탁회수사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_coll_rea", "absolute", "14.75%", "418", "83.11%", "113", null, null, this);
            obj.set_taborder("20");
            obj.set_scrollbars("fixedvert");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "34.77%", "143", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_forc_exec_seq", "absolute", "48.44%", "140", "16.8%", "19", null, null, this);
            obj.set_taborder("5");
            obj.set_maxlength("10");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "37.21%", "167", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "70.12%", "143", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "1.56%", "185", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "1.56%", "185", "12.79%", "25", null, null, this);
            obj.set_text("보관부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_keep_dept_code", "absolute", "14.65%", "188", "16.8%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_displaynulltext("선택");

            obj = new Static("sta_20", "absolute", "34.38%", "185", "13.67%", "25", null, null, this);
            obj.set_text("공탁일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_depo_Date", "absolute", "48.44%", "188", "16.8%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Static("sta_21", "absolute", "4.2%", "143", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_name", "absolute", "14.65%", "164", "16.89%", "19", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("10");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_22", "absolute", "4.69%", "167", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_23", "absolute", "4.2%", "191", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_24", "absolute", "37.21%", "191", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_25", "absolute", "67.68%", "161", "12.79%", "25", null, null, this);
            obj.set_text("공탁금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_26", "absolute", "70.12%", "167", "9", "12", null, null, this);
            obj.set_text("*");
            obj.style.set_color("red");
            obj.style.set_align("right top");
            obj.style.set_font("돋움,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27", "absolute", "21", "230", "197", "19", null, null, this);
            obj.set_text("공탁담당자");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view03", "absolute", "0.98%", "248", "97.95%", "35", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("sta_28", "absolute", "1.66%", "253", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_30", "absolute", "1.66%", "253", "12.7%", "25", null, null, this);
            obj.set_text("공탁담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_31", "absolute", "34.67%", "253", "13.48%", "25", null, null, this);
            obj.set_text("배정일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "67.97%", "253", "12.7%", "25", null, null, this);
            obj.set_text("담당자부서");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_char_search", "absolute", "27.93%", "255", "4.79%", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_mgr_name", "absolute", "14.75%", "256", "12.99%", "19", null, null, this);
            obj.set_taborder("24");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_depo_asig_date", "absolute", "48.54%", "256", "16.8%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Static("sta_29", "absolute", "25", "299", "197", "19", null, null, this);
            obj.set_text("공탁서불출");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view04", "absolute", "0.98%", "317", "97.95%", "35", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("lavenderblush");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32", "absolute", "1.66%", "322", "96.88%", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34", "absolute", "1.66%", "322", "12.7%", "25", null, null, this);
            obj.set_text("공탁불출일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depu_name", "absolute", "48.44%", "164", "11.82%", "19", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_depu_search", "absolute", "60.55%", "163", "4.59%", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_depo_rele_date", "absolute", "14.75%", "325", "16.02%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Calendar("cal_chg_coll_date", "absolute", "14.75%", "394", "16.02%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.style.set_dayfont("굴림,9");
            obj.style.set_font("굴림,9");

            obj = new Static("sta_14", "absolute", "34.67%", "391", "13.48%", "25", null, null, this);
            obj.set_text("공탁회수금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_notice", "absolute", "38.28%", "73", "370", "17", null, null, this);
            obj.set_text("* 신규등록이 아닌경우 공탁관리번호를 검색해주세요.");
            obj.style.set_color("red");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "87.21%", "551", "5.18%", "24", null, null, this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "93.07%", "551", "5.18%", "24", null, null, this);
            obj.set_taborder("22");
            obj.set_text("삭제");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", "92.19%", "70", "5.08%", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depo_oth_name", "absolute", "80.86%", "140", "15.63%", "19", null, null, this);
            obj.set_taborder("6");
            obj.set_maxlength("10");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_depo_mgr_dept", "absolute", "81.15%", "256", "15.63%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_displaynulltext("선택");

            obj = new MaskEdit("edt_coll_chg", "absolute", "48.54%", "394", "16.8%", "19", null, null, this);
            obj.set_taborder("19");
            obj.set_mask("###,###,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_depo_chg", "absolute", "80.86%", "164", "15.63%", "18", null, null, this);
            obj.set_taborder("10");
            obj.set_mask("###,###,###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_no.addEventHandler("onclick", this.sta_no_onclick, this);
            this.sta_03.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_depo_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.edt_forc_exec_seq.addEventHandler("oneditclick", this.edt_forc_exec_seq_oneditclick, this);
            this.sta_27.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_char_search.addEventHandler("onclick", this.btn_char_search_onclick, this);
            this.sta_29.addEventHandler("onclick", this.sta_03_onclick, this);
            this.btn_depu_search.addEventHandler("onclick", this.btn_depu_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);

        };

        this.loadIncludeScript("Pattern_08.xfdl");

       
    };
}
)();
