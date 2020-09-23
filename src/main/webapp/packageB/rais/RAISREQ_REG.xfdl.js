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
                this.set_name("RAISREQ_REG");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_clas_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_loadfiltermode("keep");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeNo\">001</Col><Col id=\"codeName\">구상</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">002</Col><Col id=\"codeName\">의료과실</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">003</Col><Col id=\"codeName\">장기채무부존재</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">004</Col><Col id=\"codeName\">특허침해</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">005</Col><Col id=\"codeName\">영업방해</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">006</Col><Col id=\"codeName\">계약파기</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">007</Col><Col id=\"codeName\">채무불이행</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">008</Col><Col id=\"codeName\">인사사고</Col><Col id=\"useYn\"/></Row><Row><Col id=\"codeNo\">099</Col><Col id=\"codeName\">기타</Col><Col id=\"useYn\"/></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept_code", this);
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

            obj = new Dataset("ds_ClasCode", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DATA\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mgr", this);
            obj._setContents("<ColumnInfo><Column id=\"insaEmail\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_codename", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codename\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">001</Col><Col id=\"codename\">구상</Col></Row><Row><Col id=\"codeno\">002</Col><Col id=\"codename\">의료과실</Col></Row><Row><Col id=\"codeno\">003</Col><Col id=\"codename\">장기채무부존재</Col></Row><Row><Col id=\"codeno\">004</Col><Col id=\"codename\">특허침해</Col></Row><Row><Col id=\"codeno\">005</Col><Col id=\"codename\">영업방해</Col></Row><Row><Col id=\"codeno\">006</Col><Col id=\"codename\">계약파기</Col></Row><Row><Col id=\"codeno\">007</Col><Col id=\"codename\">채무불이행</Col></Row><Row><Col id=\"codeno\">008</Col><Col id=\"codename\">인사사고</Col></Row><Row><Col id=\"codeno\">099</Col><Col id=\"codename\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq_def", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqTempSaveWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRea\" type=\"STRING\" size=\"256\"/><Column id=\"codename\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefRegno\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefTel\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefPos\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefAddr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefClamchg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_def_deleted", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_alessue", this);
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"alesSueIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"alesSueReqCont\" type=\"STRING\" size=\"256\"/><Column id=\"alesSueRepoDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate1\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate2\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_appr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_def", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefRegno\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefTel\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefPos\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefAddr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefClamchg\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqTempSaveWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRea\" type=\"STRING\" size=\"256\"/><Column id=\"codename\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_getRaisNo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "14", "384", "996", "183", null, null, this);
            obj.set_taborder("110");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer09", "absolute", "14", "196", "996", "150", null, null, this);
            obj.set_taborder("34");
            obj.set_text("ImageViewer01");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "60", "266", "944", "75", null, null, this);
            obj.set_taborder("109");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("58");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "60", "70", "944", "25", null, null, this);
            obj.set_taborder("108");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("44");
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No", "absolute", "141", "73", "140", "19", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("txt_raisreq_reqchk", "absolute", "480", "70", "384", "23", null, null, this);
            obj.set_text("* 소제기 의뢰 등록시 의뢰번호는 자동 저장됩니다.");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,11,bold");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "111", "169", "23", null, null, this);
            obj.set_text("소제기 의뢰 기본사항");
            obj.style.set_font("dotum,9,bold");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03", "absolute", "14", "132", "996", "35", null, null, this);
            obj.set_taborder("42");
            obj.set_text("ImageViewer01");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#000000ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05", "absolute", "60", "137", "944", "25", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer06", "absolute", "20", "137", "115", "25", null, null, this);
            obj.set_taborder("40");
            obj.set_text("의뢰자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer07", "absolute", "333", "137", "115", "25", null, null, this);
            obj.set_taborder("39");
            obj.set_text("소송제기분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #969696ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer08", "absolute", "668", "137", "115", "25", null, null, this);
            obj.set_taborder("38");
            obj.set_text("의뢰일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #969696ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "340", "139", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "687", "138", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Req_ID", "absolute", "141", "140", "140", "19", null, null, this);
            obj.set_taborder("37");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_bordertype("normal 0 0");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_Clas_Code", "absolute", "454", "140", "180", "19", null, null, this);
            this.addChild(obj.name, obj);
            var combo_Clas_Code_innerdataset = new Dataset("combo_Clas_Code_innerdataset", this.combo_Clas_Code);
            combo_Clas_Code_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">001</Col><Col id=\"datacolumn\">구상 (001)</Col></Row><Row><Col id=\"codecolumn\">002</Col><Col id=\"datacolumn\">의료과실 (002)</Col></Row><Row><Col id=\"codecolumn\">003</Col><Col id=\"datacolumn\">장기채무부존재 (003)</Col></Row><Row><Col id=\"codecolumn\">004</Col><Col id=\"datacolumn\">특허침해 (004)</Col></Row><Row><Col id=\"codecolumn\">005</Col><Col id=\"datacolumn\">영업방해 (005)</Col></Row><Row><Col id=\"codecolumn\">006</Col><Col id=\"datacolumn\">계약파기 (006)</Col></Row><Row><Col id=\"codecolumn\">007</Col><Col id=\"datacolumn\">채무불이행 (007)</Col></Row><Row><Col id=\"codecolumn\">008</Col><Col id=\"datacolumn\">인사사고 (008)</Col></Row><Row><Col id=\"codecolumn\">099</Col><Col id=\"datacolumn\">기타 (099)</Col></Row></Rows>");
            obj.set_innerdataset(combo_Clas_Code_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Calendar("cal_Req_Date", "absolute", "789", "140", "180", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_type("normal");
            obj.set_autoselect("true");
            obj.set_displaynulltext("일자가 정해지지 않았습니다");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_expr("comp.parent.fn_today()");

            obj = new Static("Static05", "absolute", "15", "175", "169", "23", null, null, this);
            obj.set_text("소제기 의뢰 상세사항");
            obj.style.set_font("dotum,9,bold");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer10", "absolute", "60", "202", "944", "65", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer11", "absolute", "20", "202", "115", "75", null, null, this);
            obj.set_taborder("32");
            obj.set_text("소송제기사유");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #969696ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer12", "absolute", "20", "266", "115", "75", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기타의뢰사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #969696ff");
            obj.style.set_color("#133678ff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "27", "228", "37", "23", null, null, this);
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr0", "absolute", "1045", "385", "135", "17", null, null, this);
            obj.set_taborder("30");
            obj.style.set_background("#ebebebff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr1", "absolute", "1189", "385", "135", "17", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("#ebebebff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr2", "absolute", "1333", "385", "135", "17", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("#ebebebff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "354", "125", "23", null, null, this);
            obj.set_text("피고사항 등록");
            obj.style.set_font("dotum,9,bold");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "390", "984", "171", null, null, this);
            obj.set_taborder("27");
            obj.set_binddataset("ds_def");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"450\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"피고명\"/><Cell col=\"2\" text=\"청구금액\"/><Cell col=\"3\" text=\"주민등록번호\"/><Cell col=\"4\" text=\"연락처\"/><Cell col=\"5\" text=\"주소\"/><Cell col=\"6\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:lawRaisreqDefName\" tooltiptext=\"피고명을 입력해주세요.\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"none\" text=\"bind:lawRaisreqDefClamchg\" mask=\"###,###,###원\" editlimitbymask=\"integer\"/><Cell col=\"3\" edittype=\"mask\" text=\"bind:lawRaisreqDefRegno\" mask=\"######-#######\"/><Cell col=\"4\" edittype=\"mask\" text=\"bind:lawRaisreqDefTel\" mask=\"###-####-####\"/><Cell col=\"5\" text=\"bind:lawRaisreqDefAddr\"/><Cell col=\"6\" edittype=\"mask\" text=\"bind:lawRaisreqDefPos\" mask=\"expr:lawRaisreqDefPos.length == &quot;5&quot;? &quot;#####&quot;: &quot;######&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "573", "125", "23", null, null, this);
            obj.set_text("결재 진행 상태");
            obj.style.set_font("dotum,9,bold");
            obj.set_visible("true");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "143", "573", "437", "23", null, null, this);
            obj.set_text("결재가 완료 되었습니다.");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,9,bold");
            obj.set_visible("false");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static4", "absolute", "11", "600", "115", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "125", "600", "115", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.set_visible("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "239", "600", "115", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static7", "absolute", "11", "624", "115", "25", null, null, this);
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static8", "absolute", "125", "624", "115", "25", null, null, this);
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static9", "absolute", "239", "624", "115", "25", null, null, this);
            obj.style.set_border("1 solid #c0c0c0ff");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Rea", "absolute", "141", "207", "857", "55", null, null, this);
            obj.set_taborder("26");
            obj.set_maxlength("1000");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Etc_Point", "absolute", "141", "274", "857", "59", null, null, this);
            obj.set_taborder("25");
            obj.set_maxlength("1500");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("24");
            obj.set_text("  소제기 의뢰 등록");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 굴림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "28.03%", "71", "55", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 50,0 #8470fdff 50,100 #2406ddff");
            obj.set_enable("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clean", "absolute", "949", "71", "55", "23", null, null, this);
            obj.set_taborder("22");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #5555feff 0,100 #1f1af3ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg", "absolute", "891", "357", "55", "23", null, null, this);
            obj.set_taborder("21");
            obj.set_text("피고추가");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #685dffff 0,100 #1600eeff");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "956", "357", "55", "23", null, null, this);
            obj.set_taborder("20");
            obj.set_text("피고삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #685dffff 0,100 #1600eeff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_app", "absolute", "782", "612", "55", "23", null, null, this);
            obj.set_taborder("19");
            obj.set_text("결재");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #4b57feff 0,100 #1100f8ff");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "841", "612", "55", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #4b57feff 0,100 #1100f8ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "898", "612", "55", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #4b57feff 0,100 #1100f8ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del_rais", "absolute", "955", "612", "55", "23", null, null, this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #4b57feff 0,100 #1100f8ff");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "103.03%", "67", null, "35", "-19.67%", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj.setProperty("popupstyle", "true");
            obj.setProperty("windowed", "true");
            obj.setProperty("taborder", "49");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "45", "138", "37", "23", null, null, this);
            obj.set_taborder("50");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reg_raisreq", "absolute", null, "53.33%", "58", "21", "-148", null, this);
            obj.set_taborder("57");
            obj.set_text("소제기등록");
            obj.set_visible("false");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #685dffff 0,100 #1600eeff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("RAISREQ_REG");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_No","value","ds_raisreq","lawRaisreqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","combo_Clas_Code","value","ds_raisreq","lawRaisreqClasCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","ta_Rea","value","ds_raisreq","lawRaisreqRea");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","ta_Etc_Point","value","ds_raisreq","lawRaisreqEtcPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cal_Req_Date","value","ds_raisreq","lawRaisreqReqDate");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("RAISREQ_REG.xfdl", "Lib::common.xjs");
        this.registerScript("RAISREQ_REG.xfdl", function() {
        //include "Lib::common.xjs";

        // 전역변수 선언
        var NAME_OBJ = {};
        var infoStepCode = "001";

        /*********************************************************
         첫 페이지 onload
         **********************************************************/
        this.RAISREQ_REG_onload = function(obj,e)
        {	
        	// 로그인 ID 값을 의뢰자에 넣기
        	NAME_OBJ.sabun	= application.gds_User.getColumn(0, "sabun");
        	NAME_OBJ.name 	= application.gds_User.getColumn(0, "name");
        		
        	// 공통코드(소송제기분류)조회
        	this.gf_classCodeListLoad("ds_clas_code", "ds_clas_code", "Y", "fnOnLoadCallBack", "D01"); 
        		
        	// 날짜 란 현재날짜로 설정
        	this.cal_Req_Date.set_value(this.gfn_Today());

        	// 결재진행리스트에서 소제기 등록
        	var rtnObj = this.gfnGetArgument();
        	
        	if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        	{
        		NAME_OBJ.lawRaisreqNo = rtnObj.legaladvLawAdvReqNo.substr(0,10);		
        		this.getRaisreqList();
        		this.fnBtnEnable(false);
        	}	
        	// 상시결재리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListEmpl))
        	{
        		NAME_OBJ.lawRaisreqNo = rtnObj.aprvListEmpl.substr(0,10);
        		this.getRaisreqList();
        		this.fnBtnEnable(true)		
        	}	
        	// 전체결재리스트
        	if(!this.gfn_IsNull(rtnObj.aprvListAll))
        	{
        		NAME_OBJ.lawRaisreqNo = rtnObj.aprvListAll.substr(0,10);
        		this.getRaisreqList();
        		this.fnBtnEnable(false);
        	}	
        };

        /*********************************************************
         첫 페이지 내 : 공통코드(소송제기분류)조회 콜백
         **********************************************************/
        this.fnOnLoadCallBack = function(sSvcId,nErrorCode,sErrorMsg)
        {
        	//trace("fnOnLoadCallBack sSvcId: "+sSvcId);

        	if (nErrorCode < 0)
        	{		
        		alert(sSvcId + " : " + sErrorMsg);
        		return;
        	}
        };

        // 날짜 toString
        this.fn_toString = function(objDate)
        {
            var sRtn =  objDate.getFullYear()
                     + (objDate.getMonth()+1).toString().padLeft(2, "0")
                     +  objDate.getDate().toString().padLeft(2, "0");               
        	return sRtn;
        };

        /*********************************************************
         소제기의뢰번호 검색
         **********************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	// 결재 진행 상태 바인딩 중복 된 곳 처리방법
        	this.fnClearStatic();
        	
        	var raiscode = "r0";
        	
        	var v_argParm = new Array(); // 배열선언
                v_argParm[0] = '';
        	
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	 
        	var newChild = new ChildFrame;
        	newChild.init("lawraisreqs"
        	 			, "absolute"
        	 			, nLeft, nTop, 300, 250, null, null
        				, "rais::POP_RAISREQ_SCH.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal
        				(	this.getOwnerFrame()
        				,	{raiscode:raiscode}
        				, 	this
        				, 	"modal_callback"
        				);
        	
        };

        /*********************************************************
         소제기의뢰사항 조회
         **********************************************************/
        this.getRaisreqList = function(param)
        {
        	//	trace("소제기의뢰사항 조회 값(getRaisreqList param) > " + param); //= 2020013010

        	var strSvcid 		= "getRaisreqList";
        	var strController 	= "/rais/getRaisList.do";
        	var strParam  = "lawRaisreqNo=" +"\""+param+"\"";
        		strParam += " lawRaisreqClasCode=" + "\"\"";
        		strParam += " lawRaisreqReqDate1=" + "\"\"";
        		strParam += " lawRaisreqReqDate2=" + "\"\"";
        		strParam += " lawRaisreqRepWtr=" + "\"\"";
        		
        	this.ds_search.setColumn(0,"lawRaisreqNo",NAME_OBJ.lawRaisreqNo);
        	
        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction
        		(	 this
        		,  	 strSvcid
        		, 	 strController
        		,    "ds_input=ds_search"
        		, 	 "ds_raisreq=ds_output"
        		,    strParam
        		,    "fnCallBack"
        		);
        };

        /*********************************************************
         콜백 함수
         **********************************************************/
        this.fnCallBack = function(sSvcId,nErrorCode,sErrorMsg)
        {	
        	var sabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	
        	if (nErrorCode < 0)
        	{		
        		alert(sSvcId + " : " + sErrorMsg);
        		//alert("데이터가 정상적으로 조회되지 않았습니다.\n" + strErrMessage);
        		return;
        	}
        	
        	switch (sSvcId)
        	{
        		case "getRaisreqList":		// 조회
        			
        			// 결재 두번 눌러야 됐던 곳 해결한 곳
        			var BookNo = this.ds_raisreq.getColumn(0, "lawRaisreqNo", sabun) + "001" + "000";
        			//alert("BookNo 앞부분" + this.ds_raisreq.getColumn(0, "lawRaisreqReqId"));
        			//alert("BookNo =>" + BookNo);
        			this.aprv_search(BookNo);
        			this.selectDef(this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqNo"));
        			
        			break;	
        		
        		case "getMgrList":
        			this.fnBtnEnable();
        			alert("저장되었습니다.");
        			
        			break;
        			
        		case "getRaisreqDefList":
        			//trace("getRaisreqDefList"+ds_def.saveXML());
        			
        			break;
        			
        		case "getRaisreqDefSelectList":
        			
        			break;
        			
        		case "insertDefAll":
        			//trace(this.ds_def.saveXML());
        			this.fnBtnEnable();
        			alert("저장되었습니다.");
        			
        			break;
        			
        		case "insertRaisreq":
        			this.fnBtnEnable();
        			alert("소제기 의뢰 추가되었습니다.");
        			
        			break;
        			
        		case "insert":
        			this.fnBtnEnable(true);
        			alert("저장 되었습니다.");
        			this.aprv_search(BookNo);

        			break;
        			
        		case "update":
        			this.fnBtnEnable(true);
        			alert("수정되었습니다.");
        			
        			break;
        			
        		case "delete":
        			this.fnBtnEnable();
        			alert("되었습니다.");

        			break;
        			
        		case "selectDef":
        			//trace("selectDef : "+this.ds_def.saveXML());
        			
        			break;
        		
        		case "law_suitSelect":
        			this.fnBtnEnable();
        			
        			this.transaction
        				(	"pla_defSelect"
        				,	"svcurl::ales_sue/pla_defSelect.do"
        				,	""
        				,	"ds_pladef=ds_output"
        				,	strParam
        				,	"fnCallback"
        				); 
        			
        			break;
        		
        		case "pla_defSelect":
        			this.fnBtnEnable();
        			this.transaction
        				(	"ales_sueSelect"
        				, 	"svcurl::ales_sue/ales_sueSelect.do"
        				, 	""
        				, 	"ds_alessue=ds_output"
        				, 	strParam
        				, 	"fnCallback"
        				); 
        			
        			break;
        			
        		case "outList":

        			// 결재라인 박스 생성.			
        			var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        			var wtrSabun1 = this.ds_position.getColumn(0, "aprvInfoSabun");
        			this.ds_position_code.clearData();
        			
        			for(var i=0 ; i < this.ds_position.getRowCount() ; i++)
        			{
        				this.ds_position_code.addRow();
        				
        				if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y")
        				{	// 결재완료
        					this.ds_position_code.setColumn(i, "codeNo","Y");
        					this.ds_position_code.setColumn(i, "codeName","결재완료");
        					static2="결재완료";
        				}
        				else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N")
        				{	//결재대기
        					this.ds_position_code.setColumn(i, "codeNo","N");
        					this.ds_position_code.setColumn(i, "codeName","결재대기");
        					static2="결재완료";
        				}
        				else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z")
        				{	//반려
        					this.ds_position_code.setColumn(i, "codeNo","Z");
        					this.ds_position_code.setColumn(i, "codeName","반려");
        				}
        				else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A")
        				{	//전결
        					this.ds_position_code.setColumn(i, "codeNo","A");
        					this.ds_position_code.setColumn(i, "codeName","전결");		
        				}			
        			}
        				if(this.ds_position.rowcount > 0)
        				{
        					//this.aprv_lock();
        					//alert(this.ds_position.rowcount);
        					//alert("데이터 잘 받는지 체크............ " + this.ds_position.saveXML());
        					// 상신자만 수정하고 결재자는 수정 못하게
        					var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        					//alert("로그인 사번 >>> " + loginSabun);
        					var wtrSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        					//alert("상신한 사람 사번 >>> " + wtrSabun);
        					
        					if(loginSabun==wtrSabun)
        					{
        						//alert("같은 사람 OOOOOO");
        						this.fnBtnEnable(true);
        					}
        					else
        					{
        						//alert("다른 사람 XXXXXX");
        						this.fnBtnEnable(false);
        					}
        				}
        				else
        				{
        					//alert(this.ds_position.rowcount);
        					//alert("여기요");
        					//alert("RESULT ::: " + this.ds_position.saveXML());
        					this.fnBtnEnable(false);
        				}
        				
        			break;
        	}
        			//alert("RESULT ::: " + this.ds_position.saveXML());
        			// 결재진행상태 바인딩 
        			this.fn_staSet("Static4","Static11","Static5","Static7","Static8","Static9");
        };

        // 결재진행상태 바인딩 ststic
        this.fnClearStatic = function()
        {
        	this["Static4"].set_text("");	// 1차 결재자 성명
        	this['Static11'].set_text("");	// 2차 결재자 성명
        	this['Static5'].set_text("");	// 3차 결재자 성명
        	this['Static7'].set_text("");	// 1차 결재자 결재진행상태
        	this['Static8'].set_text("");	// 2차 결재자 결재진행상태
        	this['Static9'].set_text("");	// 3차 결재자 결재진행상태
        	
        };

        // 결재진행상태 바인딩 되는 곳
        this.fn_staSet = function(sta1,sta2,sta3,val1,val2,val3) 
        {	
        	this.fnClearStatic();
        	var bCheck 	= true;
        	var rCnt 	= this.ds_position_code.getRowCount();
        	
        	// Y=결재완료, N=결재대기, Z=반려, A=전결
        	for(var i = 0 ; i < this.ds_position_code.rowcount ; i++)
        	{
        		if(i == 0) // 결재 진행 상태 1차 결재자 
        		{
        			var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        			//trace("상신자(writSabun) >> " + writSabun);
        			var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
        			//trace("1차 결재자(infoSabun_01) >> " + infoSabun_01);
        			var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
        			//trace("2차 결재자(infoSabun_02) >> " + infoSabun_02);
        			var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
        			//trace("3차 결재자(infoSabun_03) >> " + infoSabun_03);
        			var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        			//trace("로그인사번(loginSabun) >> " + loginSabun);
        			
        			if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun)
        			{
        				this[sta1].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        				this[val1].set_text(this.ds_position_code.getColumn(i, "codeName"));
        				if(writSabun != loginSabun)	bCheck = false;
        			}
        			else if(writSabun == loginSabun || writSabun == null)
        			{
        				this[sta1].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        				this[val1].set_text(this.ds_position_code.getColumn(i, "codeName"));
        				//if(writSabun == loginSabun || writSabun == null)	bCheck = true;
        				if(this.ds_position_code.getColumn(i, "codeNo") == 'Y')	bCheck = false; // 중간에 결재자가 결재하면 상신자도 수정 못하게 // else 는 자연스럽게 수정 가능 즉, 초기 상신자는 수정 가능
        			}
        		}
        		else if (i == 1) // 결재 진행 상태 2차 결재자 
        		{		
        			this[sta2].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        			this[val2].set_text(this.ds_position_code.getColumn(i, "codeName"));
        			if(this.ds_position_code.getColumn(i, "codeNo") == 'Y')	bCheck = false;
        		} 
        		else if (i == 2)  // 결재 진행 상태 3차 결재자 
        		{
        			this[sta3].set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        			this[val3].set_text(this.ds_position_code.getColumn(i, "codeName"));
        			if(this.ds_position_code.getColumn(i, "codeNo") == 'Y')	bCheck = false;
        		}
        	}
        	
        	this.fnBtnEnable(bCheck);	// var bCheck 	= true; 선언 후 사용
        	application.gds_Params.deleteAll();
        };

        /*********************************************************
         피고 추가 버튼
         **********************************************************/
        this.btn_reg_onclick = function(obj,e)
        {	
        	this.btn_del.set_enable(true);
        	var row = this.ds_def.addRow();
        	//this.ds_def.setRowType(row, Dataset.ROWTYPE_INSERT); // 추가된 행의 상태값	
        };

        /*********************************************************
         피고 삭제 버튼
         **********************************************************/
        this.btn_del_onclick = function(obj,e)
        {
        //this.gfn_IsNull(this.edt_No.value) ||
        	if(this.ds_def.getRowCount() == 0){
        		alert("삭제할 피고가 존재하지 않습니다.");
        		this.btn_del.set_enable(false);
        	}
        	else
        	{
        		var yn = confirm("해당 피고를 삭제하시겠습니까?");
        		
         		if(yn == true)
         		{
        			//삭제할 시, 기존 데이터베이스에 존재하고 있는 것을 삭제하는지 아니면 일시적으로 만들었다가 다시 일시적으로 없애는 건지 검사
        			//삭제될 행의 데이터를, 변수로 설정 
        			var delno = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqNo");
        			var delseq = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefSeq");
        			
        			this.ds_def.deleteRow(this.ds_def.rowposition);			
        			//this.save_def("deleteDepoList");
        			
        			if(delno != null && delno!= null)
        			{
        				this.ds_def_deleted.addRow();
        			}
        			else
        			{
        				return;
        			}
        			//alert("기존 데이터 삭제 데이터셋에 추가"+this.ds_def_deleted.getRowCount());
        			this.ds_def_deleted.setColumn(this.ds_def_deleted.getRowCount() - 1, "lawRaisreqNo", delno);
        			this.ds_def_deleted.setColumn(this.ds_def_deleted.getRowCount() - 1, "lawRaisreqDefSeq", delseq);
        			//this.ds_def_deleted.setRowType(this.ds_def_deleted.getRowCount() - 1, Dataset.ROWTYPE_DELETE);
        		}
        		//trace(this.ds_def_deleted.getRowCount());
        	}
        };

        /*********************************************************
         그리드 : oncelldblclick
         그리드에서 셀을 더블블 클릭했을 때 발생하는 이벤트
         **********************************************************/
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var lawRaisreqNo = this.edt_No.text;
        	var defNo = this.ds_def.getColumn(e.row,"lawRaisreqDefSeq");
        	
        	// 셀에 값이 공백일 경우 마스크 기본타입으로 처리
        	if(e.cell == 4 || e.cell == 5){
        		var mTel = this.ds_def.getColumn(this.ds_def.rowposition,"lawRaisreqDefTel");
        		if(mTel.length == 0){
        			return '###-####-####';
        		}
        	}
        };

        /*********************************************************
         그리드 : ontextchanged
         그리드에서 값이 수정될 때 update로 지정
         **********************************************************/
        this.Grid00_ontextchanged = function(obj,e)
        {		
        	if(this.ds_def.getRowType(this.ds_def.rowposition) == "4")	//삽입이 아닌 경우에만
        	{
        		return;	
        	}

        	if(this.ds_def.getRowType(this.ds_def.rowposition) != "2")	//삽입이 아닌 경우에만
        	{
        		this.ds_def.setRowType(this.ds_def.rowposition, Dataset.ROWTYPE_UPDATE); 
        	}
        	//alert(this.ds_def.getRowType(e.row));
        };

        /*********************************************************
         그리드 : onkeydown
         그리드에 포커스가 있는 상태에서 키보드의 키가 눌렸을 때 발생하는 이벤트
         **********************************************************/
        this.Grid00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{	//엔터키
        		trace(obj.getCellPos());
        	}
        };

        /*********************************************************
         그리드 : ontextchange / 정규식
         **********************************************************/
        this.Grid00_ontextchange = function(obj,e)
        {
        	//alert("TEST(obj) > " + obj); //= [object Grid]
        	//alert("TEST(e) > " + e);	 //= [object GridTextChangeEvent]

        	// 그리드 내 피고명 한글만 입력 되게	
        	if(e.cell == 1)
        	{
        		var objRegExp = new RegExp("[^ㄱ-힣 ]", "g");      
        		var objResult = objRegExp.exec( e.chartext );
        		
        		if (objResult == null)
        		{
        			return true;
        		} 
        		else 
        		{
        			return false;
        		}
        	}
        };

        /*********************************************************
         그리드 : oncelldblclick
         **********************************************************/
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	// 셀에 값이 공백일 경우 마스크 기본타입으로 처리
        	if(e.cell == 4)
        	{
        		var mTel = this.ds_def.getColumn(this.ds_def.rowposition,"lawRaisreqDefTel");
        		if(mTel.length == 0)
        		{
        			return '###-####-####';
        		}
        	}
        	
        	// 주소 선택시
        	if(e.cell >= 5)
        	{	
        		this.Plugin00.callMethod("Navigate2", "http://localhost:8080/pd_law_nexa/jsp/zipcodeSearch.jsp"); // JKIM_2020.02.17 : move to jsp directory
        		this.lawRaisreqDefPosChange(e);
        	}
        };

        /*********************************************************
         그리드 내 우편 번호 검색 후 값 받기
         **********************************************************/
        var lawRaisreqDefPos_e ="";
        this.Plugin00_TitleChange = function()
        {
        	if(arguments[0] != "TITLE"){
        		var postArr = arguments[0].split("_");
        		this.ds_def.setColumn(lawRaisreqDefPos_e.row,"lawRaisreqDefPos",postArr[0]);
        		this.ds_def.setColumn(lawRaisreqDefPos_e.row,"lawRaisreqDefAddr",postArr[1]);
        	}
        }

        this.lawRaisreqDefPosChange = function(e)
        {
        	lawRaisreqDefPos_e=e;
        }

        this.Grid00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		//trace = function(obj.getCellPos());
        	}
        };

        /*********************************************************
         피고 조회
         **********************************************************/
        this.setDefList = function()
        {
        	if(this.ds_def.getRowCount() != 0)
        	{
        		for(var i=0; i<this.ds_def.getRowCount(); i++)
        		{
        			if(this.ds_def.getColumn(i,"lawRaisreqNo").length<8)
        			{
        				this.ds_def.setColumn(i,"lawRaisreqNo",this.ds_raisreq.getColumn(this.ds_raisreq.row,"lawRaisreqNo"));
        			}
        		}
        	}
        	
        	var strSvcID = "raisreqDefAllProc";
        	var strURL = "svc::raisreq/RaisreqDefAllProc.do";
        	var strInDatasets = "ds_input=ds_def:u";
        	var strOutDatasets = "";
        	var strArgument = "voClass='pdsystem.raisreq.model.RaisreqDefVO'";
        	var strCallbackFunc = "fnCallBack";	
           
        	Transaction
        		(	strSvcID
        		,	strURL
        		,	strInDatasets
        		,	strOutDatasets
        		,	strArgument
        		,	strCallbackFunc
        		);
        };

        /*********************************************************
         삭제 버튼 onclick
         **********************************************************/
        this.btn_del_rais_onclick = function(obj,e)
        {
        	if(this.ds_raisreq.getColumn(0, "lawRaisreqNo") == null)
        	{
        		alert("이미 조회된 소제기만 삭제 가능합니다");
        		return;
        	}
        	
        	this.save_control("delete");
        	
        	//alert("기존의 소제기를 삭제하였습니다.");
        	this.reload(); //초기화 
        };

        /*********************************************************
         저장 버튼 onclick
         **********************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	// 입력란 검사
        	if(this.cal_Req_Date.value == null)
        	{	
        		alert ("의뢰일자를 입력해주세요.");
        	}
        	else if(this.combo_Clas_Code.value == null || this.combo_Clas_Code.value == "")
        	{
        		alert ("코드 분류를 선택해주세요.");
        	}
        	else if(this.edt_Req_ID.value == null)
        	{
        		alert ("의뢰자를 선택해주세요.");
        	}
        	else if(this.ta_Rea.getLength() < 1)
        	{
        		alert ("소송제기사유를 입력해주세요.");	
        	}
        	else
        	{
        		// 피고란 공란 검사
        		for(var i= 0; i< this.ds_def.getRowCount(); i++)
        		{ 
        			if
        				(
        				 this.ds_def.getColumn(i,"lawRaisreqDefName") == null || 
        				 this.ds_def.getColumn(i,"lawRaisreqDefClamchg") == null || 
        				 this.ds_def.getColumn(i,"lawRaisreqDefRegno") == null || 
        				 this.ds_def.getColumn(i, "lawRaisreqDefTel") == null ||
        				 this.ds_def.getColumn(i,"lawRaisreqDefAddr") == null || 
        				 this.ds_def.getColumn(i, "lawRaisreqDefPos") == null
        				 )
        			{
        				alert("모든 피고 정보를 입력해주세요");
        				return;
        			}
        		}
        		
        		//소제기 의뢰피고 수에 따른 연산
        		for(var i= 0; i< this.ds_def.getRowCount(); i++)
        		{ 
        			// this.ds_def.setColumn(i,"lawRaisreqNo",edt_No.value);
        			trace("현재 "+i+"행의 rowtype= "+this.ds_def.getRowType(i));
        			
        			//삽입
        			
        			//소제기 의뢰번호 삽입
        			if(this.ds_raisreq.getColumn(0,"lawRaisreqNo") == null)	//기존 소제기 의뢰 검색하지 않은 경우
        			{ 
        				if(this.edt_No.text != "") //소제기 의뢰번호가 입력된 경우
        				{
        					this.ds_def.setColumn(i,"lawRaisreqNo", this.edt_No.text); //입력란에 있는 값을 가져와서 피고 데이터셋에 값을 넣기
        				}
        					this.ds_def.setRowType(i, Dataset.ROWTYPE_INSERT);
        			}
        			else if(this.ds_raisreq.getColumn(0,"lawRaisreqNo") != null)	//기존 소제기 의뢰 검색한 경우
        			{
        				if(this.ds_def.getColumn(i,"lawRaisreqNo") == null || this.ds_def.getColumn(i,"lawRaisreqDefSeq") == null)	//중간에 추가한 피고에 의뢰 번호가 없는 경우
        				{ 
        					this.ds_def.setColumn(i,"lawRaisreqNo", this.ds_raisreq.getColumn(this.ds_raisreq.rowposition,"lawRaisreqNo"));
        					//this.ds_def.setRowType(i, Dataset.ROWTYPE_INSERT); //해당 소제기 의뢰 행은 삽입 모드
        				}
        			}
        		}
        		
        		//trace(this.ds_raisreq.saveXML());
        		//trace(this.ds_def.saveXML());
        				
        		//트랜젝션 실행
        		if(this.ds_raisreq.getColumn(0,"lawRaisreqNo") == null)
        		{
        			var sabun = application.gds_User.getColumn(0, "sabun");
        			this.ds_raisreq.setColumn(0,"lawRaisreqReqId", sabun);
        			//this.alert(this.ds_raisreq.getColumn(0,"lawRaisreqReqId"));
        			this.save_control("insert");
        		}
        		else if(this.ds_raisreq.getColumn(0,"lawRaisreqNo") != null)
        		{
        			this.fnBtnEnable(true);
        			if(	!this.gfnDsChangeCheck(this.ds_def) && !this.gfnDsChangeCheck(this.ds_raisreq))
        			{
        				alert("수정할 값이 없습니다.");
        				return;
        			}
        			
        			this.save_control("update");
        		}
        	}
        };

        
        /*********************************************************
         소제기, 피고 제어
         **********************************************************/
        this.save_control = function(Svcid)
        {	
        	var inDataset = "";
        	var outDataset = "";
        	var status = "";
        	
        	switch(Svcid)
        	{
        		case "insert":
        			
        			inDataset = "ds_input_def=ds_def:A ds_input_rais=ds_raisreq:A";
        			outDataset = "ds_raisreq=ds_output";
        			status = "insert";
        			
        			this.gfn_transaction
        				(	this
        				,	Svcid
        				,	"/rais/controlRaisDefAll.do"
        				,	inDataset
        				,	outDataset
        				,	"status="+"\""+status+"\""
        				,	"fnCallBack"
        				);
        				
        			break;
        			
        		case "update":
        			
        			//삭제된 피고 기본키를 담는 ds_def_deleted 데이터셋에 행이 존재하지 않는지 파악
        			if(this.ds_def_deleted.getRowCount() > 0)
        			{
        				inDataset = "ds_input_def=ds_def:A ds_input_rais=ds_raisreq:A ds_input_def_deleted=ds_def_deleted:A";
        				//alert("삭제 행에 추가 트랜젝션");
        			}
        			else
        			{
        				inDataset = "ds_input_def=ds_def:A ds_input_rais=ds_raisreq:A";
        			}
        			
        			status = "update";
        			
        			this.gfn_transaction
        				(	this
        				,	Svcid
        				,	"/rais/controlRaisDefAll.do"
        				,	inDataset
        				,	outDataset
        				,	"status="+"\""+status+"\""
        				,	"fnCallBack"
        				);
        			break;		
        		case "delete":
        			
        			inDataset = "ds_input_def=ds_def:A ds_input_rais=ds_raisreq:A";
        			status = "delete";
        			
        			this.gfn_transaction
        				(	this
        				,	Svcid
        				,	"/rais/controlRaisDefAll.do"
        				,	inDataset
        				,	outDataset
        				,	"status="+"\""+status+"\""
        				,	"fnCallBack"
        				);
        			break;	
        		default:
        			break;
        	}
        };

        /*********************************************************
         
         **********************************************************/
        this.save_def = function(Svcid)
        {
        	var strSvcid = Svcid;
        	var strController = "rais/saveDefAll.do";
        	var strParam = "";

        	gfn_transaction
        		(	this
        		,	strSvcid
        		,	strController
        		,	"ds_input=ds_depo:U"
        		,	"ds_def=ds_output"
        		,	strParam
        		,	"fnCallBack"
        		);
        };

        /*********************************************************
         모달창 콜백
         **********************************************************/
        this.modal_callback = function(strID,variant)
        {
        	//alert("모달콜백sSvcId===" + strID); //= lawraisreqs
        	//alert("모달콜백variant==" + variant); //= 2020013010
        	
        	if(strID == "lawsuit_popup")
        	{
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}

        		if(this.ds_mgr.getRowCount() < 1){
        			this.ds_mgr.addRow();
        		}

        		var idx = variant.indexOf("&"); //인덱스 번호: 10 
        		var sabun = variant.substring(0, idx);
        		var name = variant.substring(idx+1);
        		
        		this.ds_mgr.setColumn(0, "insaSabun", sabun);
        		this.ds_mgr.setColumn(0, "insaName", name);
        	
        		//이미 검색한 상태에서 의뢰자를 검색하여 결과를 나타내면 수정모드로 전환
        		if(this.ds_raisreq.getColumn(0,"lawRaisreqNo") != null)
        		{
        			this.ds_raisreq.setColumn(0,"lawRaisreqReqId", sabun);
        			this.ds_raisreq.setRowType(0, Dataset.ROWTYPE_UPDATE);
        			//alert(this.ds_raisreq.getRowType(0));
        		}
        	}
        	else if(strID == "lawraisreqs")	// 소제기의뢰번호 검색 ID
        	{
        		//var params = variant.split("/");
        		//num = params[0];
        		
        		NAME_OBJ.lawRaisreqNo = variant

        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        		else
        		{
        			this.getRaisreqList();
        		}
        	}
        	else if (strID == "POP_RAISREQ_DEF")
        	{
        		var params = variant.split("/");

        		for(var i=0; i<this.ds_def.getRowCount(); i++)
        		{
        			if
        			(
        			this.ds_def.getColumn(i, "lawRaisreqDefName") == params[3] 
        			&& this.ds_def.getColumn(i, "lawRaisreqDefClamchg") == params[7]
        			&& this.ds_def.getColumn(i, "lawRaisreqDefRegno") == params[2]
        			&& this.ds_def.getColumn(i, "lawRaisreqDefTel") == params[4]
        			&& this.ds_def.getColumn(i, "lawRaisreqDefPos") == params[5]
        			&& this.ds_def.getColumn(i, "lawRaisreqDefAddr") == params[6]
        			//&& this.ds_def.getColumn(i, "lawRaisreqReqId") == params[8]
        			)
        			{
        				alert("중복된 피고정보입니다");
        				return;
        			}
        		}
        		
        		if(this.ds_raisreq.getColumn(0, "lawRaisreqNo") != null ||
        		  (this.ds_mgr.getColumn(0, "insaName") != null && this.ds_mgr.getColumn(0, "insaSabun") != null))
        		{
        			var newrow = this.ds_def.addRow();
        			
        			//this.ds_def.setColumn(newrow, "lawRaisreqReqId", params[8]);
        			this.ds_def.setColumn(newrow, "lawRaisreqDefName", params[3]);
        			this.ds_def.setColumn(newrow, "lawRaisreqDefClamchg", params[7]);
        			this.ds_def.setColumn(newrow, "lawRaisreqDefRegno", params[2]);
        			this.ds_def.setColumn(newrow, "lawRaisreqDefTel", params[4]);
        			this.ds_def.setColumn(newrow, "lawRaisreqDefPos", params[5]);
        			this.ds_def.setColumn(newrow, "lawRaisreqDefAddr", params[6]);
        			
        			this.ds_def.setColumn(newrow, Dataset.ROWTYPE_INSERT);
        		}		
        	}
        	else if(strID=='ApprovalReq')
        	{
        		var BookNo = this.ds_raisreq.getColumn(0, "lawRaisreqNo", sabun) + "001" + "000";
        		this.aprv_search(BookNo);
        	}
        };

        /*********************************************************
         
         **********************************************************/
        this.selectRais = function(variant)
        {
        	var strParam  = "lawRaisreqNo=" +"\""+variant+"\"";
        	trace(strParam);
        	
        	this.gfn_transaction(this,
        						"getRaisreqView",
        						"rais/getRaisreqView.do",
        						"",
        						"ds_codename=ds_output2",
        						strParam,
        						"fnCallBack"
        						);
        	
        };

        /*********************************************************
         
         **********************************************************/
        this.selectDef = function(variant)
        {
        	var strParam  = "lawRaisreqNo=" + variant;
        	
        	this.gfn_transaction(this,
        						"getRaisreqDefSelectList",
        						"rais/getRaisreqDefSelectList.do",
        						"",
        						"ds_def=ds_output",
        						strParam,
        						"fnCallBack"
        						);
        	//alert(this.ds_def.getRowCount());
        };

        /*********************************************************
         결재 버튼 
         **********************************************************/ 
        this.btn_zip_onclick = function(obj,e)
        {
        	//this.ds_position.clearData();
        	//this.ds_position_code.clearData();

        	var validation=true;
        	// trace("@@@@@@@@@@@" + validation);
        	
        	trace(this.ds_position.getColumn(0, "aprvprgrInfoWritSabun"));
         	
         	var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        	//trace("상신자(writSabun) >> " + writSabun);
        	var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
        	//trace("1차 결재자(infoSabun_01) >> " + infoSabun_01);
        	var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
        	//trace("2차 결재자(infoSabun_02) >> " + infoSabun_02);
        	var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
        	//trace("3차 결재자(infoSabun_03) >> " + infoSabun_03);
        	var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	//trace("로그인사번(loginSabun) >> " + loginSabun);
        		
        	// BookNo 결재관리대장 관련 번호임 
            var BookNo = this.ds_raisreq.getColumn(0, "lawRaisreqNo") + infoStepCode + "000";
        	//trace("BookNo >> " + BookNo); //= 소제기의뢰번호 2020013010 001000
        	
        	// 소제기 의뢰 등록 유효성 체크
        	if(this.edt_No.value=='' || typeof(this.edt_No.value)=='undefined')
        	{
        		alert("소제기의뢰번호를 조회해 주십시오.");
        		this.edt_No.setFocus();
        		validation=false;
        	} 
        	else if((this.gfn_Trim(this.combo_Clas_Code.value)).length<=0) 
        	{
        		alert("소송제기분류를 선택해 주십시오.");
        		this.combo_Clas_Code.dropdown();
        		validation=false;
        	} 
        	else if((this.gfn_Trim(this.cal_Req_Date.value)).length<=0) 
        	{
        		alert("의뢰일자를 지정해 주십시오.");
        		this.cal_Req_Date.setFocus();
        		validation=false;
        	} 
        	else if((this.gfn_Trim(this.ta_Rea.value)).length<=0) 
        	{
        		alert("소송제기사유를 작성해 주십시오.");
        		this.ta_Rea.setFocus();
        		validation=false;
        	} 
        	else 
        	{
        		validation=true;
        	}
        	if(validation == true)
        	{
        		if(this.ds_alessue.getRowType(this.ds_alessue.rowposition) == 4)
        		{
        			alert("먼저 작성 내용을 저장해주세요.");
        			return false;
        		}
        		
        		var strParam="aprvprgrInfoStepCode="+"\""+infoStepCode+"\"";//결재 진행 코드
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		 
        		var newChild = new ChildFrame();
        		
        		//alert("데이터 잘 받는지 체크............ " + this.ds_position.saveXML());
        		
        		// 결재자
        		if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun)
        		{
        			//alert("나는 결재자~");
        			this.fnBtnEnable(false); 
        			
        			newChild.init
        				(	"ApprovalReq"
        				,	"absolute"
        				,	nLeft
        				,	nTop
        				,	300
        				,	250
        				,	null
        				,	null
        				,	"aprv::APRV_COMMENT.xfdl"
        				);
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			newChild.showModal
        				(	this.getOwnerFrame()
        				,	{stepCode:"001", bookNo:BookNo, dataset:this.ds_position.saveXML()}
        				,	this
        				,	"modal_callback"
        				);
        		}
        		
        		// 상신자
        		else if(writSabun == loginSabun || writSabun == null)
        		{
        			//alert("나는 상신자~");
        			this.fnBtnEnable(true);
        			
        			newChild.init
        				(	"ApprovalReq"
        				,	"absolute"
        				,	nLeft
        				,	nTop
        				,	300
        				,	250
        				,	null
        				,	null
        				,	"aprv::APRV_PROG_COMMENT.xfdl"
        				);
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			newChild.showModal
        				(	this.getOwnerFrame()
        				,	{stepCode:"001", bookNo:BookNo}
        				,	this
        				,	"modal_callback"
        				);
        		}
        		else
        		{
        			
        		}
        		if(BookNo == "" || BookNo == null)
        		{
        		
        		}
        		else
        		{
        			this.aprv_search(BookNo);
        		}
        	}
        };

        /*********************************************************
         결재라인 불러오기
         **********************************************************/
        this.aprv_search = function(BookNo)
        {
        	//this.ds_position.clearData();
        		
        	var strSvcid = "outList";
        	var strUrl = "svcurl::approval/approvalLineList.do";
        	var strInputDs = ""; 
        	var strOutputDs = "ds_position=ds_output";
        	var strParam = "";
        	var strFnCallback = "fnCallBack";
        	
        	strParam += "APRVPRGR_INFO_STEP_CODE=" + "\"" + infoStepCode + "\""; 
        	strParam += " APRVPRGR_INFO_BOOK_NO=" + "\"" + BookNo + "\""; 

        	//trace("strParam >>>>>>>>>>>" + strParam);
        	
        	this.transaction
        		(	strSvcid
        		,	strUrl
        		,	strInputDs
        		,	strOutputDs
        		,	strParam
        		,	strFnCallback
        		);
        	//this.ds_position.clearData();
        	//this.ds_position_code.clearData();
        };

        /*********************************************************
         의뢰자 관련
         **********************************************************/
        this.ds_raisreq_onvaluechanged = function(obj,e)
        {
        	//alert("obj >>>>>" + obj);
        	//alert("e >>>>>>>" + e);
        	
        	var edtStr = obj.getColumn(obj.rowposition,'insaName') + '(' + obj.getColumn(obj.rowposition,'lawRaisreqReqId') + ')';
        	if(this.gfn_IsNull(obj.getColumn(obj.rowposition,'insaName')))	edtStr = NAME_OBJ.name +'(' + NAME_OBJ.sabun + ')';
        	
        	//alert("edtStr >>>> " + edtStr);
        	this.edt_Req_ID.set_value(edtStr);
        };

        /*********************************************************
         버튼(enable, disable 함수)
         **********************************************************/
        this.fnBtnEnable = function(bool1,bool2)
        {
        	if(this.gfn_IsNull(bool1))	bool1=false;
        	if(this.gfn_IsNull(bool2))	bool2=bool1;
        	
        	//입력란 비활성화
        	this.ta_Rea.set_enable(bool1);			// 소송제기사유 
        	this.ta_Etc_Point.set_enable(bool1);	// 기타의뢰사항
        	
        	this.btn_del.set_enable(bool2);			// 피고삭제(버튼)
        	this.btn_reg.set_enable(bool2);			// 피고추가(버튼)
        	//this.btn_def_search.set_enable(bool2);// 
        	
        	this.combo_Clas_Code.set_enable(bool1);	// 소송제기분류(콤보)
        	this.cal_Req_Date.set_enable(bool1);	// 의뢰일자(달력)
        	
        	this.btn_save.set_enable(bool1);		// 저장(버튼)
        	this.btn_del_rais.set_enable(bool1);	// 삭제(버튼)
        	
        	//this.edit_cnt_num.set_enable(bool2);	// 
        	this.Grid00.set_enable(bool2);			// 피고사항등록(그리드)
        	
        };

        /*********************************************************
         초기화 버튼 onclick
         **********************************************************/
        this.btn_clean_onclick = function(obj,e)
        {
            this.ds_raisreq.clearData();
        	this.ds_clas_code.clearData();
        	//this.ds_def.clearData();
        	//this.ds_def_deleted.clearData();
        	this.reload();
        };

        /*********************************************************
         닫기 버튼 onclick
         **********************************************************/
        this.btn_close_onclick = function(obj,e){
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("닫기 버튼 실행 : ");
            Iject.$["workFrame"].frames[winId].destroy();
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_raisreq.addEventHandler("onvaluechanged", this.ds_raisreq_onvaluechanged, this);
            this.addEventHandler("onload", this.RAISREQ_REG_onload, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer09.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer02.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer03.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer06.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer07.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer08.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.edt_Req_ID.addEventHandler("oneditclick", this.edt_Req_ID_oneditclick, this);
            this.combo_Clas_Code.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.cal_Req_Date.addEventHandler("oneditclick", this.cal_Req_Date_oneditclick, this);
            this.ImageViewer11.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer12.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Grid00.addEventHandler("onkeydown", this.Grid00_onkeydown, this);
            this.Grid00.addEventHandler("ontextchanged", this.Grid00_ontextchanged, this);
            this.Grid00.addEventHandler("ontextchange", this.Grid00_ontextchange, this);
            this.ta_Rea.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);
            this.ta_Rea.addEventHandler("onsetfocus", this.textarea_onsetfocus, this);
            this.ta_Rea.addEventHandler("ontextchanged", this.textarea_ontextchanged, this);
            this.ta_Etc_Point.addEventHandler("oneditclick", this.ta_Etc_Point_oneditclick, this);
            this.ta_Etc_Point.addEventHandler("onsetfocus", this.textarea_onsetfocus, this);
            this.ta_Etc_Point.addEventHandler("ontextchanged", this.textarea_ontextchanged, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clean.addEventHandler("onclick", this.btn_clean_onclick, this);
            this.btn_reg.addEventHandler("onclick", this.btn_reg_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_app.addEventHandler("onclick", this.btn_zip_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_del_rais.addEventHandler("onclick", this.btn_del_rais_onclick, this);
            this.Plugin00.addEventHandler("TitleChange", this.Plugin00_TitleChange, this);
            this.btn_reg_raisreq.addEventHandler("onclick", this.btn_reg_raisreq_onclick, this);

        };

        this.loadIncludeScript("RAISREQ_REG.xfdl");

       
    };
}
)();
