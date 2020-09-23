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
                this.set_name("comp_lawsuit001");
                this.set_titletext("소송종결");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_judg", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"judgSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgChg\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAplCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtrmgrDepuname\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitFulfDetmWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCostCfnApldate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCont\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCfmDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDelidate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitConcDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_judgCode", this);
            obj._setContents("<ColumnInfo><Column id=\"legalOfficialinfoRelaNo\" type=\"STRING\" size=\"256\"/><Column id=\"legalOfficialinfoLyrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eventCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_simCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladefSepCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cortCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefJudgChg\" type=\"STRING\" size=\"256\"/><Column id=\"pladefConcCont\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_progcode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_concYn", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladefCount", this);
            obj._setContents("<ColumnInfo><Column id=\"pladefLawConcSepcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_position_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_appr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"value\">판결</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">조정종결</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">화해종결</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">상소취하</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">소취하</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">의제자백</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">반소제기</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instcnt", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_02", "absolute", "14", "456", "996", "137", null, null, this);
            obj.set_taborder("97");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "26", "18", "168", "29", null, null, this);
            obj.set_taborder("1");
            obj.set_text("소송종결");
            obj.style.set_color("whitesmoke");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "14", "211", "91", "19", null, null, this);
            obj.set_taborder("38");
            obj.style.set_font("굴림,9,bold");
            obj.set_text("원고사항목록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "14", "233", "996", "191", null, null, this);
            obj.set_taborder("39");
            obj.set_binddataset("ds_pladef");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"134\"/><Column size=\"105\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"주민등록번호\"/><Cell col=\"4\" text=\"주요연락처\"/><Cell col=\"5\" text=\"청구소가\"/><Cell col=\"6\" text=\"판결금액\"/><Cell col=\"7\" text=\"소송종결여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:pladefSeq\"/><Cell col=\"2\" text=\"bind:pladefName\"/><Cell col=\"3\" text=\"bind:pladefRegNo\" mask=\"expr:&quot;######-######&quot;\"/><Cell col=\"4\" text=\"bind:pladefMainTel\" expr=\"expr:comp.parent.phoneFomatter(pladefMainTel,1);\"/><Cell col=\"5\" text=\"bind:pladefClamVol\"/><Cell col=\"6\" text=\"bind:pladefJudgChg\" combodataset=\"ds_judg\" combodatacol=\"pladefJudgChg\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:pladefLawConcSepcode\" combodataset=\"ds_result\" combocodecol=\"code\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "14", "433", "196", "19", null, null, this);
            obj.set_taborder("40");
            obj.set_text("원피고종결사항");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "47", "462", "957", "25", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo06", "absolute", "456", "465", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_enable("false");
            obj.set_innerdataset("@ds_concYn");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo07", "absolute", "807", "465", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.set_innerdataset("@ds_instanceCode");
            obj.set_datacolumn("codenm");
            obj.set_codecolumn("codeno");

            obj = new Static("Static23", "absolute", "20", "462", "115", "25", null, null, this);
            obj.set_taborder("48");
            obj.set_text("종결일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "326", "462", "125", "25", null, null, this);
            obj.set_taborder("49");
            obj.set_text("소송종결구분코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "657", "462", "145", "25", null, null, this);
            obj.set_taborder("50");
            obj.set_text("소송종료심급구분코드");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "140", "465", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static26", "absolute", "47", "486", "957", "101", null, null, this);
            obj.set_taborder("52");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "20", "486", "115", "101", null, null, this);
            obj.set_taborder("53");
            obj.set_text("종결내용");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("dotum,9,bold");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "140", "490", "858", "94", null, null, this);
            obj.set_taborder("54");
            obj.set_maxlength("1000");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("58");
            obj.set_text("  소송종결");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "14", "136", "996", "60", null, null, this);
            obj.set_taborder("59");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "59", "165", "944", "25", null, null, this);
            obj.set_taborder("60");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "59", "141", "944", "25", null, null, this);
            obj.set_taborder("61");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "14", "115", "100", "25", null, null, this);
            obj.set_taborder("62");
            obj.set_text("소송 기본사항");
            obj.style.set_font("bold 9 Dotum,굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "756", "141", "105", "25", null, null, this);
            obj.set_taborder("63");
            obj.set_text("판사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "512", "141", "105", "25", null, null, this);
            obj.set_taborder("64");
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_caseCode", "absolute", "377", "144", "130", "19", null, null, this);
            obj.set_taborder("65");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "267", "141", "105", "25", null, null, this);
            obj.set_taborder("66");
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_pladefSepCode", "absolute", "130", "144", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("67");
            obj.set_innerdataset("@ds_pladefSepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Static("Static33", "absolute", "20", "141", "105", "25", null, null, this);
            obj.set_taborder("68");
            obj.set_text("당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "512", "165", "105", "25", null, null, this);
            obj.set_taborder("69");
            obj.set_text("신청법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit_depuName", "absolute", "377", "168", "130", "19", null, null, this);
            obj.set_taborder("70");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "267", "165", "105", "25", null, null, this);
            obj.set_taborder("71");
            obj.set_text("상대담당자대리인");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "20", "165", "105", "25", null, null, this);
            obj.set_taborder("72");
            obj.set_text("상대담당자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_typeCode", "absolute", "622", "144", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_innerdataset("ds_eventCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_judgId", "absolute", "866", "144", "131", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Combo("Combo_cortCode", "absolute", "622", "168", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_innerdataset("@ds_cortCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");

            obj = new Edit("Edit_ctpMgtName", "absolute", "130", "168", "130", "19", null, null, this);
            obj.set_taborder("76");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "896", "603", "55", "23", null, null, this);
            obj.set_taborder("78");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "956", "603", "55", "23", null, null, this);
            obj.set_taborder("79");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("81");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("82");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("Button_reload", "absolute", "943", "71", "55", "23", null, null, this);
            obj.set_taborder("83");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo_sim", "absolute", "448", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");
            obj.set_innerdataset("ds_simCode");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");

            obj = new Static("Static14", "absolute", "338", "70", "105", "25", null, null, this);
            obj.set_taborder("85");
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "271", "71", "55", "23", null, null, this);
            obj.set_taborder("86");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_lawsuitAdmNo", "absolute", "130", "73", "130", "19", null, null, this);
            obj.set_taborder("87");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_taborder("88");
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "211", "91", "19", null, null, this);
            obj.set_taborder("89");
            obj.set_text("피고사항목록");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "602", "100", "20", null, null, this);
            obj.set_taborder("90");
            obj.set_text("결제 진행상태");
            obj.style.set_font("bold 9 굴림");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment01", "absolute", "14", "623", "120", "25", null, null, this);
            obj.set_taborder("91");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment02", "absolute", "14", "648", "120", "25", null, null, this);
            obj.set_taborder("92");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment03", "absolute", "134", "623", "120", "25", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment04", "absolute", "134", "648", "120", "25", null, null, this);
            obj.set_taborder("94");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment05", "absolute", "254", "623", "120", "25", null, null, this);
            obj.set_taborder("95");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static_payment06", "absolute", "254", "648", "120", "25", null, null, this);
            obj.set_taborder("96");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "41", "464", "37", "23", null, null, this);
            obj.set_taborder("98");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "326", "464", "37", "23", null, null, this);
            obj.set_taborder("99");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "655", "464", "37", "23", null, null, this);
            obj.set_taborder("100");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "756", "165", "105", "25", null, null, this);
            obj.set_taborder("102");
            obj.set_text("소송종결일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar0", "absolute", "866", "168", "131", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("103");
            obj.set_enable("false");

            obj = new Button("btn_med_approve", "absolute", "833", "603", "55", "23", null, null, this);
            obj.set_taborder("104");
            obj.set_text("결재");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "43", "526", "37", "23", null, null, this);
            obj.set_taborder("105");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("comp_lawsuit001");
            		p.set_titletext("소송종결");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","Edit_caseCode","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Edit_depuName","value","ds_lawsuit","instAdmCtrmgrDepuname");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Combo_typeCode","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Combo_judgId","value","ds_lawsuit","instAdmJudName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Combo_cortCode","value","ds_lawsuit","lawsuitAplCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Edit_ctpMgtName","value","ds_lawsuit","instAdmCtpmgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Combo_sim","value","ds_search","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edit_lawsuitAdmNo","value","ds_search","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Combo_pladefSepCode","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Calendar01","value","ds_pladef","pladefConcDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Combo06","value","ds_pladef","pladefLawConcSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Combo07","value","ds_pladef","pladefLawconcInstcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","TextArea00","value","ds_pladef","pladefConcCont");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Calendar0","value","ds_lawsuit","lawsuitConcDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("comp_lawsuit001.xfdl", "Lib::common.xjs");
        this.registerScript("comp_lawsuit001.xfdl", function() {
        //include "Lib::common.xjs";

        var lawsuitAdmNo = "";	// 소송관리번호
        var instAdmCode = "";	// 심급코드
        var aprv_lawsrcrlt="";
        var check=0; // 퀵,결제 -0 / 조정안,외화해 여부 - 1
        var Gridrow=0;
        var modalc=false;
        this.comp_lawsuit001 = function(obj,e)
        {
        	this.Combo06.set_enable(true);
        	this.Combo07.set_enable(true);

        	// 공통코드 호출해와 세팅하는 함수
        	this.setCode();
        	
        		// JKIM_2020.01.02 : 상신진행리스트에서 메뉴이동
        // 		if(typeof (application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL"))!='undefined'){
        // 	var lawsuitAdmNo2 = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL");
        // 
        // 	if(lawsuitAdmNo2) {
        // 	this.modal_callback("SearchModal", lawsuitAdmNo2);
        // 	}
        // 	}
        // 	if(typeof (application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL"))!='undefined'){
        // 	//전체결제
        // 	var lawsuitAdmNo3 = application.gds_Params.lookup("PARAM_ID", "APRV_LIST_ALL", "PARAM_VAL");
        // 	if(lawsuitAdmNo3) {
        // 		this.modal_callback("SearchModal", lawsuitAdmNo3);
        // 	}
        // 	}
        	if(this.gfnGetArgument() != 'undefined'){
        	var tmp = this.gfnGetArgument();
        	var name = tmp.name;
        	if(tmp.lawsuitAdmNo){
        		this.modal_callback("SearchModal", tmp.lawsuitAdmNo + "" + tmp.instAdmCode);
        	}
        }
        	//결제진행리스트에서
        	var rtnObj = this.gfnGetArgument();
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        		if(rtnObj.legaladvLawAdvReqNo) {

        		this.modal_callback("SearchModal",rtnObj.legaladvLawAdvReqNo);
        		}
        	}
        		//상시결제리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListEmpl))
        	{
        		if(rtnObj.aprvListEmpl){
        		this.modal_callback("SearchModal",rtnObj.aprvListEmpl);
        		}
        	}
        	
        	//전체결재리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListAll))
        	{
        		if(rtnObj.aprvListAll){
        		this.modal_callback("SearchModal",rtnObj.aprvListAll);
        		}
        	}
        }

        this.setCode = function()
        {
        	this.gf_codeComListLoad("ds_cortCode",  "ds_cortCode",  "N", "", "", "fnCallback", "A01"); //신청법원코드ds_cortCode
        	this.gf_codeComListLoad("ds_eventCode",  "ds_eventCode",   "N", "", "", "fn_Callback", "A02");// 사건유형코드
        	this.gf_codeComListLoad("ds_pladefSepCode",  "ds_pladefSepCode",  "N", "", "", "fnCallback", "H02"); //당사원피고구분공통코드ds_pladefSepCode
        	this.gf_codeComListLoad("ds_progcode",  "ds_progcode",  "N", "", "", "fnCallback", "G02");
        	this.gf_codeComListLoad("ds_concYn",  "ds_concYn",  "N", "", "", "fnCallback", "H01");
        	this.gf_codeComListLoad("ds_instanceCode",  "ds_instanceCode",  "N", "", "", "fnCallback", "G01");
        	this.getJudgName(); // 판사 이름 및 ID
        }

        // 소송관리 번호 검색
        this.Button_numSearch_onclick = function(obj,e)
        {	this.Static_payment01.set_text("");
        	this.Static_payment02.set_text("");
        	this.Static_payment03.set_text("");
        	this.Static_payment04.set_text("");
        	this.Static_payment05.set_text("");
        	this.Static_payment06.set_text("");
        	var lawSearchNo = "";	// 소송관리번호 검색값
        	
        	// 모달창 좌표 설정
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	
        	// 모달창 객체 선언
        	var newChild = new ChildFrame;
        	
        	// 모달창 초기화
        	newChild.init("SearchModal"
        					, "absolute", nLeft, nTop, 400, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        					
        	// showModal 함수를 호출 했을 때 ChildFrame을 띄울 위치를 지정하는 메소드
        	newChild.set_openalign("center middle");
        	
        	// 드래그로 이동 할 수 있는 영역 설정
        	newChild.set_dragmovetype("all");
        	
        	// getOwnerFrame():현재 폼이 갖고 있는 프레임을 가져오는 메소드
        	// showModal매개변수 : ChildFrame의 ID, 부모프레임, 
        	//						모달로 띄운 ChildFrame에 추가될 변수리스트{변수명:변수값 , 변수명:변수값} 형식으로 입력,
        	//						opener가 될 Form 오브젝트(default : objParentFrame 에 속하는 Form 오브젝트)
        	//						모달이 닫힐 때 호출 될 콜백함수
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");	
        }

        // 모달 콜백
        this.modal_callback = function(modalId,variable)
        {
        	if(modalId=="SearchModal"){
        		
        		//모달에서 검색을 실행하고 닫으면 변수에 소송관리번호+심급을 기록하도록 설계되어 있다.
        		//현재 필요한 내용은 소송관리번호와 심급 각각 따로 필요하기에 substr을 통하여 필요한 내용을 추출하도록 한다.
        		//심급의 내용이 없을 경우도 있기에 if문을 사용한다.
        		if(variable.length==13){
        			instAdmCode = variable.substr(10,3);
        		}
        			if(variable.length>13){
        			instAdmCode = variable.substr(13,3);
        		}
        		lawsuitAdmNo = variable.substr(0,10);
        		
        		trace("종결 : "+lawsuitAdmNo);
        		trace("종결 : "+instAdmCode);
        		modalc=true;
        		this.ds_search.setColumn(0, "lawsuitAdmNo", lawsuitAdmNo);
        		this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        		
        		
         		this.getSimInfo();
        		this.getLawsuitInfo();
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

        //심급 콤보박스 변화가 있을 시 재조회
        this.Combo_sim_onitemchanged = function(obj,e)
        {
        	
        	instAdmCode = this.Combo_sim.value;
        	trace("@@@심급번호 : " + instAdmCode);
        	
        	this.ds_search.setColumn(0, "instAdmCode", instAdmCode);
        			
        	this.ds_instAdm.clearData();
        	this.ds_lawsuit.clearData();
        	this.ds_pladef.clearData();
        	
        	this.getLawsuitInfo();

        }

        //TAB_LAWSUIT (소송기본사항)
        this.getLawsuitInfo = function(){
        	trace("================getLawsuitInfo=======================");
        trace('되라 : '+this.ds_search.getColumn(0,'lawsuitAdmNo')+" : "+this.ds_search.getColumn(0,'instAdmCode'));
        	this.gfn_transaction(this,
        			  "getLawsuitInfo",
        			  "comp_lawsuit/getlawsuitInfo.do",
        			  "ds_search=ds_search",
        			  "ds_lawsuit=ds_lawsuit",
        			  "",
        			  "fn_callback");
        }

        //TAB_INST_ADM
        this.getInstAdmInfo = function(){
        	trace("================getInstAdmInfo=======================");

        	this.gfn_transaction(this,
        			  "getInstAdmInfo",
        			  "conc/getInstAdmInfo.do",
        			  "ds_search=ds_search",
        			  "ds_instAdm=ds_instAdm",
        			  "",
        			  "fn_callback");			  
        }

        //TAB_INST_ADM
        this.getpladefInfo = function(){
        	trace("================getpladefInfo=======================");
        trace("pla : "+this.ds_pladef.getColumn(0,"lawsuitAdmNo"));
        trace("pladd : "+this.ds_pladef.getColumn(0,"pladefSepCode"));
        	this.gfn_transaction(this,
        			  "getpladefInfo",
        			  "conc/getPladefInfo.do",
        			  "ds_search=ds_search",
        			  "ds_pladef=ds_pladef",
        			  "",
        			  "fn_callback");			  
        }

        //판사 이름 및 아이디 불러오기
        this.getJudgName = function(){
        	
        	trace("================getJudgName=======================");
        	this.gfn_transaction(this,
        		  "getJudgName",
        		  "pre_iwr/getJudgName.do",
        		  "",
        		  "ds_judgCode=ds_judgCode",
        		  "",
        		  "fn_callback");
        }

        //callback함수
        this.fn_callback = function(svcId,errcd,errmsg)
        {

        	trace("==========fn_callback==========" + svcId);
        	if(svcId == "getLawsuitInfo"){
        		trace("==========svcId : "+svcId+"==========");
        		if(errcd<0){
        		alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else{
        			// 피고사항목록 조회
        			trace("목록 236:  "+this.ds_lawsuit.saveXML());
        			var pladef_Sep_Code ='';
        			//당사원고일때 피고항목을 불러오도록 처리
        				var rtnObj = this.gfnGetArgument();
        			if(this.Combo_pladefSepCode.value=="001") this.ds_search.setColumn(0,"pladefSepCode",'002');
        			else if(this.Combo_pladefSepCode.value=="002") this.ds_search.setColumn(0,"pladefSepCode",'001');
        				 trace(this.Combo_pladefSepCode.value);
        			if(this.Combo_pladefSepCode.value=="002"){

        				this.Static00.set_visible(false);
        				this.Static20.set_visible(true);
        			
        				if(this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo)||this.gfn_IsNull(rtnObj.aprvListEmpl)||this.gfn_IsNull(rtnObj.aprvListAll)){
        				//퀵 / 결제
        				 this.getpladefInfo();
        					
        					
        				}else {
        				//조정안 /외화해
        					this.getPseqJudglist(lawsrcrlt, pladef_Sep_Code, pSeq);
        				}
        				
        			 }else{
        				this.Static00.set_visible(true);
        				this.Static20.set_visible(false);
        				trace("여기");
        				if(this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo)||this.gfn_IsNull(rtnObj.aprvListEmpl)||this.gfn_IsNull(rtnObj.aprvListAll)){
        				//퀵 / 결제

        					 this.getpladefInfo();
        					
        				}else {
        					this.getPseqJudglist(lawsrcrlt, pladef_Sep_Code, pSeq);
        				}
        			 }
        		this.getInstAdmInfo();
        		}
        		
        	}
        	else if (svcId == "getInstAdmInfo"){
        		trace("==========svcId : "+svcId+"==========");
        		var passport = this.getBookNo();
        		this.aprv_search(passport);
        		//this.getpladefInfo();
        	}
        	else if (svcId == "dataSave"){
        		trace("==========svcId : "+svcId+"==========");
        		trace("==========저장완료==========");
        	}
        	if(svcId == "getpladefInfo"){
        	//trace(this.ds_pladef.saveXML());
        trace("getpladefInfogetpladefInfovgetpladefInfogetpladefInfogetpladefInfo"+this.ds_search.getColumn(0,"lawsuitAdmNo"));
        	this.setInstanceLevel(this.ds_search.getColumn(0,"lawsuitAdmNo"));
        	}
        	if(svcId == "getPseqJudglist"){

        	this.setInstanceLevel(this.ds_search.getColumn(0,"lawsuitAdmNo"));
        	}
        	
        	if(svcId == "InstanceCntAll"){
        trace("InstanceCntAll : "+this.ds_instcnt.getColumn(0,"instAdmCode"));
        	var instcnt = this.ds_instcnt.getColumn(0,"instAdmCode");	//소송관리번호별 총 심급 수
        			this.setinstancedl(instcnt);	//심급차수 상세분리
        				
        			// 결재라인 불러오기
        			var passport = this.getBookNo();
        			this.aprv_search(passport);
        	}
        	if(svcId == "createConcUp"){
        		if(errcd < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else {
        		trace('달력 결과 307: '+this.ds_lawsuit.saveXML());
        			this.ds_search.setColumn(0, "lawsuitAdmNo", this.edit_lawsuitAdmNo.value);
        		this.ds_search.setColumn(0, "instAdmCode", this.Combo_sim.value);
        			this.getLawsuitInfo();
        			alert("저장되었습니다");
        		}
        	}
        	
        	if(svcId == "createPladefUp")
        	{
        		if(errcd < 0)
        		{			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}
        		else 
        		{
        			var cc=0;
        			
        			for(var i=0; i<this.ds_pladef.rowcount; i++){	
        				if(		this.ds_pladef.getColumn(i, "pladefConcDate").length > 0
        					&&	this.ds_pladef.getColumn(i, "pladefLawConcSepcode").length > 0
        					&&	this.ds_pladef.getColumn(i, "pladefLawconcInstcode").length > 0
        					&&	this.ds_pladef.getColumn(i, "pladefConcCont").length > 0)
        					{
        						
        					cc++;					
        					}
        			}
        			
        			if(cc==this.ds_pladef.rowcount)
        			{
        					//소송종결일자 UPDATE
        					trace("확인");
        					this.Button1_OnClick();
        					return;
        			}
        			
        			alert("저장되었습니다.원피고");
        			this.fnTransactionSec();
        		}
        	}
        	if(svcId=="outList"){
        	if(errcd < 0){			
        			alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}else{
        		var cnt = 0;
        			var cc="y";
        			var static2="";
        		var loginSabun =application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        			for( i=0 ; i<this.ds_position.getRowCount() ; i++){	
         				this.ds_position_code.addRow();

        					if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){			//결재완료
        					static2="결재완료";
        	
        					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        					//this.Static_payment02.set_text("결재대기");
        						static2="결재대기";
         					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z"){		//반려
        				static2="반려";
         								//this.Static_payment02.set_text("반려");
        						cc="n";
         					}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A"){		//전결
        						//this.ds_position_code.setColumn(cnt, "codeno","A");
         						//this.ds_position_code.setColumn(cnt, "codenm","전결");	
         								//this.Static_payment02.set_text("전결");
         								static2="전결";
         					}else{
        					}
        					if(i==0){
        					this.Static_payment01.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        					this.Static_payment02.set_text(static2);
        					}
        					if(i==1){
        					this.Static_payment03.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        					this.Static_payment04.set_text(static2);
        					}
        					if(i==2){
        					this.Static_payment05.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        					this.Static_payment06.set_text(static2);
        					}
        			cnt++;
        		}
        		// 			//반려시 상신자만 결재라인 초기화
         			if(cc=="n" && this.ds_position.getColumn(0, "aprvprgrInfoWritSabun")==loginSabun){
        			trace("저긴??ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
         				this.ds_position.clearData();
         				this.ds_position_code.clearData();
         				this.Static_payment01.set_text("");
         				this.Static_payment02.set_text("");
         				this.Static_payment03.set_text("");
         				this.Static_payment04.set_text("");
         				this.Static_payment05.set_text("");
         				this.Static_payment06.set_text("");
        				return false;
        			}
        			this.aprv_lock();
        		}
        	
        	}
        		if(svcId=="approvalLineListcode"){
        	var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	var cnt=0;
        		for(i=0;i<this.ds_appr.getRowCount();i++){
        			if(this.ds_appr.getColumn(i,"aprvlineAdmAprvId")==loginSabun) {
        			alert("결제자는 상신을 할 수 없습니다.");
        			return;
        			}
        		}
        		//3차결재라인 중 반려가 있을 경우   
         			 var nLeft = system.clientToScreenX(this, 10);
         	 var nTop = system.clientToScreenY(this, 10);
         	 
         	 var newChild = new ChildFrame;
         	 newChild.init("aprvprogcomm"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "aprv::APRV_PROG_COMMENT.xfdl");
         					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
         	
         	newChild.showModal(this.getOwnerFrame()
        						, {stepCode:"007", bookNo:this.getBookNo(),aprvprgrInfoSeq:this.ds_position.getColumn(0, "aprvprgrInfoSeq")}
        						, this
        						, "modal_callback2");
        	}
        	
        	if(svcId=="getPladeCountList") {
        		if(typeof(this.ds_lawsuit.getColumn(0, "lawsuitConcDate"))=='undefined'){
        	trace("623 : "+this.ds_pladefCount.rowcount+" : "+this.ds_pladef.rowcount);
        		if(this.ds_pladefCount.rowcount == this.ds_pladef.rowcount){
        			alert("소송종결일자를 입력해 주세요.");
        			this.Calendar0.set_enable(true);
        			this.Calendar0.dropdown();
        	
        			//validation=false;
        		}
        	}
        	
        	}
        }

        this.calClick=function(){
        		trace("달력 : "+this.Calendar0.value);
        	trace("디ㅘㄹ고"+this.Calendar0.getDay())
        	if(typeof(this.Calendar0.value)!='undefined')this.fnTransactionSec();
        }
        //초기화
        this.Button_reload_onclick = function(obj,e)
        {

        	
        	//현재 페이지를 새로고침하여 초기화
        	//this.reload();
        	
        	this.ds_lawsuit.clearData();
        	this.ds_instanceCode.clearData();
        	this.ds_pladef.clearData();
         this.ds_position.clearData();
        this.ds_position_code.clearData();
        this.ds_search.clearData();
        alert("초기화 되었습니다.");
        this.reload();
        }

        // 닫기 버튼
        this.btn_close_onclick = function(obj,e){
        	var winId = Iject.$["workFrame"].getActiveFrame().name;

            Iject.$["workFrame"].frames[winId].destroy();
        }

        

        

        

        

        

        
        // 
        // this.comp_lawsuit001_onload = function(obj:Form, e:nexacro.LoadEventInfo)
        // {
        // 	this.comboSetup();
        // 		// 상신진행리스트에서 메뉴이동
        // 	aprv_lawsrcrlt = application.gds_Params.lookup("PARAM_ID", "aprv_list_empl", "PARAM_VAL");
        // 	
        // 		if(aprv_lawsrcrlt) {
        // 	instAdmCode=aprv_lawsrcrlt.substr(13,3);
        // 	trace("comp 되알");
        // 		//this.modal_callback("lawsuit_srch_popup", aprv_lawsrcrlt);
        // 	}	
        // }
        // 
        // // 소송검색 모달창
        // this.lawsuit_srch_btn_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	var nLeft = system.clientToScreenX(this, 10);
        // 	var nTop = system.clientToScreenY(this, 10);
        // 	
        // 	var newChild = new ChildFrame;
        // 	newChild.init("lawsuit_srch_popup"
        // 				, "absolute", nLeft, nTop, 300, 250, null, null
        // 				, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        // 					
        // 	newChild.set_openalign("center middle");
        // 	newChild.set_dragmovetype("all");
        // 	
        // 	newChild.showModal(this.getOwnerFrame()
        // 					 , ""
        // 					 , this
        // 					 , "modal_callback");
        // }
        // 
        // this.modal_callback = function(strID, variant)
        // {
        // 	switch(strID)
        // 	{
        // 	case "lawsuit_srch_popup":
        // 		this.getDsComp(strID, variant);
        // 		break;
        // 	default:
        // 		break;
        // 	}
        // }
        // 
        // this.comboSetup = function()
        // {
        // 	this.gf_codeComListLoad("ds_admNoCode",  "ds_admNoCode",  "N", "", "", "fnCallback", "G01"); //심급차수코드ds_amdNoCode
        // 	this.gf_codeComListLoad("ds_caseTyCode",  "ds_caseTyCode",  "N", "", "", "fnCallback", "A02"); //사건유형코드ds_caseTyCode
        // 	this.gf_codeComListLoad("ds_cortCode",  "ds_cortCode",  "N", "", "", "fnCallback", "A01"); //신청법원코드ds_cortCode
        // 	this.gf_codeComListLoad("ds_pladefSepCode",  "ds_pladefSepCode",  "N", "", "", "fnCallback", "H02"); //당사원피고구분공통코드ds_pladefSepCode
        // }
        // 
        // this.fnCallback = function(svcid, errcd, errmsg)
        // {
        // 	//trace(this.ds_comp.saveXML());
        // 	/*
        // 	switch(svcid)
        // 	{	
        // 	case "lawsuit_srch_popup":
        // 		trace(this.ds_comp.saveXML());
        // 		break;
        // 	default:
        // 		break;
        // 	}
        // 	*/
        // }
        // 
        // this.getDsComp = function(strID, variant)
        // {
        // 	this.ds_comp.clearData();
        // 	if(this.gfn_IsNull(variant) == false)
        // 	{		
        // 		var lawsuitAdmNo = variant.substr(0,10);	// 소송관리번호
        // 		var strParam = "lawsuitAdmNo=" + lawsuitAdmNo;
        // 		var strController="comp/getDsComp.do";
        // 		this.gfn_transaction(this,strID,strController,"","ds_comp=ds_output",strParam,"fnCallback");
        // 	}	
        // }

        
        this.phoneFomatter = function(num,type){

            var formatNum = '';

            if(num.length==11){

                if(type==0){

                    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');

                }else{

                    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

                }

            }else if(num.length==8){

                formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');

            }else{

                if(num.indexOf('02')==0){

                    if(type==0){

                        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');

                    }else{

                        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');

                    }

                }else{

                    if(type==0){

                        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');

                    }else{

                        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

                    }
                }
            }
            return formatNum;
        }

        
        this.getPladeCountList=function(){

        this.gfn_transaction(this,
        			  "getPladeCountList",
        			  "comp_lawsuit/getPladeCountList.do",
        			  "ds_search=ds_search",
        			  "ds_pladefCount=ds_output0",
        			  "",
        			  "fn_callback");
        }

        
        this.Button1_OnClick = function(obj,e)
        {
        	var validation=true;
        	
        	//원피고 카운트 조회
        	this.getPladeCountList();			

        
        	
        }

        //소송 종결사항 저장
        this.btn_save_onclick = function(obj,e)
        {
        	//var validation=true;
        	if(this.gfn_IsNull(this.Calendar01.value)) 
        	{
        		alert("종결일자를 선택하세요");
        		this.Calendar01.dropdown();
        		return;
        		//vaildation=false;
        	}
        	if(this.gfn_Trim(this.Combo06.value).length<=0)
        	{
        		alert("소송종결구분코드를 선택하세요");
        		this.Combo06.dropdown();
        		return;
        	}
        	if(this.gfn_Trim(this.Combo07.value).length<=0)
        	{
        		alert("소송종결심급구분코드를 선택하세요");
        		this.Combo07.dropdown();
        		return;
        	}
        	if(this.gfn_Trim(this.TextArea00.value).length<=0)
        	{
        		alert("종결내용을 작성하세요");
        		this.TextArea00.setFocus();
        		return;
        	}
        	
        // 	if(	!this.gfnDsChangeCheck(this.ds_pladef)
        // 	&&	!this.gfnDsChangeCheck(this.ds_lawsuit))
        // 	{
        // 		return alert("변경 없습니다.");
        // 	}
        // 	
        	this.gfn_transaction
        						(	this
        						,	"createPladefUp"
        						,   "comp_lawsuit/createPladefUp.do"
        						,	"ds_input=ds_pladef:U"
        						,	""
        						,	""
        						,	"fn_callback"
        						);	// 콜백 함수 (transaction 함수가 async 함수이므로 콜백함수가 필요하다)
        };

        this.fnTransactionSec = function ()
        {
        	trace("trace 체크");
        	trace("695 : "+this.ds_search.getColumn(0,"lawsuitAdmNo"));
        	this.gfn_transaction(
        							this
        						,	"createConcUp"
        						,    		//트랜젝션의 이름을 지정한다.	
        				"comp_lawsuit/createConcUp.do",		  	 	//jsp의 URL 주소
        				"ds_input=ds_lawsuit:U ",		//값을 넘겨줄 데이터 테이블 (x = a ; // x라는 이름으로 a를 넘겨주겠다는 의미x = a :u ; 이면 변경된 것만 보냄)
        				"",		//받아올 데이터 테이블 (넘겨주는 테이블 이름과 다를 수 있다)
        				"",		//참조 변수
        				"fn_callback");	// 콜백 함수 (transaction 함수가 async 함수이므로 콜백함수가 필요하다)
        };

        //결제라인 불러오기
        this.aprv_search=function(passport){
        this.ds_position.clearData();
        this.ds_position_code.clearData();
        	var strParam="APRVPRGR_INFO_STEP_CODE="+"\""+"007"+"\"";
        	strParam+=" APRVPRGR_INFO_BOOK_NO="+"\""+passport+"\"";
        	this.gfn_transaction(this,"outList","approval/approvalLineList.do","","ds_position=ds_output",strParam,"fn_callback")
        }

        // 1차 결재자 결재 완료시 메인 페이지 락 
        this.aprv_lock=function(){

        var id =application.gds_User.getColumn(application.gds_User.rowposition, "sabun");

        //   if(typeof(this.ds_position.getColumn(0, "aprvInfoCont"))=='undefined'){
        // 		this.btn_med_approve.set_enable(true);
        // 		this.btn_save.set_enable(true);
        // 		this.enable_true();
        // 	}
        	if(this.Static_payment01.text==''){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(true);
        		this.enable_true();
        		trace("결제버튼확인1");
        	}
        	else if(this.ds_position.getColumn(0, "aprvInfoCont") == "" ||typeof(this.ds_position.getColumn(0, "aprvInfoCont"))=='undefined'){
        		if(this.ds_position.getColumn(0, "aprvprgrInfoWritSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(true);
        			this.enable_true();	
        			trace("결제버튼확인2");
        		}else if(this.ds_position.getColumn(0, "aprvInfoSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인3");
        		}else{
        		this.btn_med_approve.set_enable(false);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인4");
        		}
        	}else if(this.ds_position.getColumn(1, "aprvInfoCont") == "" || typeof(this.ds_position.getColumn(1, "aprvInfoCont"))=='undefined'){
        		if(this.ds_position.getColumn(0, "aprvInfoSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인5");
        		}else if(this.ds_position.getColumn(1, "aprvInfoSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인6");
        		}else{
        			this.btn_med_approve.set_enable(false);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인7");
        		}
        	}else if(this.ds_position.getColumn(2, "aprvInfoCont") == ""||typeof(this.ds_position.getColumn(2, "aprvInfoCont"))=='undefined'){
        		if(this.ds_position.getColumn(1, "aprvInfoSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인8");
        		}else if(this.ds_position.getColumn(2, "aprvInfoSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인9");
        		}else{
        			this.btn_med_approve.set_enable(false);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        		}
        	}else if(this.ds_position.getColumn(2, "aprvInfoCont") != ""||typeof(this.ds_position.getColumn(2, "aprvInfoCont"))!='undefined'){
        		if(this.ds_position.getColumn(2, "aprvInfoSabun") == id){
        			this.btn_med_approve.set_enable(true);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인11");
        		}else{
        			this.btn_med_approve.set_enable(false);
        		this.btn_save.set_enable(false);
        			this.enable_false();
        			trace("결제버튼확인12");
        		}
        	}
        }

        this.enable_false=function(){

        //종결사항
        	this.Calendar0.set_enable(false);
        	
        	//원피고 종결사항
        	this.Calendar01.set_enable(false);
        	this.Combo06.set_enable(false);
        	this.Combo07.set_enable(false);		
        	this.TextArea00.set_enable(false);
        }

        this.enable_true=function(){

        //종결사항
        	//this.Calendar0.set_enable(false);
        	
        	//원피고 종결사항
        	this.Calendar01.set_enable(true);
        	this.Combo06.set_enable(true);
        	this.Combo07.set_enable(true);		
        	this.TextArea00.set_enable(true);
        }

        this.btn_med_approve_OnClick=function(obj,e){

        var validation=true;
        	
        	var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        	var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
        	var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
        	var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
        	var loginSabun =application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	var BookNo="";
        	var passport=this.getBookNo();

        	if(this.Calendar01.value=='' ||typeof(this.Calendar01.value)=='undefined'){
        		alert("저장 후 상신하세요.");
        		this.Calendar01.dropdown();
        		validation=false;
        	}else if(this.Combo06.Value==''||typeof(this.Combo06.value)=='undefined'){
        		alert("저장 후 상신하세요.");
        		this.Combo06.dropdown();
        		validation=false;
        	}else if(this.Combo07.value==''||typeof(this.Combo07.value)=='undefined'){
        		alert("저장 후 상신하세요.");
        		this.Combo07.dropdown();
        		validation=false;
        	}else if(this.TextArea00.text==''||typeof(this.TextArea00.text)=='undefined'){
        		alert("저장 후 상신하세요.");
        		this.TextArea00.setFocus();
        		validation=false;
        		}
        		else if(typeof(this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefConcDate"))=='undefined'){
        			alert("저장 후 상신하세요.");
        		validation=false;
        		}
        // 	}else if(this.ds_pladef.updatecontrol){
        // 		alert("저장 후 상신하세요.");
        // 		validation=false;
        // 	}
        		if(validation){  
        	//결제버튼 클릭시 상신페이지 연결
        // 		if(writSabun == loginSabun || writSabun == null) {
        // 				//3차결재라인 중 반려가 있을 경우   
        //  			 var nLeft = system.clientToScreenX(this, 10);
        //  	 var nTop = system.clientToScreenY(this, 10);
        //  	 
        //  	 var newChild = new ChildFrame;
        //  	 newChild.init("aprvprogcomm"
        // 					, "absolute", nLeft, nTop, 300, 250, null, null
        // 					, "aprv::APRV_PROG_COMMENT.xfdl");
        //  					
        // 	newChild.set_openalign("center middle");
        // 	newChild.set_dragmovetype("all");
        //  	
        //  	newChild.showModal(this.getOwnerFrame()
        // 						, {stepCode:"007", bookNo:passport}
        // 						, this
        // 						, "modal_callback2");
        // 		}else if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun){
        // 		//결재버튼 클릭시 결재페이지(코멘트) 연결
        // 				 var nLeft = system.clientToScreenX(this, 10);
        //  	 var nTop = system.clientToScreenY(this, 10);
        //  	 
        // 	 var newChild = new ChildFrame;
        //  	 newChild.init("aprvcomm"
        // 					, "absolute", nLeft, nTop, 300, 250, null, null
        // 					, "aprv::APRV_COMMENT.xfdl");
        //  					
        //  	newChild.set_openalign("center middle");
        //  	newChild.set_dragmovetype("all");
        //  	
        //  	newChild.showModal(this.getOwnerFrame()
        //  						, {stepCode:"007", bookNo:passport, dataset:this.ds_position.saveXML()}
        // 						, this
        //  						, "modal_callback2");
        // 		}else{ 
        // 		
        // 		}
        // 		if(BookNo == ""||BookNo == null){
        // 		
        // 		}else{
        // 		  this.aprv_search(BookNo);
        // 		}  
              if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun){
             		//결재버튼 클릭시 결재페이지(코멘트) 연결
        				 var nLeft = system.clientToScreenX(this, 10);
         	 var nTop = system.clientToScreenY(this, 10);
         	 
        	 var newChild = new ChildFrame;
         	 newChild.init("aprvcomm"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "aprv::APRV_COMMENT.xfdl");
         					
         	newChild.set_openalign("center middle");
         	newChild.set_dragmovetype("all");
         	
         	newChild.showModal(this.getOwnerFrame()
         						, {stepCode:"007", bookNo:passport, dataset:this.ds_position.saveXML()}
        						, this
         						, "modal_callback2");
             }else if(writSabun == loginSabun || writSabun == null){
             this.ds_appr.setColumn(0,"aprvlineAdmProcCode","007");
             trace( "get : "+this.ds_appr.getColumn(0,"aprvlineAdmProcCode"));
        this.gfn_transaction(this,"approvalLineListcode","/apprline/ApprovalLineListCode.do",
        "ds_appr=ds_appr",
        "ds_appr=ds_output","","fn_callback");
        		
             }
        	}
        }
            this.modal_callback2 = function(strID,variant){
            trace(variant);
            if(strID=='aprvprogcomm' ||strID=='aprvcomm'){
         		if(variant==''||variant==null){
        		
         		}else{
         		trace("aprvprogcomm결제라인");
         			this.aprv_search(variant);
         		}
             }
            }
            this.getBookNo=function(){
         var BookNo = "";
         	//trace("book sd: "+this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq"));
         //var pSeq=this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq").toString();
         var pSeq="";
         	if(this.edit_lawsuitAdmNo.value!="" && this.ds_pladef.rowcount==0) {
         
         	}
         	else if(typeof(this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq"))=='undefined' ||this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq")==""||this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq")==null){
        		return;
        		}else{
        		pSeq=this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq").toString();
        		} 
           var pTemp =""; 
           // 원피고일련번호
            if( pSeq != "" && pSeq.length == 4 ){
            }else if(  pSeq != "" &&  pSeq.length < 5 ){
               for(i=0; i<3; i++){
                   pSeq = (pTemp+"0") + pSeq;  
               }
            }else{
                pSeq = "0000";
            }
                
        	BookNo = this.edit_lawsuitAdmNo.value   		// 소송관리번호
        	       + "007"                              // 업무구분코드
        		   + this.Combo_sim.value 			// 심급차수	 
        		   + pSeq;								// 원피고일련번호

        
           return BookNo;
        }

        //피고/원고 헤더정렬
        this.grd_Search_OnHeadClick=function(obj,e){

        	this.gfn_GridSort(this.Grid00,this.ds_pladef,e.col,7);
        }

        this.grid_plaint_POP_OnCellPosChanged=function(obj,e){
        this.Static_payment01.set_text("");
        	this.Static_payment02.set_text("");
        	this.Static_payment03.set_text("");
        	this.Static_payment04.set_text("");
        	this.Static_payment05.set_text("");
        	this.Static_payment06.set_text("");
        	trace("기륻 : "+e.row);
        	Gridrow=e.row;
         var pSeq=this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefSeq");
         
         this.ds_position.clearData();
         this.ds_position_code.clearData();
         // 결재라인 불러오기
        	var passport = this.getBookNo();
        	var id=application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	
        	this.aprv_search(passport);
        	
        	this.enable_false();
        	
        	if(this.ds_position.rowcount==0){
        		this.enable_true();
        		return;
        	}else if(this.ds_position.rowcount==1 && this.ds_position.getColumn(0, "aprvprgrInfoWritSabun") == id){
        		this.enable_true();
        		return;
        	}
         
        }
        this.btn_save1_onclick = function(obj,e)
        {
        	var validation=true;
        	this.getPladeCountList();
        	
        // 		if(this.ds_lawsuit.getColumn(0, "lawsuitConcDate") == ""){
        // 			if(this.ds_pladefCount.rowcount == this.ds_pladef.rowcount){
        // 			alert("소송종결일자를 입력해 주세요.");
        // 			this.Calendar0.set_enable(true);
        // 			this.Calendar0.dropdown();
        // 			validation=false;
        // 		}
        // 	}
        }

        this.getPseqJudglist=function(lawsrcrlt,pladef_Sep_Code,pSeq){

        	this.gfn_transaction(this,"getPseqJudglist","comp_lawsuit/getPseqJudglist.do","ds_input=ds_input","ds_pladef=ds_output0","","fn_callback");
        }

        
        this.Combo06_onitemchanged = function(obj,e)
        {
        	trace("콤보댐 : "+this.Combo06.value+" : "+Gridrow);
        	
        	this.ds_pladef.setColumn(Gridrow,"pladefLawConcSepcode",this.Combo06.value);
        }

        this.setinstancedl=function(instcnt){

        
        	if(instcnt==0){
        		this.ds_instanceCode.filter("codeno == '001'");
        			this.Combo07.set_index (0);
        			return;
        	}else if(instcnt==1) {
        		this.ds_instanceCode.filter("codeno < '002'");
        		return;
        	}else if(instcnt==2) {
        		this.ds_instanceCode.filter("codeno < '003'");
        		return;
        	}else if(instcnt==3) {
        		this.ds_instanceCode.filter("codeno < '004'");
        		return;
        	}else if(instcnt==4) {
        		this.ds_instanceCode.filter("codeno < '005'");
        		return;
        	}else if(instcnt==5) {
        		this.ds_instanceCode.filter("codeno < '006'");
        		return;
        	}else if(instcnt==6) {
        		this.ds_instanceCode.filter("codeno < '007'");
        		return;
        	}else if(instcnt==7) {
        		this.ds_instanceCode.filter("codeno < '008'");
        		return;
        	}else if(instcnt==8) {
        		this.ds_instanceCode.filter("codeno < '009'");
        		return;
        	}else if(instcnt==9) {
        		this.ds_instanceCode.filter("codeno < '010'");
        		return;
        	}else if(instcnt==10) {
        		this.ds_instanceCode.filter("codeno < '011'");
        		return;
        	}
        }
        this.setInstanceLevel=function(lawsrcrlt2){

        var strParam="lawsuitAdmNo="+"\""+lawsrcrlt2+"\"";
        trace("strParam : "+strParam);
        	this.gfn_transaction(this,"InstanceCntAll","comp_lawsuit/instanceall.do","","ds_instcnt=ds_output",strParam,"fn_callback");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.comp_lawsuit001, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);
            this.Grid00.addEventHandler("onheadclick", this.grd_Search_OnHeadClick, this);
            this.Grid00.addEventHandler("oncellclick", this.grid_plaint_POP_OnCellPosChanged, this);
            this.Combo06.addEventHandler("onitemchanged", this.Combo06_onitemchanged, this);
            this.Combo_pladefSepCode.addEventHandler("onitemchanged", this.Combo_pladefSepCode_onitemchanged, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Button_reload.addEventHandler("onclick", this.Button_reload_onclick, this);
            this.Combo_sim.addEventHandler("onitemchanged", this.Combo_sim_onitemchanged, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Calendar0.addEventHandler("onchanged", this.calClick, this);
            this.btn_med_approve.addEventHandler("onclick", this.btn_med_approve_OnClick, this);

        };

        this.loadIncludeScript("comp_lawsuit001.xfdl");

       
    };
}
)();
