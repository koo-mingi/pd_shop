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
            obj._setContents("<ColumnInfo><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"INT\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"INT\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefLawConcSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefEndInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefLawConcName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mediation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"mediationSeq\" type=\"INT\" size=\"256\"/><Column id=\"mediationWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"mediationChg\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"mediationCont\" type=\"STRING\" size=\"2000\"/><Column id=\"mediationRefPoin\" type=\"STRING\" size=\"255\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeqCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_position", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
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

            obj = new Dataset("ds_count", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"mediationSeq\" type=\"INT\" size=\"256\"/><Column id=\"mediationWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"mediationChg\" type=\"INT\" size=\"256\"/><Column id=\"mediationCont\" type=\"STRING\" size=\"2000\"/><Column id=\"mediationRefPoin\" type=\"STRING\" size=\"255\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_04", "absolute", "14", "447", "326", "163", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "14", "264", "996", "132", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "342", "447", "670", "163", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "152", "996", "60", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("19");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "7", "4", null, "68", "6", null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "14", "70", "1006", "32", null, null, this);
            obj.set_taborder("22");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8", "0", "980", "25", null, null, this.Div01);
            obj.set_taborder("8");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "7", "0", "115", "25", null, null, this.Div01);
            obj.set_taborder("9");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "332", "0", "115", "25", null, null, this.Div01);
            obj.set_taborder("10");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("edit_lawsuitAdmNo", "absolute", "127", "3", "140", "19", null, null, this.Div01);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button_numSearch", "absolute", "273", "1", "55", "23", null, null, this.Div01);
            obj.set_taborder("12");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "928", "1", "55", "23", null, null, this.Div01);
            obj.set_taborder("13");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.Div01.addChild(obj.name, obj);
            obj = new Combo("Combo_sim", "absolute", "452", "3", "140", "19", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@ds_sim");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Div("Div02", "absolute", "14", "157", "1000", "55", null, null, this);
            obj.set_taborder("2");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "8", "0", "980", "25", null, null, this.Div02);
            obj.set_taborder("7");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "6", "0", "115", "25", null, null, this.Div02);
            obj.set_taborder("8");
            obj.set_text("소송진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "332", "0", "115", "25", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "8", "24", "980", "25", null, null, this.Div02);
            obj.set_taborder("12");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit_issuChg", "absolute", "452", "27", "140", "19", null, null, this.Div02);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "332", "24", "115", "25", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_text("쟁점금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit_caseNo", "absolute", "126", "27", "140", "19", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "6", "24", "115", "25", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "656", "24", "115", "25", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("상대담당자명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit_ctpmgrName", "absolute", "776", "27", "140", "19", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "656", "0", "115", "25", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_text("수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo_prgrCode", "absolute", "126", "2", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_prgrCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Combo("Combo_sepCode", "absolute", "452", "2", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@ds_sepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Combo("Combo_cortCode", "absolute", "776", "2", "140", "19", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@ds_cortCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Div("Div03", "absolute", "14", "267", "1000", "125", null, null, this);
            obj.set_taborder("3");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "7", "4", "982", "118", null, null, this.Div03);
            obj.set_taborder("0");
            obj.style.set_border("2 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff");
            obj.set_binddataset("ds_pladef");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"등록번호\"/><Cell col=\"4\" text=\"청구소가\"/><Cell col=\"5\" text=\"주요연락처번호\"/><Cell col=\"6\" text=\"추가연락처번호\"/><Cell col=\"7\" text=\"소송종결구분코드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:pladefSeq\"/><Cell col=\"2\" text=\"bind:pladefName\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:pladefRegNo\" mask=\"######-#######\"/><Cell col=\"4\" text=\"bind:pladefClamVol\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:pladefMainTel\" mask=\"###-####-####\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:pladefAddTel\" mask=\"###-####-####\" maskchar=\"_\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:pladefLawConcName\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "14", "417", "1010", "188", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid_mediation", "absolute", "7", "37", "312", "149", null, null, this.Div04);
            obj.set_taborder("1");
            obj.style.set_border("2 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff,1 solid #9f8f71ff");
            obj.set_binddataset("ds_mediation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:mediationWritDate\"/></Band></Format></Formats>");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "335", "37", "656", "25", null, null, this.Div04);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "335", "61", "656", "75", null, null, this.Div04);
            obj.set_taborder("3");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "335", "135", "656", "50", null, null, this.Div04);
            obj.set_taborder("4");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "335", "37", "130", "25", null, null, this.Div04);
            obj.set_taborder("5");
            obj.set_text("작성일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "668", "37", "122", "25", null, null, this.Div04);
            obj.set_taborder("6");
            obj.set_text("조정금액");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "335", "61", "130", "75", null, null, this.Div04);
            obj.set_taborder("7");
            obj.set_text("조정내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "335", "135", "130", "50", null, null, this.Div04);
            obj.set_taborder("8");
            obj.set_text("기타조정안 참고사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Calendar("Calendar_wrtieDate", "absolute", "470", "40", "140", "19", null, null, this.Div04);
            this.Div04.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj = new Static("Static08", "absolute", "927", "37", "55", "25", null, null, this.Div04);
            obj.set_taborder("11");
            obj.set_text("(원)");
            obj.style.set_align("center");
            this.Div04.addChild(obj.name, obj);
            obj = new Button("Button_addRow", "absolute", "881", "0", "55", "23", null, null, this.Div04);
            obj.set_taborder("14");
            obj.set_text("신규");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Button("Button_del", "absolute", "941", "0", "55", "23", null, null, this.Div04);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("star_Static01", "absolute", "365", "88", "37", "23", null, null, this.Div04);
            obj.set_taborder("16");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.Div04.addChild(obj.name, obj);
            obj = new MaskEdit("Edit_mediationChg", "absolute", "795", "40", "140", "19", null, null, this.Div04);
            obj.set_taborder("17");
            obj.set_mask("###,###,###,###,###");
            obj.set_limitbymask("integer");
            this.Div04.addChild(obj.name, obj);
            obj = new TextArea("Txt_mediationCont", "absolute", "470", "64", "514", "69", null, null, this.Div04);
            obj.set_taborder("18");
            obj.set_wordwrap("char");
            obj.set_maxlength("1500");
            this.Div04.addChild(obj.name, obj);
            obj = new TextArea("Txt_refPoin", "absolute", "470", "138", "514", "44", null, null, this.Div04);
            obj.set_taborder("19");
            obj.set_wordwrap("char");
            obj.set_maxlength("1500");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "4", "624", "1010", "101", null, null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Button("Button_save", "absolute", "887", "9", "55", "23", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("Button_close", "absolute", "947", "9", "55", "23", null, null, this.Div05);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div06", "absolute", "14", "7", "996", "50", null, null, this);
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

            obj = new Static("Static02", "absolute", "14", "420", "100", "20", null, null, this);
            obj.set_taborder("9");
            obj.set_text("조정안 세부사항");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "16", "622", "100", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("결제 진행 상태");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aprv", "absolute", "832", "633", "55", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_text("결재");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment01", "absolute", "14", "643", "120", "25", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment02", "absolute", "14", "668", "120", "25", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment03", "absolute", "134", "643", "120", "25", null, null, this);
            obj.set_taborder("14");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment04", "absolute", "134", "668", "120", "25", null, null, this);
            obj.set_taborder("15");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment05", "absolute", "254", "643", "120", "25", null, null, this);
            obj.set_taborder("16");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment06", "absolute", "254", "668", "120", "25", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "952", "233", "55", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("종결");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
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
            obj = new Layout("default", "", 1006, 32, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
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
            obj = new BindItem("item2","Div01.edit_lawsuitAdmNo","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
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
            obj = new BindItem("item12","Div02.Combo_sepCode","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div04.Edit_mediationChg","value","ds_mediation","mediationChg");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div04.Txt_mediationCont","value","ds_mediation","mediationCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div04.Txt_refPoin","value","ds_mediation","mediationRefPoin");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("MEDIATION001.xfdl", "Lib::common.xjs");
        this.registerScript("MEDIATION001.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        //전역변수 선언

        //소송관리번호
        var lawsuitAdmNo="";
        //심급코드
        var instAdmCode="";
        //원피고일련번호
        var pladefSeq="";
        var aprv_lawsrcrlt="";
        var infoStepCode = "004";
        var tmpAprvprgrInfoSeq = "";
        var tmpBookNo = "";
        // var bookNo = "";

        this.MEDIATION_onload = function(obj,e)
        {
        	//초기 버튼 실행기능 막기.
        	this.onBtnFunc(false);
        	this.setCode();
        	
        // 	// JKIM_2020.01.02 : 소송접수관리에서 메뉴이동
        // 	lawsuitAdmNo = application.gds_Params.lookup("PARAM_ID", "LAWSUIT_LIST", "PARAM_VAL");
        // 	instAdmCode = application.gds_Params.lookup("PARAM_ID", "LAWSUIT_LIST", "MENU_ID"); ;
        // 
        // 	// 상신진행리스트에서 메뉴이동
        // 	//aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL");
        // 	
        // 
        // 	if(lawsuitAdmNo) {
        // 		this.modal_callback("Search", lawsuitAdmNo);
        // 	}	

        //  	if(aprv_lawsrcrlt) {
        //  	instAdmCode=f_lawsrcrlt.substr(13,3);
        //  	 trace("디이이이이잉바바ㅏ ㅖ: "+aprv_lawsrcrlt+" "+instAdmCode);
        // 		this.modal_callback("Search", aprv_lawsrcrlt);
        //  	}	
        	
        			// JKIM_2020.01.02 : 상신진행리스트에서 메뉴이동
        // 	if(typeof (application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL"))!='undefined'){
        // 		aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL");
        // 		if(aprv_lawsrcrlt) {
        // 			instAdmCode=aprv_lawsrcrlt.substr(13,3);
        // 			this.modal_callback("Search", aprv_lawsrcrlt);
        // 		}	
        //  	}
        //  	
        //  	if(typeof (application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL"))!='undefined'){
        // 		//전체결제
        // 		aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL");
        // 		if(aprv_lawsrcrlt) {
        // 			instAdmCode=aprv_lawsrcrlt.substr(13,3);
        // 			this.modal_callback("Search", aprv_lawsrcrlt);
        // 		}	
        //  	}

        
        	//결제진행리스트에서 조정안 등록
        	var rtnObj = this.gfnGetArgument();
        	
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        	aprv_lawsrcrlt =rtnObj.legaladvLawAdvReqNo;
        		if(rtnObj.legaladvLawAdvReqNo) {
        		instAdmCode=aprv_lawsrcrlt.substr(13,3);
        		this.modal_callback("Search",aprv_lawsrcrlt);
        		}
        	}
        	
        	//상시결제리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListEmpl))
        	{
        		if(rtnObj.aprvListEmpl){
        			instAdmCode=rtnObj.aprvListEmpl.substr(13,3);
        			this.modal_callback("Search",rtnObj.aprvListEmpl);
        		}
        	}
        	
        		//전체결재리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListAll))
        	{

        		if(rtnObj.aprvListAll){
        			instAdmCode=rtnObj.aprvListAll.substr(13,3);
        			this.modal_callback("Search",rtnObj.aprvListAll);
        		}
        	}
        	
        	// 소송접수에서 조정안으로 이동
        	if(!this.gfn_IsNull(rtnObj.lawsuitList))
        	{
        		this.modal_callback("Search",rtnObj.lawsuitList);
        	}
        }

        this.onBtnFunc = function(booleanBtn){
        // 	if(booleanBtn==true){
        // 		this.Div04.Button_del.set_enable(true);
        // 		this.Div05.Button_confirm.set_enable(true);
        // 		this.Div05.Button_save.set_enable(true);
        // 		this.Div04.Button_addRow.set_enable(true);
        // 	}
        // 	else{
        // 		this.Div04.Button_del.set_enable(false);
        // 		this.Div05.Button_confirm.set_enable(false);
        // 		this.Div05.Button_save.set_enable(false);
        // 		this.Div04.Button_addRow.set_enable(false);
        // 	}

        }

        //코드 호출 함수
        this.setCode = function()
        {
        	this.gf_codeComListLoad("ds_prgrCode",  "ds_prgrCode",   "N", "", "", "fn_callback", "G02"); // 소송진행상태코드
        	this.gf_codeComListLoad("ds_sepCode",  "ds_sepCode",   "N", "", "", "fn_callback", "H02"); // 당사원피고코드
        	this.gf_codeComListLoad("ds_cortCode",  "ds_cortCode",   "N", "", "", "fn_callback", "A01");// 수행법원코드
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
        this.modal_callback = function(modalId,variant){
        	if(modalId == "Search") {
        		//모달에서 검색을 실행하고 닫으면 변수에 소송관리번호+심급을 기록하도록 설계되어 있다.
        		//현재 필요한 내용은 소송관리번호와 심급 각각 따로 필요하기에 substr을 통하여 필요한 내용을 추출하도록 한다.
        		//심급의 내용이 없을 경우도 있기에 if문을 사용한다.
        		if(variant.length==13){
        			instAdmCode = variant.substr(10,3);
        		}

        		lawsuitAdmNo = variant.substr(0,10);
        		tmpAprvprgrInfoSeq = this.ds_position.getColumn(0, "aprvprgrInfoSeq");
        		
        // 		trace("modal lawsuitAdmNo:"+lawsuitAdmNo);
        // 		trace("modal instAdmCode:"+instAdmCode);
        		
        		this.ds_search.addRow();
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        		
        		this.getMediationInfo();
        		this.getLawsuitInfo();
        		this.getSimInfo();
        		this.getPladefInfo();
        //		this.fn_staSet();
        		
        	//	this.onBtnFunc(true);
        	} else if (modalId == "ApprovalReq") {
        	
        // 		var tmpBookNo = this.getBookNo();
        		this.ds_position_code.clearData();
        		
        		this.getMediationInfo();
        		this.getLawsuitInfo();
        		this.getSimInfo();
        		this.getPladefInfo();
        		
        		this.fn_staSet("Static_payment01","Static_payment03","Static_payment05"
        			,"Static_payment02","Static_payment04","Static_payment06");

        // 
        // 		this.aprv_search(tmpBookNo);
        //		this.fn_staSet();

        
        // 		this.fn_staSet("Static_payment01","Static_payment03","Static_payment05"
        // 			,"Static_payment02","Static_payment04","Static_payment06");
        	}
        	
        // 	var tmpBookNo = this.getBookNo();
        // 	alert("tmpBookNo :: " + tmpBookNo);
        // 	this.aprv_search(tmpBookNo);
        // 	this.fn_staSet();

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
        	trace("search : "+this.ds_search.getColumn(0,"lawsuitAdmNo"));
        	trace("search : "+this.ds_search.getColumn(0,"instAdmCode"));
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
        	
        	//trace(this.ds_search.saveXML());
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
        // 	instAdmCode = this.Div01.Combo_sim.value;
        // 	trace("심급번호 : " + instAdmCode);
        // 	
        // 	this.ds_mediation.clear();
        // 
        // 	this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        // 	
        // 	
        // 	
        // // 	this.getPladefInfo();
        // // 	this.getLawsuitInfo();
        // // 	this.getSimInfo();
        // // 	this.getMediationInfo();
        // 
        // 	this.getMediationInfo();
        // 	this.getLawsuitInfo();
        // 	this.getSimInfo();
        // 	this.getPladefInfo();
        // 	this.onBtnFunc(true);
        	
        //	this.ds_lawsuit.filter("lawsuitAdmNo=='"+lawsuitAdmNo+"' && instAdmCode=='"+ obj.value +"'");
        //	trace("광훈 .>>> " + this.ds_pladef.saveXML());
        // 	if(this.Div01.Combo_sim.value == null){
        // 		this.Div01.Combo_sim.set_index(0);
        // 	}

         	this.ds_lawsuit.filter("instAdmCode=='"+ this.Div01.Combo_sim.value +"'");
         	this.ds_pladef.filter("pladefRegInst<='" + this.Div01.Combo_sim.value + "'");
         	this.ds_mediation.filter("pladefSeq==''");
         	
        	this.ds_lawsuit.set_rowposition(0);
        	this.ds_pladef.set_rowposition(-1);
         	//this.ds_pladef.set_rowposition(0);
        // 	this.ds_pladef.filter("lawsuitAdmNo=='"+lawsuitAdmNo+"'");  //+"' && instAdmCode=='"+obj.value+"' && delYn=='N'");
        //	this.ds_mediation.filter("codeno=='"+obj.value+"'");
        	
        // 	this.ds_instAdm.set_rowposition(0);
        // 	this.ds_preIwr.set_rowposition(0);
        //	this.getFileCount();
        	var BookNo= this.getBookNo();
        	this.aprv_search(BookNo);
        }

        
        //그리드의 선택한 셀이 변경되었을 시 발생하는 이벤트
        this.Div03_Grid00_onselectchanged = function(obj,e)
        {
        	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!그리드 이벤트 발생!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        	
        // 	trace(this.ds_mediation.saveXML());
        //	trace(this.ds_pladef.saveXML());
        	
        	var pSeq =  this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefSeq");
        	var iCode = this.Div01.Combo_sim.value;
        	this.ds_mediation.filter("pladefSeq=='" + pSeq + "' && instAdmCode=='" + iCode  + "'");
        	
        	
        	var ds_pladefCnt = this.ds_pladef.getColCount();
        	
        	//trace(this.ds_mediation.saveXML());
        	var thisRow = this.ds_pladef.rowposition;
        	pladefSeq = this.ds_pladef.getColumn(thisRow,"pladefSeq");
        	this.ds_search.setColumn(0,"pladefSeq",pladefSeq);
        	
        	
        	this.getMediationInfo();
        	this.fn_staSet("Static_payment01","Static_payment03","Static_payment05"
        			,"Static_payment02","Static_payment04","Static_payment06");
        // 	tmpBookNo = this.getBookNo();
        // 	this.aprv_search(tmpBookNo);
        	
        // var tmpBookNo = this.getBookNo();
        // this.aprv_search(tmpBookNo);
        // this.fn_staSet();
        	
        	
        	// 필요없으면 삭제.
        	var BookNo= this.getBookNo();
        	this.aprv_search(BookNo);

        }

        //콜백함수!
        this.fn_callback = function(svcId,errCode,errMsg)
        {

        	if(this.errCode < 0)
        	{
        		Iject.alert(this.errMsg);			
        		return;
        	}
        	
        	else if(svcId == "getPladefInfo") {
        // 		this.ds_pladef.set_rowposition(-1);
        // 		this.ds_mediation.filter("pladefSeq==''");
        		
        		this.ds_pladef.addColumn("pladefLawConcName", "string", 256);
        		
        		
        		for(var i = 0 ; i < this.ds_pladef.getRowCount() ; i++) {
        			var tmpStr = this.ds_pladef.getColumn(i, "pladefLawConcSepcode");
        			
        			switch(tmpStr){
        				case "001":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "판결");
        					break;
        					
        				case "002":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "조종종결");
        					break;
        					
        				case "003":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "화해종결");
        					break;
        					
        				case "004":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "상소취하");
        					break;
        					
        				case "005":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "소취하");
        					break;
        					
        				case "006":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "의제자백");
        					break;
        					
        				case "007":
        					this.ds_pladef.setColumn(i, "pladefLawConcName", "반소제기");
        					break;
        			}
        		}
         		
        		this.Div01_Combo_sim_onitemchanged();
        		
        // 		tmpBookNo = this.getBookNo();
        // 		this.aprv_search(tmpBookNo);
        	}
        	else if(svcId == "getSimInfo") {
        		this.Div01.Combo_sim.set_index(parseInt(instAdmCode)-1);
        		//this.ds_sim.set_rowposition(0);
        		
        	}
        	else if(svcId=="getLawsuitInfo"){
        		trace("law : "+this.ds_lawsuit.saveXML());
        		/*this.ds_sim.set_rowposition(0);*/
        	}
        	
        	else if(svcId=="getMediationInfo"){
        		application.gds_Params.deleteAll();
        //		trace("조회 :: " + this.ds_mediation.saveXML());
        		this.ds_mediation.set_rowposition(-1);

        //		alert("tmpBookNo :: " + tmpBookNo);
        //		this.fn_staSet();

        	}
        	
        	else if(svcId=="outList"){
        		
        		if (errCode < 0) {
        				alert("데이터를 불러오기에 실패하였습니다." + errMsg);
        			} else {
        				
        				// 결재라인 박스 생성.
        				var cnt = 0;
        				var cc = "y";
        				var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        				
        				//trace("광훈 ::: " + this.ds_position.saveXML());
        				//alert("ds_position row :: " + this.ds_position.rowcount);
        				
        				
        				for(var i=0 ; i < this.ds_position.getRowCount() ; i++) {
        					//alert(this.ds_position.getColumn(i,"aprvInfoCondCode"));
        					this.ds_position_code.addRow();
        					
        					if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){				// 결재완료
        						this.ds_position_code.setColumn(cnt, "codeNo","Y");
        						this.ds_position_code.setColumn(cnt, "codeName","결재완료");
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        						this.ds_position_code.setColumn(cnt, "codeNo","N");
        						this.ds_position_code.setColumn(cnt, "codeName","결재대기");
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z"){		//반려
        						this.ds_position_code.setColumn(cnt, "codeNo","Z");
        						this.ds_position_code.setColumn(cnt, "codeName","반려");			
        						//cc="n";
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A"){		//전결
        						this.ds_position_code.setColumn(cnt, "codeNo","A");
        						this.ds_position_code.setColumn(cnt, "codeName","전결");			
        					}else{
        					
        					}
        					cnt++;

        				}
        				
        				// 반려시 상신자만 결재라인 초기화
        // 				if(cc == "n" && this.ds_position.getColumn(0, "aprvprgrInfoWritSabun") == loginSabun){
        // 					this.ds_position.clearData();
        // 					this.ds_position_code.clearData();
        // 					return false;
        // 				}
        				
        				
        				
        				if(this.ds_position.rowcount > 0) {
        				//	this.aprv_lock();
        				}
        				
        			}
        		
        		//this.fn_staSet();
        		//alert(this.ds_position.saveXML());
        		
        		//alert(this.ds_mediation.saveXML());
        		 	this.fn_staSet("Static_payment01","Static_payment03","Static_payment05"
         			,"Static_payment02","Static_payment04","Static_payment06");
        		
        	} else if(svcId == "mediationSave") {
        		var tmpStr = this.Div01.edit_lawsuitAdmNo.text + "" +  this.ds_mediation.getColumn(this.ds_mediation.rowposition, "pladefSeq");
        		alert("저장되었습니다.");
        		this.modal_callback("Search", tmpStr);
        //		alert(this.ds_mediation.saveXML());
        	//	alert(confirmStr);
        	}

        }

        
        this.Div04_Button_addRow_onclick = function(obj,e)
        {
        	
        	
        	if(this.Div02.Combo_prgrCode.value==003){
        		alert("이미 종결된 사항입니다.");
        		this.onBtnFunc(false);
        		return false;
        	}
        	else if(this.ds_pladef.getRowCount()<1){
        		alert("조정 할 원피고가 없습니다.");
        		return false;
        	}
        	else if(this.ds_pladef.rowposition < 0){
        		alert("먼저 원피고 목록에서 대상을 선택해주세요.");
        		return false;
        	}

        	var pladefName = this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefName");
        	
        	var addConfirm = application.confirm(pladefName + "님의 조정안을 작성하시겠습니까?", "확인");
        	
        	if(addConfirm){
        // 		var tmpRow= this.ds_mediation.addRow();
        // 		this.ds_mediation.set_rowposition(0);
        // 		
        // 		var today = new Date();
        // 		var writDay = today.getDate();
        // 		var cRow = this.ds_mediation.rowposition;
        // 		
        // 		this.ds_mediation.setColumn(tmpRow, "lawsuitAdmNo", this.Div01.edit_lawsuitAdmNo.text);
        // 		this.ds_mediation.setColumn(tmpRow, "instAdmCode", this.Div01.Combo_sim.value);
        // 		this.ds_mediation.setColumn(tmpRow, "pladefSeq", this.ds_mediation.getColumn(cRow, "pladefSeq"));
        // 		this.ds_mediation.setColumn(tmpRow, "pladefSepCode", this.ds_mediation.getColumn(cRow, "pladefSepCode"));
        // 		this.ds_mediation.setColumn(tmpRow, "mediationWritDate", writDay);

        		this.ds_mediation.insertRow(0);
        		this.ds_mediation.set_rowposition(-1);
        		this.ds_mediation.set_rowposition(0);
        		
        		var cRow = this.ds_pladef.rowposition;
        		this.ds_mediation.setColumn(0, "pladefSeq", this.ds_pladef.getColumn(cRow, "pladefSeq"));
        		
        		
        		
        		
        		
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
        		var mediationCont = this.Div04.Txt_mediationCont.value;
        		
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
        						,"fn_callback");	
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
        		if(this.gfn_IsNull(this.Div01.edit_lawsuitAdmNo.text)) {
        			alert("먼저 소송관리번호를 검색해주세요.");
        			return;
        		} else if(this.gfn_IsNull(this.Div04.Txt_mediationCont.text)) {
        			alert("조정내용을 작성해주세요.");
        			return;
        		}
        	
        	
        	
        	
        	
        		var saveConfirm = application.confirm("해당 데이터를 저장하시겠습니까?", "확인");
        		
        		if(saveConfirm){
        			if(this.gfn_IsNull(this.Div04.Txt_mediationCont.value)){
        			
        				alert("조정내용은 필수 사항입니다.");
        				this.Txt_mediationCont.setFocus();
        				
        			}
        			else{
        			
        // 				var rowPo = this.ds_mediation.rowposition;
        // 				
        // 				//this.ds_mediation.setColumn(rowPo, "mediationSeq", );
        // 				this.ds_mediation.setColumn(rowPo, "mediationWritDate", this.Div04.Calendar_wrtieDate.value);
        // 				this.ds_mediation.setColumn(rowPo, "mediationChg", this.Div04.Edit_mediationChg.text);
        // 				this.ds_mediation.setColumn(rowPo, "mediationCont", this.Div04.Txt_mediationCont.text);
        // 				this.ds_mediation.setColumn(rowPo, "mediationRefPoin", this.Div04.Edit_refPoin.text);
        	
        	
        				var wDate = this.Div04.Calendar_wrtieDate.value + "";
        				wDate = this.gfn_IsNull(wDate) ? "" : wDate;
        				
        				var thisRow = this.ds_pladef.rowposition;
        				
        				var pladefSepCode = this.ds_pladef.getColumn(thisRow, "pladefSepCode");
        				var pladefSeq = this.ds_pladef.getColumn(thisRow, "pladefSeq");
        				var iCode = this.Div01.Combo_sim.value;

        				var strParam = "lawsuitAdmNo=" + lawsuitAdmNo + " instAdmCode=" + iCode
        						     + " pladefSepCode=" + pladefSepCode + " pladefSeq=" + pladefSeq
        						     + " mediationWritDate=" + wDate
        						     ;
        				
        				this.gfn_transaction(this
        								,"mediationSave"
        								,"mediation/mediationSave.do"
        								,"ds_input=ds_mediation:U"
        								,""
        								,strParam
        								,"fn_callback");
        				//trace("MEDIATION001 >> " + this.ds_mediation.saveXML());
        			}
        		}
        	}
        }

        this.Div05_Button_close_onclick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

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
        	if(this.ds_mediation.getRowCount() < 1){
        		alert("결재할 조정안이 없습니다.");
        		validation=false;
        	}else if(this.ds_mediation.getRowCount() >= 1 && this.ds_mediation.rowposition == -1){
        		alert("결재할 내역을 선택해주세요.");
        		validation=false;
        	}
        	
        //	상신전에 저장해야하는 유효성 체크.	
        // 	else if(){
        // 		alert("의뢰내용을 저장해 주십시오.");
        // 		validation=false;
        // 	}

        	if(validation == true) {
        	var rType = this.ds_mediation.getRowType(this.ds_mediation.rowposition);
        		if(rType == 4 || rType == 2){
        			alert("먼저 작성 내용을 저장해주세요.");
        			return false;
        		}

        		var strParam = "aprvprgrInfoStepCode=" + "\"" + infoStepCode + "\"";//결재 진행 코드
        //		var aprvBookNo = this.getBookNo();

        		
        		
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		 
        		var newChild = new ChildFrame;
        		
        		if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun) {
        			newChild.init("ApprovalReq"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "aprv::APRV_COMMENT.xfdl");
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			newChild.showModal(this.getOwnerFrame()
        								, {stepCode:"004", bookNo:this.getBookNo(), aprvprgrInfoSeq:this.ds_position.getColumn(0, "aprvprgrInfoSeq"), dataset:this.ds_position.saveXML()}
        								, this
        								, "modal_callback");
        		} else if(writSabun == loginSabun || writSabun == null) {
        			
        			newChild.init("ApprovalReq"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "aprv::APRV_PROG_COMMENT.xfdl");
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			newChild.showModal(this.getOwnerFrame()
        								, {stepCode:"004", bookNo:this.getBookNo(), aprvprgrInfoSeq:this.ds_position.getColumn(0, "aprvprgrInfoSeq")}
        								, this
        								, "modal_callback");
        		}  else {
        			
        		}
        		
        // 		newChild.init("ApprovalReq"
        // 					, "absolute", nLeft, nTop, 300, 250, null, null
        // 					, "aprv::APRV_PROG_COMMENT.xfdl");
        // 		newChild.set_openalign("center middle");
        // 		newChild.set_dragmovetype("all");
        // 		newChild.showModal(this.getOwnerFrame()
        // 							, {stepCode:"004", bookNo:this.getBookNo(), aprvprgrInfoSeq:this.ds_position.getColumn(0, "aprvprgrInfoSeq")}
        // 							, this
        // 							, "modal_callback");
        // 		
        // 
        // 		if(tmpBookNo == "" || tmpBookNo == null) {
        // 		} else {
        // 			//this.aprv_search(bookNo);
        // 		}
        							
        	}
        }

        this.aprv_search = function(tmpBookNo) {
        	this.ds_position.clearData();
        	this.ds_position_code.clearData();
        	
        	var strSvcid = "outList";
        	var strUrl = "svcurl::approval/approvalLineList.do";
        	var strInputDs = ""; 
        	var strOutputDs = "ds_position=ds_output";
        	var strParam = "";
        	var strFnCallback = "fn_callback";
        	
        	strParam += "APRVPRGR_INFO_STEP_CODE=" + "\"" + infoStepCode + "\""; 
        	strParam += " APRVPRGR_INFO_BOOK_NO=" + "\"" + tmpBookNo + "\""; 
        //	strParam += " APRVPRGR_INFO_SEQ=" + "\"" + tmpAprvprgrInfoSeq + "\""; 
        	this.transaction(strSvcid
        				, strUrl
        				, strInputDs
        				, strOutputDs
        				, strParam
        				, strFnCallback);

        
        }

        this.getBookNo = function() {
        	var BookNo = "";
            
            var pSeq = (this.ds_pladef.getColumn( this.ds_pladef.rowposition ,"pladefSeq") + "").padLeft(4, "0");
            var mSeq = (this.ds_mediation.getColumn( this.ds_mediation.rowposition ,"mediationSeq") + "").padLeft(4, "0");
            
            pSeq = this.gfn_IsNull(pSeq) == null ? "" : pSeq;
            mSeq = this.gfn_IsNull(mSeq) == null ? "" : mSeq;
        //    alert(pSeq + " / " + mSeq);
                
        	BookNo = this.Div01.edit_lawsuitAdmNo.text  + ""   // 소송관리번호
        	       + "004"                              // 업무구분코드
        		   + this.Div01.Combo_sim.value  + ""  // 심급차수	 
        		   + pSeq                              // 원피고일련번호
        		   + mSeq ;                            // 조정안 일련번호 
          
        //   alert("getBook :: " + BookNo);
           return BookNo;

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
        //application.gds_Params.deleteAll();
        	
        // 	this.sta_aprv01.set_text(this.ds_position.getColumn(0,"aprvInfoDeptName") + " " + this.ds_position.getColumn(0,"aprvInfoName"));
        // 	this.sta_aprv11.set_text(this.ds_position_code.getColumn(0, "codeName"));
        // 	this.sta_aprv02.set_text(this.ds_position.getColumn(1,"aprvInfoDeptName") + " " + this.ds_position.getColumn(1,"aprvInfoName"));
        // 	this.sta_aprv12.set_text(this.ds_position_code.getColumn(1, "codeName"));
        // 	this.sta_aprv03.set_text(this.ds_position.getColumn(2,"aprvInfoDeptName") + " " + this.ds_position.getColumn(2,"aprvInfoName"));
        // 	this.sta_aprv13.set_text(this.ds_position_code.getColumn(2, "codeName"));
        }

        this.Div04_Grid_mediation_oncellclick = function(obj,e)
        {
        //	alert(this.ds_position.saveXML());
        // 	tmpAprvprgrInfoSeq = this.ds_position.getColumn(this.ds_mediations.rowposition, "aprvprgrInfoSeq");
        // 	alert(tmpAprvprgrInfoSeq);

        	//var sss = this.ds_mediation.getColumn(this.);
        	
        //	alert(this.ds_position_code.saveXML());
        //	alert(this.ds_mediation.getColumn(this.ds_mediation.rowposition, "mediationSeq"));
        	this.Div04.Calendar_wrtieDate.set_enable(true);
        	this.Div04.Edit_mediationChg.set_enable(true);
        	this.Div04.Txt_mediationCont.set_enable(true);
        	this.Div04.Txt_refPoin.set_enable(true);
        	
        	if(this.gfn_IsNull(!this.gfn_IsNull(this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefLawConcSepcode")))){
        		this.Div04.Calendar_wrtieDate.set_enable(false);
        		this.Div04.Edit_mediationChg.set_enable(false);
        		this.Div04.Txt_mediationCont.set_enable(false);
        		this.Div04.Txt_refPoin.set_enable(false);
        	} 
        	
        	var BookNo= this.getBookNo();
        	this.aprv_search(BookNo);
        	
        	
        	
        // 	this.fn_staSet("Static_payment01","Static_payment03","Static_payment05"
        // 			,"Static_payment02","Static_payment04","Static_payment06");
        	
        }

        this.Div03_Grid00_oncellclick = function(obj,e)
        {
        	//alert(this.ds_pladef.saveXML());

        	
        	//alert(pSeq);
        	//alert(this.ds_mediation.saveXML());
        // 	var pSeq =  this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefSeq");
        // 	this.ds_mediation.filter("pladefSeq=='" + pSeq + "'");
        }

        this.Button01_onclick = function(obj,e)
        {	

        	if(this.Div01.edit_lawsuitAdmNo.text == "" ) {
        		alert("먼저 소송관리 번호를 조회해주세요.");
        		return; 
        	}
        	
        // 	trace("결재찾기 :: " +  this.ds_position.saveXML());
        // 	trace("결재찾기 :: " +  this.ds_position_code.saveXML());
        // 	trace("광훈1 :: " + this.ds_pladef.saveXML());
        // 	trace("광훈2 :: " + this.ds_mediation.saveXML());
        	
        	 // 유효성 변수
        	 var validation=true;
        	 var aprvYN1 = this.ds_position.getColumn(1,"aprvInfoCondCode");
        	 var aprvYN2 = this.ds_position.getColumn(2,"aprvInfoCondCode");
        	 
         
             if( this.ds_mediation.getRowType(this.ds_mediation.rowposition) == 4 ){
        	    alert( "저장후 종결하세요");
        	    validation=false;
        	    return;
        	    
        	 } else if(!this.gfn_IsNull(this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefLawConcSepcode"))) {
        		alert("이미 종결된 원피고 입니다.");
        		validation=false;	
        		return;
        	 } else if(this.ds_mediation.rowposition < 0){
        		alert("조정안 세부사항을 선택해주세요.");
        		return;
        	 
        	 } else if((this.ds_position.getRowCount() <= 2 && aprvYN1 != "Y") && (this.ds_position.getRowCount() <= 2 && aprvYN1 != "A")) {
        		alert("먼저 결재를 진행해주세요.");
        		return;
        		
        	 } else if((this.ds_position.getRowCount() == 3 && aprvYN2 != "Y") && (this.ds_position.getRowCount() == 3 && aprvYN2 != "A")) {
        		alert("먼저 결재를 진행해주세요.");
        		return;
        		
        	 } 	   else {
        			var selectname = this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefName");
        	        var tmpPladef = this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefName");
        	        
        			if(tmpPladef == "" ){
        				alert("종결할 원피고를 선택하시오. ");
        			}else if(application.confirm(selectname +" 님의 소송을 종결하시겠습니까?"))
        			{
        				
        				var dsObj = this.Div03.Grid00.getBindDataset();
        				var name = dsObj.getColumn(dsObj.rowposition,"pladefSeq");
        				
        				var argObj = {	"searchValue"  : "3",
        								"lawsuitAdmNo" : this.Div01.edit_lawsuitAdmNo.text,
        								"instAdmCode"  : this.Div01.Combo_sim.value,
        								"pladefSeq"	   : this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefSeq"),
        								"pladefLawConcSepcode" : "002",
        								"name":name
        					}
        				this.gfnOpenMenu("comp::comp_lawsuit001", argObj);
        			
        			}else{
        			   return false;
        			}    
        		    validation=false;	
        	 }
                 
        //      if( validation ){
        //          
        //         this.ds_count.copyData(this.ds_mediation);
        //          
        //         var strSvcID = "getCount";
        // 		var strURL	 ="svcurl::mediation/getCount.do";	
        // 		var strInDatasets ="ds_input=ds_count";
        // 		var strOutDatasets ="ds_count=ds_output";		
        // 		var strArgument=""; //"voClass='pdsystem.mediation.model.MediationVo'";
        // 		var strCallbackFunc="fn_callback";
        // 		
        // 		this.transaction(strSvcID,    		
        // 					strURL,		  	 	
        // 					strInDatasets,		
        // 					strOutDatasets,		
        // 					strArgument,		
        // 					strCallbackFunc);    	
        // 	 }
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
            this.Div04.Grid_mediation.addEventHandler("oncellclick", this.Div04_Grid_mediation_oncellclick, this);
            this.Div04.Button_addRow.addEventHandler("onclick", this.Div04_Button_addRow_onclick, this);
            this.Div04.Button_del.addEventHandler("onclick", this.Div04_Button_del_onclick, this);
            this.Div05.Button_save.addEventHandler("onclick", this.Div05_Button_save_onclick, this);
            this.Div05.Button_close.addEventHandler("onclick", this.Div05_Button_close_onclick, this);
            this.btn_aprv.addEventHandler("onclick", this.btn_aprv_onclick, this);
            this.Static_payment01.addEventHandler("onclick", this.Div05_Static01_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("MEDIATION001.xfdl");

       
    };
}
)();
