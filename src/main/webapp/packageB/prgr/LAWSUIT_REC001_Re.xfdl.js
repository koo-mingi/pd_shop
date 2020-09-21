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
                this.set_name("LAWSUIT_REC001_Re");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_simCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cortCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prgrCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sepCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefLawConcSepcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_reconcil", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilSeq\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilReqChg\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilAppvChg\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilMgrOpin\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilAppvDate\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilExptjudgChg\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilAppvId\" type=\"STRING\" size=\"256\"/><Column id=\"reconcilAppvName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "14", "72", "996", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button_reload", "absolute", "953", "72", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_sim", "absolute", "458", "74", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_simCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");

            obj = new Static("Static02", "absolute", "346", "72", "110", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("  심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "289", "74", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_lawsuitAdmNo", "absolute", "146", "74", "141", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "72", "130", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("  소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "14", "182", "996", "25", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "14", "182", "130", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("  신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_caseNo", "absolute", "146", "184", "198", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "346", "182", "130", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("  판사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "678", "182", "130", "25", null, null, this);
            obj.set_taborder("22");
            obj.set_text("  상대담당자명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_ctpmgrName", "absolute", "810", "184", "198", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "14", "122", "100", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("소송 기본 사항");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", "157", "996", "25", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "14", "157", "130", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("  소송진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "346", "157", "130", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("  당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "678", "157", "130", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("  수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_judId", "absolute", "478", "184", "198", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_prgrCode", "absolute", "146", "159", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_prgrCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Combo("Combo_sepCode", "absolute", "478", "159", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_sepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");

            obj = new Combo("Combo_cortCode", "absolute", "810", "159", "198", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_cortCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");

            obj = new Static("Static12", "absolute", "14", "207", "996", "50", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "14", "207", "130", "50", null, null, this);
            obj.set_taborder("25");
            obj.set_text("  쟁점사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_issuPoin", "absolute", "146", "209", "862", "46", null, null, this);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "14", "312", "996", "115", null, null, this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_pladef");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"등록번호\"/><Cell col=\"4\" text=\"청구소가\"/><Cell col=\"5\" text=\"주요연락처번호\"/><Cell col=\"6\" text=\"추가연락처번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:pladefSeq\"/><Cell col=\"2\" text=\"bind:pladefName\"/><Cell col=\"3\" text=\"bind:pladefRegNo\"/><Cell col=\"4\" text=\"bind:pladefClamVol\"/><Cell col=\"5\" text=\"bind:pladefMainTel\"/><Cell col=\"6\" text=\"bind:pladefAddTel\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "14", "282", "100", "20", null, null, this);
            obj.set_taborder("27");
            obj.set_text("원피고 목록");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "14", "452", "140", "25", null, null, this);
            obj.set_taborder("29");
            obj.set_text("재판외 화해 상세내역");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid_reconcil", "absolute", "14", "487", "245", "125", null, null, this);
            obj.set_taborder("30");
            obj.set_binddataset("ds_reconcil");
            obj.set_autofittype("col");
            obj.style.set_border("2 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"승인일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:reconcilAppvDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "262", "487", "747", "25", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "262", "512", "747", "75", null, null, this);
            obj.set_taborder("40");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "262", "512", "110", "75", null, null, this);
            obj.set_taborder("41");
            obj.set_text("  담당자 의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_mgrOpin", "absolute", "374", "514", "633", "71", null, null, this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "262", "487", "110", "25", null, null, this);
            obj.set_taborder("34");
            obj.set_text("  예상판결액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "511", "487", "110", "25", null, null, this);
            obj.set_taborder("36");
            obj.set_text("  승인금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_appvChg", "absolute", "623", "489", "135", "21", null, null, this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Button("Button_del", "absolute", "955", "458", "55", "24", null, null, this);
            obj.set_taborder("32");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button_addRow", "absolute", "895", "458", "55", "24", null, null, this);
            obj.set_taborder("31");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "262", "587", "747", "25", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_appvName", "absolute", "623", "589", "135", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "511", "587", "110", "25", null, null, this);
            obj.set_taborder("46");
            obj.set_text("  최종승인자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_appvDate", "absolute", "374", "589", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");

            obj = new Static("Static25", "absolute", "262", "587", "110", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("  승인일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_appvSearch", "absolute", "760", "588", "55", "23", null, null, this);
            obj.set_taborder("48");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_reqChg", "absolute", "872", "489", "135", "21", null, null, this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "760", "487", "110", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("  요구금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_exptJudgChg", "absolute", "374", "489", "135", "21", null, null, this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "14", "637", "100", "20", null, null, this);
            obj.set_taborder("52");
            obj.set_text("결제 진행 상태");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment01", "absolute", "14", "667", "120", "25", null, null, this);
            obj.set_taborder("53");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment02", "absolute", "14", "692", "120", "25", null, null, this);
            obj.set_taborder("56");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment03", "absolute", "134", "667", "120", "25", null, null, this);
            obj.set_taborder("54");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment04", "absolute", "134", "692", "120", "25", null, null, this);
            obj.set_taborder("57");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment05", "absolute", "254", "667", "120", "25", null, null, this);
            obj.set_taborder("55");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment06", "absolute", "254", "692", "120", "25", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button_confirm", "absolute", "834", "637", "55", "24", null, null, this);
            obj.set_taborder("49");
            obj.set_text("결제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button_save", "absolute", "894", "637", "55", "24", null, null, this);
            obj.set_taborder("50");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("Button_close", "absolute", "954", "637", "55", "24", null, null, this);
            obj.set_taborder("51");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("59");
            obj.set_text("  재판외 화해관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","Combo_prgrCode","value","ds_lawsuit","instAdmPrgrCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Combo_sepCode","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Combo_cortCode","value","ds_lawsuit","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Edit_judId","value","ds_lawsuit","instAdmJudId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Edit_issuPoin","value","ds_lawsuit","instAdmIssuPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Edit_reqChg","value","ds_reconcil","reconcilReqChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Edit_appvChg","value","ds_reconcil","reconcilAppvChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit_mgrOpin","value","ds_reconcil","reconcilMgrOpin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Calendar_appvDate","value","ds_reconcil","reconcilAppvDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Edit_exptJudgChg","value","ds_reconcil","reconcilExptjudgChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Edit_ctpmgrName","value","ds_lawsuit","instAdmCtpmgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Edit_caseNo","value","ds_lawsuit","instAdmCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Edit_appvName","value","ds_reconcil","reconcilAppvName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edit_lawsuitAdmNo","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Combo_sim","value","ds_lawsuit","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_REC001_Re.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_REC001_Re.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        //소송관리번호
        var lawsuitAdmNo="";
        //심급코드
        var instAdmCode="";
        //원피고일련번호
        var pladefSeq="";
        //
        var pladefSepCode="";

        this.LAWSUIT_REC_onload = function(obj,e)
        {
        	this.setCode();
        	//초기 버튼 실행기능 막기.
        	this.onBtnFunc(false);
        }

        this.onBtnFunc = function(booleanBtn){
        	if(booleanBtn==true){
        		this.Button_del.set_enable(true);
        		this.Button_confirm.set_enable(true);
        		this.Button_save.set_enable(true);
        		this.Button_addRow.set_enable(true);
        		this.Button_appvSearch.set_enable(true);
        	}
        	else{
        		this.Button_del.set_enable(false);
        		this.Button_confirm.set_enable(false);
        		this.Button_save.set_enable(false);
        		this.Button_addRow.set_enable(false);
        		this.Button_appvSearch.set_enable(false);
        	}
        }

        //코드 호출 함수
        this.setCode = function()
        {
        	this.gf_codeComListLoad("ds_prgrCode",  "ds_prgrCode",   "N", "", "", "fn_Callback", "G02"); // 소송진행상태코드
        	this.gf_codeComListLoad("ds_sepCode",  "ds_sepCode",   "N", "", "", "fn_Callback", "H02"); // 당사원피고코드
        	this.gf_codeComListLoad("ds_cortCode",  "ds_cortCode",   "N", "", "", "fn_Callback", "A01");// 수행법원코드
        }

        //소송관리번호 검색
        this.Button_numSearch_onclick = function(obj,e)
        {
        	
        	 var lawSearchNo = "";	//소송관리번호 검색값
        	 
        	 //모달 창이 나올 좌표 값을 설정한다
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 //새로운 모달 창을 띄우기 위한 객체 선언
        	 var newChild = new ChildFrame;
        	 
        	 //새로운 플러그인(모달)을 생성한 후 초기화 시키는 메소드
        	 //매개변수 : '플러그인명', 좌표형태, 생성위치x좌표, 생성위치y좌표,
        	 //				sizeWidth, sizeHeight, 포지션 좌표x, 포지션 y좌표
        	 newChild.init("SearchModal"
        					, "absolute", nLeft, nTop, 400, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        	//showModal 함수를 호출 했을 때 ChildFrame을 띄울 위치를 지정하는 메소드
        	newChild.set_openalign("center middle");
        	//드래그로 이동 할 수 있는 영역 설정
        	newChild.set_dragmovetype("all");
        	//getOwnerFrame():현재 폼이 갖고 있는 프레임을 가져오는 메소드
        	//showModal매개변수 : ChildFrame의 ID, 부모프레임, 
        	//					모달로 띄운 ChildFrame에 추가될 변수리스트{변수명:변수값 , 변수명:변수값} 형식으로 입력,
        	//					opener가 될 Form 오브젝트(default : objParentFrame 에 속하는 Form 오브젝트)
        	//					모달이 닫힐 때 호출 될 콜백함수
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");	
        }

        //모달 콜백
        this.modal_callback = function(modalId,variable){
        	
        	if(modalId=="SearchModal"){
        		
        		//모달에서 검색을 실행하고 닫으면 변수에 소송관리번호+심급을 기록하도록 설계되어 있다.
        		//현재 필요한 내용은 소송관리번호와 심급 각각 따로 필요하기에 substr을 통하여 필요한 내용을 추출하도록 한다.
        		//심급의 내용이 없을 경우도 있기에 if문을 사용한다.
        		if(variable.length==13){
        			instAdmCode = variable.substr(10,3);
        		}
        		lawsuitAdmNo = variable.substr(0,10);
        		
        		trace(lawsuitAdmNo);
        		trace(instAdmCode);
        		
        		var newRow = this.ds_search.addRow();
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        		
        		
        		this.getSimInfo();
        		this.getLawsuitInfo();
        		this.getPladefInfo();

        		this.getReconcilInfo();
        		this.onBtnFunc(true);
        		
        	}
        	
        	if(modalId == "aprvSearchModal")
        	{
        		//리턴되는 값이 null이 아닐 경우 실행
        		if (this.gfn_IsNull(variable)==false){
        			
        // 				v_RtnVal[0] = this.ds_mgr.getColumn(this.ds_mgr.rowposition, "insaName");
        // 				v_RtnVal[1] = this.ds_mgr.getColumn(this.ds_mgr.rowposition, "insaDeptCode");
        // 				v_RtnVal[2] = this.ds_mgr.getColumn(this.ds_mgr.rowposition, "insaSabun");
        // 				
        // 				var arrMgr = v_RtnVal[0] + "|" + v_RtnVal[1] + "|" + v_RtnVal[2];
        //				승인자서치에서 값을 이렇게 리턴시킨다. 
        			
        			var reconcilAppv = variable.split("|");	//리턴 값을 '|' 기준으로 나눈다. 
        			var reconcilAppvId = reconcilAppv[1];	//1번지에는 AppvId
        			var reconcilAppvName = reconcilAppv[0];	//0번지에는 AppvName이 저장되어 있음
        			
        			if(reconcilAppvName != null) {
        				//승인자 란에 해당 이름 입력시킨다.
        				this.Edit_appvName.set_value(reconcilAppvName);
        				
        				var thisRow = this.ds_reconcil.rowposition;
        				this.ds_reconcil.setColumn(thisRow,"reconcilAppvName" ,reconcilAppvName);
        				this.ds_reconcil.setColumn(thisRow,"reconcilAppvId",reconcilAppvId);					
        			}
        			else {
        				return false;
        			}	
        		}	
        	}
        	
        }

        
        //심급 조회
        this.getSimInfo = function(){
        	trace("======================심급조회======================");
        	this.gfn_transaction(this,
        			  "getSimInfo",
        			  "mediation/getSimInfo.do",
        			  "ds_search=ds_search",
        			  "ds_simCode=ds_sim",
        			  "",
        			  "fn_callback");
        }

        
        //Lawsuit조회
        this.getLawsuitInfo = function(){
        	trace("================lawsuit조회=======================");

        	this.gfn_transaction(this,
        			  "getLawsuitInfo",
        			  "lawsuit_rec/getLawsuitRecSelect.do",
        			  "ds_search=ds_search",
        			  "ds_lawsuit=ds_lawsuit",
        			  "",
        			  "fn_callback");			  
        }

        
        //pladef조회
        this.getPladefInfo = function(){
        	
        	trace("===========================pladef조회==============================");
        	
        	this.gfn_transaction(this,
        			  "getPladefInfo",
        			  "lawsuit_rec/getLawsuitRecPladefSelect.do",
        			  "ds_search=ds_search",
        			  "ds_pladef=ds_pladef",
        			  "",
        			  "fn_callback");
        	
        	pladefSeq = this.ds_pladef.getColumn(0,"pladefSeq");
        	
        	
        }

        
        //RECONCIL조회
        this.getReconcilInfo = function(){
        	trace("======================RECONCIL조회======================");
        	pladefSepCode = this.ds_pladef.getColumn(0,"pladefSepCode");
        	trace("!@#!@#!@#!@#!@#!@#!@#"+pladefSepCode);
        	this.ds_search.setColumn(0,"pladefSeq",pladefSeq);
        	this.ds_search.setColumn(0,"pladefSepCode",pladefSepCode);
        	
        	this.gfn_transaction(this,
        			  "getReconcilInfo",
        			  "lawsuit_rec/getLawsuitRecDetailSelect.do",
        			  "ds_search=ds_search",
        			  "ds_reconcil=ds_reconcil",
        			  "",
        			  "fn_callback");	  	
        }

        //그리드의 선택한 셀이 변경되었을 시 발생하는 이벤트
        this.Grid00_onselectchanged = function(obj,e)
        {
        	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!그리드 이벤트 발생!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        	
        	var thisRow = this.ds_pladef.rowposition;
        	pladefSeq=this.ds_pladef.getColumn(thisRow,"pladefSeq");
        	this.ds_search.setColumn(0,"pladefSeq",pladefSeq);
        	
        	this.getReconcilInfo();

        }

        //심급 콤보박스 변화가 있을 시 재조회
        this.Combo_sim_onitemchanged = function(obj,e)
        {
        		
        	this.ds_reconcil.clear();
        	
        	instAdmCode = this.Combo_sim.value;
        	trace("심급번호 : " + instAdmCode);

        	this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        	
        	this.getSimInfo();
        	this.getPladefInfo();
        	this.getLawsuitInfo();
        	this.getReconcilInfo();
        	this.onBtnFunc(true);
        }

        //초기화 버튼
        this.Button_reload_onclick = function(obj,e)
        {
        	trace("초기화~");
        	
        	//현재 페이지를 새로고침하여 초기화
        	this.reload();
        }

        //추가 버튼
        this.Button_addRow_onclick = function(obj,e)
        {
        	if(this.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다");
        		this.onBtnFunc(false);
        		return false;
        	}
        	else if(this.ds_pladef.getRowCount()<1){
        		alert("화해 할 원피고가 없습니다");
        		return false;
        	}

        	var pladefName = this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefName");
        	
        	var addConfirm = application.confirm(pladefName+"님의 화해 내역을 작성하시겠습니다?", "확인");
        	
        	if(addConfirm){
        		this.ds_reconcil.addRow();
        	}
        	else{
        		return false;
        	}
        }

        //닫기버튼
        this.Button_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //저장버튼
        this.Button_save_onclick = function(obj,e)
        {
        	if(this.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다");
        		this.onBtnFunc(false);
        		return false;
        	}	
        	else{	
        		var saveConfirm=application.confirm("해당 데이터를 저장하시겠습니까?", "확인");
        		
        		if(saveConfirm){
        			if(this.gfn_IsNull(this.Edit_mgrOpin.value)){
        				alert("담당자 의견은 필수 사항입니다.");
        				this.Edit_mgrOpin.setFocus();	
        			}else if(this.gfn_IsNull(this.Calendar_appvDate.value)) {
        				alert("승인 날짜는 필수 사항입니다.");
        				this.Calendar_appvDate.setFocus();	
        			}else{
        				
        				var thisRow=this.ds_pladef.rowposition;
        				
        				var pladefSepCode = this.ds_pladef.getColumn(thisRow, "pladefSepCode");
        				var pladefSeq = this.ds_pladef.getColumn(thisRow, "pladefSeq");

        				var strParam = "lawsuitAdmNo=" + lawsuitAdmNo + " instAdmCode=" + instAdmCode 
        						+ " pladefSepCode=" + pladefSepCode + " pladefSeq=" + pladefSeq;				
        				
        				this.gfn_transaction(this
        								,"reconcilSave"
        								,"lawsuit_rec/createReconcil.do"
        								,"ds_reconcil=ds_reconcil:U"
        								,""
        								,strParam
        								,"fn_Callback");
        			}
        		}
        	}
        }

        this.Button_del_onclick = function(obj,e)
        {
        	if(this.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다");
        		this.onBtnFunc(false);
        		return false;
        	}
        	else {
        		var delRow = this.ds_reconcil.rowposition;
        		
        		var delConfirm=application.confirm("해당 데이터를 삭제 하시겠습니까?", "경고");
        		
        		var Edit_mgrOpin = this.Edit_mgrOpin.value;
        		var Calendar_appvDate = this.Calendar_appvDate.value;
        		
        		if(delConfirm){
        			this.ds_reconcil.deleteRow(delRow);		
        				
        			var thisRow=this.ds_pladef.rowposition;

        			var pladefSepCode = this.ds_pladef.getColumn(thisRow, "pladefSepCode");
        			var pladefSeq = this.ds_pladef.getColumn(thisRow, "pladefSeq");

        			var strParam = "lawsuitAdmNo=" + lawsuitAdmNo + " instAdmCode=" + instAdmCode 
        						+ " pladefSepCode=" + pladefSepCode + " pladefSeq=" + pladefSeq;
        			
        			//저장되지 않았던 내용을 삭제 시 트랜잭션을 실행하지 않음
        			//트랜잭션 오류방지	
        			if(Edit_mgrOpin != null || Calendar_appvDate != null){
        					this.gfn_transaction(this
        						,"del_reconcil"
        						,"lawsuit_rec/createReconcil.do"
        						,"ds_reconcil=ds_reconcil:U"
        						,""
        						,strParam
        						,"fn_Callback");	
        			}
        		}	
        	}
        }

        this.Button_appvSearch_onclick = function(obj,e)
        {
        		
        	if( this.ds_pladef.rowcount < 1){   
               alert("작성할 원피고가 없습니다.");
               return false;
        	}
        		
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	 
        	var newChild = new ChildFrame;
        	newChild.init("aprvSearchModal"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "depo::pop_char.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_REC_onload, this);
            this.Button_reload.addEventHandler("onclick", this.Button_reload_onclick, this);
            this.Combo_sim.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Grid00.addEventHandler("onselectchanged", this.Grid00_onselectchanged, this);
            this.Button_del.addEventHandler("onclick", this.Button_del_onclick, this);
            this.Button_addRow.addEventHandler("onclick", this.Button_addRow_onclick, this);
            this.Button_appvSearch.addEventHandler("onclick", this.Button_appvSearch_onclick, this);
            this.Button_save.addEventHandler("onclick", this.Button_save_onclick, this);
            this.Button_close.addEventHandler("onclick", this.Button_close_onclick, this);

        };

        this.loadIncludeScript("LAWSUIT_REC001_Re.xfdl");

       
    };
}
)();
