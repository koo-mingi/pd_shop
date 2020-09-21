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
                this.set_name("MEDIATION001_Re");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pladef", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"INT\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"INT\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefLawConcSepcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mediation", this);
            obj._setContents("<ColumnInfo><Column id=\"mediationSeq\" type=\"INT\" size=\"256\"/><Column id=\"mediationWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"mediationChg\" type=\"INT\" size=\"256\"/><Column id=\"mediationCont\" type=\"STRING\" size=\"2000\"/><Column id=\"mediationRefPoin\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuChg\" type=\"INT\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sim", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_prgrCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sepCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cortCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "7", "4", null, "68", "6", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "14", "73", "1000", "28", null, null, this);
            obj.set_taborder("1");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "996", "25", null, null, this.Div01);
            obj.set_taborder("0");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "130", "25", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_text("  소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "332", "0", "130", "25", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_text("  심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("edit_lawsuitAdmNo", "absolute", "132", "2", "141", "21", null, null, this.Div01);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button_numSearch", "absolute", "275", "1", "55", "23", null, null, this.Div01);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "939", "1", "55", "23", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("Combo_sim", "absolute", "464", "2", "135", "21", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_sim");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");

            obj = new Div("Div02", "absolute", "14", "157", "1000", "55", null, null, this);
            obj.set_taborder("2");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "996", "25", null, null, this.Div02);
            obj.set_taborder("7");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "130", "25", null, null, this.Div02);
            obj.set_taborder("8");
            obj.set_text("  소송진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "332", "0", "130", "25", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_text("  당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "25", "996", "25", null, null, this.Div02);
            obj.set_taborder("12");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit_issuChg", "absolute", "464", "27", "198", "21", null, null, this.Div02);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "332", "25", "130", "25", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_text("  쟁점금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit_caseNo", "absolute", "132", "27", "198", "21", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "25", "130", "25", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("  소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "664", "25", "130", "25", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("  상대담당자명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit_ctpmgrName", "absolute", "796", "27", "198", "21", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "664", "0", "130", "25", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_text("  수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo_prgrCode", "absolute", "132", "2", "198", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_prgrCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj = new Combo("Combo_sepCode", "absolute", "464", "2", "198", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@ds_sepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj = new Combo("Combo_cortCode", "absolute", "796", "2", "198", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@ds_cortCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");

            obj = new Div("Div03", "absolute", "14", "267", "1000", "125", null, null, this);
            obj.set_taborder("3");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "0", "996", "120", null, null, this.Div03);
            obj.set_taborder("0");
            obj.style.set_border("2 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff");
            obj.set_binddataset("ds_pladef");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"등록번호\"/><Cell col=\"4\" text=\"청구소가\"/><Cell col=\"5\" text=\"주요연락처번호\"/><Cell col=\"6\" text=\"추가연락처번호\"/><Cell col=\"7\" text=\"소송종결구분코드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:pladefSeq\"/><Cell col=\"2\" text=\"bind:pladefName\"/><Cell col=\"3\" text=\"bind:pladefRegNo\"/><Cell col=\"4\" text=\"bind:pladefClamVol\"/><Cell col=\"5\" text=\"bind:pladefMainTel\"/><Cell col=\"6\" text=\"bind:pladefAddTel\"/><Cell col=\"7\" text=\"bind:pladefLawConcSepcode\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "14", "417", "1010", "188", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid_mediation", "absolute", "0", "29", "323", "150", null, null, this.Div04);
            obj.set_taborder("1");
            obj.style.set_border("2 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff");
            obj.set_binddataset("ds_mediation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:mediationWritDate\"/></Band></Format></Formats>");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "338", "29", "664", "25", null, null, this.Div04);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "338", "54", "664", "75", null, null, this.Div04);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "338", "129", "664", "50", null, null, this.Div04);
            obj.set_taborder("4");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "331", "29", "130", "25", null, null, this.Div04);
            obj.set_taborder("5");
            obj.set_text("  작성일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "663", "29", "130", "25", null, null, this.Div04);
            obj.set_taborder("6");
            obj.set_text("  조정금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "331", "54", "130", "75", null, null, this.Div04);
            obj.set_taborder("7");
            obj.set_text("  조정내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "331", "129", "130", "50", null, null, this.Div04);
            obj.set_taborder("8");
            obj.set_text("기타조정안 참고사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Calendar("Calendar_wrtieDate", "absolute", "463", "31", "198", "21", null, null, this.Div04);
            this.Div04.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj = new Edit("Edit_mediationChg", "absolute", "795", "31", "141", "21", null, null, this.Div04);
            obj.set_taborder("10");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "938", "31", "55", "21", null, null, this.Div04);
            obj.set_taborder("11");
            obj.set_text("(원)");
            obj.style.set_align("center");
            this.Div04.addChild(obj.name, obj);
            obj = new Edit("Edit_mediationCont", "absolute", "463", "56", "536", "71", null, null, this.Div04);
            obj.set_taborder("12");
            this.Div04.addChild(obj.name, obj);
            obj = new Edit("Edit_refPoin", "absolute", "463", "131", "536", "46", null, null, this.Div04);
            obj.set_taborder("13");
            this.Div04.addChild(obj.name, obj);
            obj = new Button("Button_addRow", "absolute", "887", "0", "55", "24", null, null, this.Div04);
            obj.set_taborder("14");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div04.addChild(obj.name, obj);
            obj = new Button("Button_del", "absolute", "947", "0", "55", "24", null, null, this.Div04);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "14", "625", "1010", "101", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Static("Static_payment01", "absolute", "0", "35", "120", "25", null, null, this.Div05);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static_payment03", "absolute", "120", "35", "120", "25", null, null, this.Div05);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static_payment05", "absolute", "240", "35", "120", "25", null, null, this.Div05);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static_payment02", "absolute", "0", "60", "120", "25", null, null, this.Div05);
            obj.set_taborder("4");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static_payment04", "absolute", "120", "60", "120", "25", null, null, this.Div05);
            obj.set_taborder("5");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static_payment06", "absolute", "240", "60", "120", "25", null, null, this.Div05);
            obj.set_taborder("6");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("Button_confirm", "absolute", "827", "9", "55", "24", null, null, this.Div05);
            obj.set_taborder("7");
            obj.set_text("결제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("Button_save", "absolute", "887", "9", "55", "24", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("Button_close", "absolute", "947", "9", "55", "24", null, null, this.Div05);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "14", "8", "996", "50", null, null, this);
            obj.set_taborder("6");
            obj.set_text("  조정안 관리");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.37%", "122", null, "25", "86.23%", null, this);
            obj.set_taborder("7");
            obj.set_text("소송기본사항");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "232", "100", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("원피고 목록");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "14", "412", "100", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("조정안 세부사항");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "16", "622", "100", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("결제 진행 상태");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1011, 68, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 28, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.style.set_border("0 none #808080ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 55, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_border("0 none #808080ff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 125, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_border("0 none #808080ff");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 188, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 982, 101, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","Div02.Combo_prgrCode","value","ds_lawsuit","instAdmPrgrCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div02.Combo_cortCode","value","ds_lawsuit","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div02.Edit_caseNo","value","ds_lawsuit","instAdmCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div02.Edit_issuChg","value","ds_lawsuit","instAdmIssuChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div02.Edit_ctpmgrName","value","ds_lawsuit","instAdmCtpmgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div04.Calendar_wrtieDate","value","ds_mediation","mediationWritDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div04.Edit_mediationChg","value","ds_mediation","mediationChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div04.Edit_mediationCont","value","ds_mediation","mediationCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div04.Edit_refPoin","value","ds_mediation","mediationRefPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div02.Combo_sepCode","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div01.Combo_sim","value","ds_lawsuit","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.edit_lawsuitAdmNo","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MEDIATION001_Re.xfdl", "Lib::common.xjs");
        this.registerScript("MEDIATION001_Re.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        //전역변수 선언

        //소송관리번호
        var lawsuitAdmNo="";
        //심급코드
        var instAdmCode="";
        //원피고일련번호
        var pladefSeq="";

        this.MEDIATION_onload = function(obj,e)
        {
        	//초기 버튼 실행기능 막기.
        	this.onBtnFunc(false);

        	this.setCode();
        }

        this.onBtnFunc = function(booleanBtn){
        	if(booleanBtn==true){
        		this.Div04.Button_del.set_enable(true);
        		this.Div05.Button_confirm.set_enable(true);
        		this.Div05.Button_save.set_enable(true);
        		this.Div04.Button_addRow.set_enable(true);
        	}
        	else{
        		this.Div04.Button_del.set_enable(false);
        		this.Div05.Button_confirm.set_enable(false);
        		this.Div05.Button_save.set_enable(false);
        		this.Div04.Button_addRow.set_enable(false);
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
        this.Div01_Button_numSearch_onclick = function(obj,e)
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
        	 newChild.init("Search"
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
        	
         	this.getPladefInfo();
         	this.getLawsuitInfo();
        	this.getSimInfo();
        	this.getMediationInfo();
        	this.onBtnFunc(true);
        }

        
        //초기화
        this.Div01_Button_reset_onclick = function(obj,e)
        {
        	trace("초기화~");
        	
        	//현재 페이지를 새로고침하여 초기화
        	this.reload();
        }

        
        //pladef조회
        this.getPladefInfo = function(){
        	
        	trace("===========================pladef조회==============================");
        	
        	this.gfn_transaction(this,
        			  "getPladefInfo",
        			  "pladef/pladefSelect.do",
        			  "ds_search=ds_search",
        			  "ds_pladef=ds_output",
        			  "",
        			  "fn_callback");
        			  
        	pladefSeq = this.ds_pladef.getColumn(0,"pladefSeq");
        	this.ds_search.setColumn(0,"pladefSeq",pladefSeq);
        }

        //Lawsuit조회
        this.getLawsuitInfo = function(){
        	trace("================lawsuit조회=======================");

        	this.gfn_transaction(this,
        			  "getLawsuitInfo",
        			  "mediation/mediationSelect.do",
        			  "ds_search=ds_search",
        			  "ds_lawsuit=ds_lawsuit",
        			  "",
        			  "fn_callback");			  
        }

        //심급 조회
        this.getSimInfo = function(){
        	trace("======================심급조회======================");
        	this.gfn_transaction(this,
        			  "getSimInfo",
        			  "mediation/getSimInfo.do",
        			  "ds_search=ds_search",
        			  "ds_sim=ds_sim",
        			  "",
        			  "fn_callback");
        }

        //Mediation조회
        this.getMediationInfo = function(){
        	trace("======================Mediation조회======================");
        	
        	this.ds_search.setColumn(0,"pladefSeq",pladefSeq);
        	
        	trace(this.ds_search.saveXML());
        	this.gfn_transaction(this,
        			  "getMediationInfo",
        			  "bottom/bottomSelect.do",
        			  "ds_search=ds_search",
        			  "ds_mediation=ds_mediation",
        			  "",
        			  "fn_callback");	  	
        }

        //심급 콤보박스 변화 시 재조회
        this.Div01_Combo_sim_onitemchanged = function(obj,e)
        {
        	instAdmCode = this.Div01.Combo_sim.value;
        	trace("심급번호 : " + instAdmCode);
        	
        	this.ds_mediation.clear();

        	this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        	
        	this.getPladefInfo();
        	this.getLawsuitInfo();
        	this.getSimInfo();
        	this.getMediationInfo();
        	this.onBtnFunc(true);
        }

        
        //그리드의 선택한 셀이 변경되었을 시 발생하는 이벤트
        this.Div03_Grid00_onselectchanged = function(obj,e)
        {
        	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!그리드 이벤트 발생!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        	
        	var ds_pladefCnt = this.ds_pladef.getColCount();
        	
        	trace(this.ds_mediation.saveXML());
        	var thisRow = this.ds_pladef.rowposition;
        	pladefSeq=this.ds_pladef.getColumn(thisRow,"pladefSeq");
        	this.ds_search.setColumn(0,"pladefSeq",pladefSeq);
        	
        	this.getMediationInfo();

        }

        //콜백함수!
        this.fn_callback = function(svcId,errCode,errMsg)
        {

        	if(this.errCode < 0)
        	{
        		Iject.alert(this.errMsg);			
        		return;
        	}
        	
        }

        
        this.Div04_Button_addRow_onclick = function(obj,e)
        {
        	
        	if(this.Div02.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다");
        		this.onBtnFunc(false);
        		return false;
        	}
        	else if(this.ds_pladef.getRowCount()<1){
        		alert("조정 할 원피고가 없습니다");
        		return false;
        	}

        	var pladefName = this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefName");
        	
        	var addConfirm = application.confirm(pladefName+"님의 조정안을 작성하시겠습니다?", "확인");
        	
        	if(addConfirm){
        		this.ds_mediation.addRow();
        	}
        	else{
        		return false;
        	}
        	
        }

        
        this.Div04_Button_del_onclick = function(obj,e)
        {
        	if(this.Div02.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다");
        		this.onBtnFunc(false);
        		return false;
        	}
        	else {
        		var delRow = this.ds_mediation.rowposition;
        		
        		var delConfirm=application.confirm("해당 데이터를 삭제 하시겠습니까?", "경고");
        		
        		var mediationChg = this.Div04.Edit_mediationChg.value;
        		var mediationCont = this.Div04.Edit_mediationCont.value;
        		
        		if(delConfirm){
        			this.ds_mediation.deleteRow(delRow);
        			
        			var thisRow=this.ds_pladef.rowposition;

        			var pladefSepCode = this.ds_pladef.getColumn(thisRow, "pladefSepCode");
        			var pladefSeq = this.ds_pladef.getColumn(thisRow, "pladefSeq");

        			var strParam = "lawsuitAdmNo=" + lawsuitAdmNo + " instAdmCode=" + instAdmCode 
        						+ " pladefSepCode=" + pladefSepCode + " pladefSeq=" + pladefSeq;
        			
        			//저장되지 않았던 내용을 삭제 시 트랜잭션을 실행하지 않음
        			//트랜잭션 오류방지		
        			if(mediationChg != null || mediationCont != null){
        					this.gfn_transaction(this
        						,"del_Mediation"
        						,"mediation/mediationSave.do"
        						,"ds_input=ds_mediation:U"
        						,""
        						,strParam
        						,"fn_Callback");	
        			}
        		}	
        	}
        }

        
        this.Div05_Button_save_onclick = function(obj,e)
        {
        	
        	if(this.Div02.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다");
        		this.onBtnFunc(false);
        		return false;
        	}	
        	else{	
        		var saveConfirm=application.confirm("해당 데이터를 저장하시겠습니까?", "확인");
        		
        		if(saveConfirm){
        			if(this.gfn_IsNull(this.Div04.Edit_mediationCont.value)){
        			
        				alert("조정내용은 필수 사항입니다.");
        				this.Edit_mediationCont.setFocus();
        				
        			}
        			else{
        				
        				var thisRow=this.ds_pladef.rowposition;
        				
        				var pladefSepCode = this.ds_pladef.getColumn(thisRow, "pladefSepCode");
        				var pladefSeq = this.ds_pladef.getColumn(thisRow, "pladefSeq");

        				var strParam = "lawsuitAdmNo=" + lawsuitAdmNo + " instAdmCode=" + instAdmCode 
        						+ " pladefSepCode=" + pladefSepCode + " pladefSeq=" + pladefSeq;
        				
        				this.gfn_transaction(this
        								,"mediationSave"
        								,"mediation/mediationSave.do"
        								,"ds_input=ds_mediation:U"
        								,""
        								,strParam
        								,"fn_Callback");
        			}
        		}
        	}
        }

        this.Div05_Button_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.MEDIATION_onload, this);
            this.Div01.Button_numSearch.addEventHandler("onclick", this.Div01_Button_numSearch_onclick, this);
            this.Div01.Button01.addEventHandler("onclick", this.Div01_Button_reset_onclick, this);
            this.Div01.Combo_sim.addEventHandler("onitemchanged", this.Div01_Combo_sim_onitemchanged, this);
            this.Div03.Grid00.addEventHandler("onselectchanged", this.Div03_Grid00_onselectchanged, this);
            this.Div04.Edit_mediationChg.addEventHandler("oneditclick", this.Div04_Edit_mediationChg_oneditclick, this);
            this.Div04.Edit_mediationCont.addEventHandler("oneditclick", this.Div04_Edit01_oneditclick, this);
            this.Div04.Button_addRow.addEventHandler("onclick", this.Div04_Button_addRow_onclick, this);
            this.Div04.Button_del.addEventHandler("onclick", this.Div04_Button_del_onclick, this);
            this.Div05.Static_payment01.addEventHandler("onclick", this.Div05_Static01_onclick, this);
            this.Div05.Button_save.addEventHandler("onclick", this.Div05_Button_save_onclick, this);
            this.Div05.Button_close.addEventHandler("onclick", this.Div05_Button_close_onclick, this);

        };

        this.loadIncludeScript("MEDIATION001_Re.xfdl");

       
    };
}
)();
