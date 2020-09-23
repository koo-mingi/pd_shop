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
                this.set_name("LAWSUIT_LIST");
                this.set_titletext("소송접수관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_def", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CodeName\" type=\"STRING\" size=\"256\"/><Column id=\"CodeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_liti", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeno\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit_status", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_event", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_court", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instance", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPetiSenddate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortReqidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcdate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcopin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCpOpin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVopcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVop\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmDivRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtrmgrDepuname\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRaisreqDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCfmDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDelidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRegnChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPayDlindate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmWincRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCont\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmEntLyrId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmEntLyrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitNotiAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAplCaseCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCaseTyCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitAsitParcWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCtaChg\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitTempReqiDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitRaisRea\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCostCfnApldate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitConcDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitFulfDetmWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitTempSaveWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_add", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CodeName\" type=\"STRING\" size=\"256\"/><Column id=\"CodeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CodeName\">Yes</Col><Col id=\"CodeNo\">Y</Col></Row><Row><Col id=\"CodeName\">No</Col><Col id=\"CodeNo\">N</Col></Row></Rows>");
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

            obj = new Dataset("ds_position", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAdWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instcnt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisdef", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefRegno\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefTel\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefPos\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefAddr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefClamchg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRea\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqTempSaveWtr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisdef_1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefRegno\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefTel\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefPos\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefAddr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefClamchg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitstatus", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"tabEdocAdm\" type=\"STRING\" size=\"256\"/><Column id=\"tabJudg\" type=\"STRING\" size=\"256\"/><Column id=\"tabLawFixinfo\" type=\"STRING\" size=\"256\"/><Column id=\"tabLawsuit\" type=\"STRING\" size=\"256\"/><Column id=\"tabMediation\" type=\"STRING\" size=\"256\"/><Column id=\"tabPladef\" type=\"STRING\" size=\"256\"/><Column id=\"tabPreIwr\" type=\"STRING\" size=\"256\"/><Column id=\"tabReconcil\" type=\"STRING\" size=\"256\"/><Column id=\"tabAlseSue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instance2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPrgrCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCaseNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPetiSenddate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCortReqidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcdate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmAsitParcopin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuPoin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCpOpin\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVopcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmClamVop\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmDivRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmIssuChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtpmgrName\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCtrmgrDepuname\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRaisreqDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodSepcode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCfmDate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgDelidate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmVodChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmRegnChg\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmPayDlindate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmWincRate\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmJudgCont\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmEntLyrId\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmEntLyrName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_newAdmNo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">조정안관리</Col><Col id=\"MENU_ID\">1046</Col><Col id=\"PGM_ID\">MEDIATION001.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"MENU_ID\">1008</Col><Col id=\"MENU_NM\">재판외화해</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">LAWSUIT_REC001.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef_0", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefPos\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefEndInst\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef_1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefPos\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefEndInst\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pladef", this);
            obj.getSetter("firenextcount").set("0");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegNo\" type=\"STRING\" size=\"256\"/><Column id=\"pladefMainTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddTel\" type=\"STRING\" size=\"256\"/><Column id=\"pladefPos\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr1\" type=\"STRING\" size=\"256\"/><Column id=\"pladefAddr2\" type=\"STRING\" size=\"256\"/><Column id=\"pladefClamVol\" type=\"STRING\" size=\"256\"/><Column id=\"pladefRegInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefEndInst\" type=\"STRING\" size=\"256\"/><Column id=\"pladefLawConcSepcode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_appr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvlineAdmProcCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvlineAdmAprvId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefSepCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuitEnd", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_10", "absolute", "14", "447", "996", "164", null, null, this);
            obj.set_taborder("108");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02", "absolute", "14", "447", "996", "157", null, null, this);
            obj.set_taborder("107");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_35", "absolute", "14", "239", "996", "157", null, null, this);
            obj.set_taborder("95");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_33", "absolute", "14", "139", "996", "61", null, null, this);
            obj.set_taborder("94");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("93");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("50");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 Dotum");
            obj.set_text("  소송접수관리");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "60", "70", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("sta_no", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_text("소송관리번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("sta_sim", "absolute", "350", "70", "115", "25", null, null, this);
            obj.set_text("심급");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gubun", "absolute", "676", "70", "105", "25", null, null, this);
            obj.set_text("  당사원피고구분");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_no", "absolute", "140", "73", "140", "19", null, null, this);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_maxlength("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_search", "absolute", "282", "71", "55", "23", null, null, this);
            obj.set_taborder("49");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_inst_code", "absolute", "470", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("48");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 dotum");
            obj.set_innerdataset("@ds_instanceType");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Combo("cmb_pladef_code", "absolute", "786", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_innerdataset("@ds_liti");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_displaynulltext("선택");
            obj.set_index("-1");

            obj = new Button("btn_clear", "absolute", "937", "71", "55", "23", null, null, this);
            obj.set_taborder("51");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("초기화");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03", "absolute", "14", "124", "197", "19", null, null, this);
            obj.set_text("소송관리");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00", "absolute", "59", "145", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04", "absolute", "59", "169", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05", "absolute", "20", "145", "115", "25", null, null, this);
            obj.set_text("신청법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06", "absolute", "20", "169", "115", "25", null, null, this);
            obj.set_text("신청사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07", "absolute", "350", "145", "115", "25", null, null, this);
            obj.set_text("보조참가여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08", "absolute", "350", "169", "115", "25", null, null, this);
            obj.set_text("사건유형");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("sta_req_noti_no", "absolute", "675", "169", "115", "25", null, null, this);
            obj.set_text("소제기의뢰번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_bojo", "absolute", "470", "148", "154", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_columncount("2");
            obj.style.set_textpadding("0 0 0 3");
            obj.style.set_font("굴림,9");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("center middle");
            obj.set_codecolumn("CodeNo");
            obj.set_datacolumn("CodeName");
            obj.set_innerdataset("@ds_add");

            obj = new Button("btn_law_mgr_reg", "absolute", "802", "146", "102", "23", null, null, this);
            obj.set_taborder("58");
            obj.set_text("소송담당자 등록");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_lawsuit", "absolute", "906", "146", "96", "23", null, null, this);
            obj.set_taborder("59");
            obj.set_text("반소사항");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_app_case_no", "absolute", "286", "170", "55", "23", null, null, this);
            obj.set_taborder("82");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("입력");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_req_no", "absolute", "795", "172", "140", "19", null, null, this);
            obj.set_taborder("56");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_imemode("alpha,full");
            this.addChild(obj.name, obj);

            obj = new Button("btn_req_noti_src", "absolute", "941", "170", "55", "23", null, null, this);
            obj.set_taborder("57");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "14", "217", "197", "19", null, null, this);
            obj.set_text("심급관리");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("sta_13", "absolute", "59", "245", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("sta_14", "absolute", "59", "269", "944", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("sta_15", "absolute", "20", "245", "115", "25", null, null, this);
            obj.set_text("소송진행상태");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("sta_16", "absolute", "20", "269", "115", "25", null, null, this);
            obj.set_text("수행법원");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta_17", "absolute", "350", "245", "115", "25", null, null, this);
            obj.set_text("사건번호");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("sta_18", "absolute", "350", "269", "115", "25", null, null, this);
            obj.set_text("송장송부일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("sta_19", "absolute", "683", "245", "115", "25", null, null, this);
            obj.set_text("심급명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("sta_20", "absolute", "683", "269", "115", "25", null, null, this);
            obj.set_text("법원접수일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("sta_21", "absolute", "27", "293", "659", "49", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_22", "absolute", "27", "341", "659", "49", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("sta_23", "absolute", "685", "293", "318", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("sta_24", "absolute", "685", "317", "318", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("sta_25", "absolute", "685", "341", "318", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("sta_26", "absolute", "685", "365", "318", "25", null, null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("sta_27", "absolute", "20", "293", "115", "49", null, null, this);
            obj.set_text("쟁점사항");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("sta_28", "absolute", "20", "341", "115", "49", null, null, this);
            obj.set_text("당사의견");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("sta_29", "absolute", "683", "293", "115", "25", null, null, this);
            obj.set_text("담당판사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("sta_30", "absolute", "683", "317", "115", "25", null, null, this);
            obj.set_text("상대담당자명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta_31", "absolute", "683", "341", "115", "25", null, null, this);
            obj.set_text("상대담당대리인명");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 8 dotum");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_32", "absolute", "683", "365", "115", "25", null, null, this);
            obj.set_text("위임변호사");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_status", "absolute", "140", "248", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("@ds_lawsuit_status");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");

            obj = new Combo("cmb_court_exe", "absolute", "140", "272", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("64");
            obj.set_innerdataset("@ds_court");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Edit("edt_caseNo", "absolute", "470", "248", "140", "19", null, null, this);
            obj.set_taborder("61");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_invoice_date", "absolute", "470", "272", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.style.set_dayfont("9 굴림");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.set_enable("true");
            obj.set_type("normal");
            obj.set_editformat("yyyyMMdd");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Calendar("cal_end_invoice_date", "absolute", "803", "272", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.style.set_dayfont("9 굴림");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.set_enable("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Edit("edt_admName", "absolute", "803", "248", "140", "19", null, null, this);
            obj.set_taborder("63");
            obj.set_maxlength("50");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_judge_name", "absolute", "803", "296", "140", "19", null, null, this);
            obj.set_taborder("68");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_judge_src", "absolute", "946", "294", "55", "23", null, null, this);
            obj.set_taborder("69");
            obj.set_enable("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("border", "disabled", "1 solid #999999ff");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_comment", "absolute", "140", "296", "538", "43", null, null, this);
            obj.set_taborder("67");
            obj.set_scrollbars("fixedvert");
            obj.set_dragscrolltype("vert");
            obj.set_maxlength("1500");
            obj.set_enable("true");
            obj.set_wordwrap("char");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "gray");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_opin", "absolute", "140", "344", "538", "43", null, null, this);
            obj.set_taborder("71");
            obj.set_scrollbars("fixedvert");
            obj.set_enable("true");
            obj.set_wordwrap("char");
            obj.set_maxlength("1500");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_depuName", "absolute", "803", "320", "140", "19", null, null, this);
            obj.set_taborder("70");
            obj.set_maxlength("10");
            obj.set_enable("true");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deName", "absolute", "803", "344", "140", "19", null, null, this);
            obj.set_taborder("72");
            obj.set_maxlength("10");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lawyer_name", "absolute", "803", "368", "140", "19", null, null, this);
            obj.set_taborder("73");
            obj.set_maxlength("10");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawyer", "absolute", "945", "366", "55", "23", null, null, this);
            obj.set_taborder("74");
            obj.set_enable("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pladef_list", "absolute", "14", "429", "197", "19", null, null, this);
            obj.set_text("피고목록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_pladef_sep", "absolute", "73", "425", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_innerdataset("@ds_liti");
            obj.set_codecolumn("CodeNo");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");
            obj.set_visible("false");

            obj = new Button("btn_mediation_reg", "absolute", "750", "420", "55", "23", null, null, this);
            obj.set_taborder("76");
            obj.set_text("조정안");
            obj.set_enable("true");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_visible("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuitrec_reg", "absolute", "810", "420", "80", "23", null, null, this);
            obj.set_taborder("77");
            obj.set_text("재판외화해");
            obj.set_enable("true");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_def_reg", "absolute", "895", "420", "55", "23", null, null, this);
            obj.set_taborder("78");
            obj.set_enable("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("border", "disabled", "1 solid #999999ff");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del", "absolute", "955", "420", "55", "23", null, null, this);
            obj.set_taborder("79");
            obj.set_enable("true");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.setStyleValue("background", "disabled", "URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.setStyleValue("border", "disabled", "1 solid #999999ff");
            obj.style.setStyleValue("color", "disabled", "#ffffffff");
            obj.style.setStyleValue("align", "disabled", "center middle");
            obj.style.setStyleValue("font", "disabled", "bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("sta_34", "absolute", "13", "619", "197", "19", null, null, this);
            obj.set_text("결재 진행 상태");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aprv", "absolute", "835", "622", "55", "23", null, null, this);
            obj.set_taborder("87");
            obj.set_visible("true");
            obj.set_text("결재");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_lawsuit_reg", "absolute", "895", "622", "55", "23", null, null, this);
            obj.set_taborder("81");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_app_case_no", "absolute", "140", "172", "140", "19", null, null, this);
            obj.set_taborder("54");
            obj.set_maxlength("100");
            obj.set_autoselect("true");
            obj.set_autoskip("true");
            obj.set_enable("false");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("border", "disabled", "1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "1049", "35", "55", "24", null, null, this);
            obj.set_taborder("84");
            obj.set_text("테스트");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search_court", "absolute", "140", "148", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_innerdataset("@ds_court");
            obj.style.set_font("9 굴림");
            obj.set_index("-1");

            obj = new Grid("grd_plaintiff", "absolute", "20", "453", "984", "152", null, null, this);
            obj.set_taborder("89");
            obj.set_binddataset("ds_pladef");
            obj.set_scrollbars("fixedvert");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"청구소가\"/><Cell col=\"4\" text=\"주요연락처\"/><Cell col=\"5\" text=\"추가연락처\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"종결여부\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:pladefSeq\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"normal\" editfilter=\"lower,char\" style=\"align:center;\" text=\"bind:pladefName\" editlimit=\"30\" editimemode=\"none\"/><Cell col=\"2\" edittype=\"mask\" style=\"align:center;\" text=\"bind:pladefRegNo\" mask=\"######-#######\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right;\" text=\"bind:pladefClamVol\" mask=\"#,###\" editlimit=\"12\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"mask\" editfilter=\"number\" style=\"align:center;\" text=\"bind:pladefMainTel\" mask=\"###-####-####\" editlimit=\"11\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"mask\" editfilter=\"number\" style=\"align:center;\" text=\"bind:pladefAddTel\" mask=\"###-###-####\" editlimit=\"11\"/><Cell col=\"6\" text=\"bind:pladefAddr1\"/><Cell col=\"7\" style=\"align:center;\" text=\"bind:pladefPos\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:pladefLawConcSepcode\" combodataset=\"ds_lawsuitEnd\" combocodecol=\"codeno\" combodatacol=\"codenm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "103.03%", "67", null, "35", "-19.67%", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj.setProperty("popupstyle", "true");
            obj.setProperty("windowed", "true");
            obj.setProperty("taborder", "90");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_case_type", "absolute", "470", "172", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_innerdataset("@ds_event");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 굴림");

            obj = new Button("btn_close", "absolute", "955", "622", "55", "23", null, null, this);
            obj.set_taborder("92");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "36", "146", "37", "23", null, null, this);
            obj.set_taborder("96");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "23", "170", "37", "23", null, null, this);
            obj.set_taborder("97");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "364", "170", "37", "23", null, null, this);
            obj.set_taborder("98");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "678", "71", "37", "23", null, null, this);
            obj.set_taborder("99");
            obj.set_text("*");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("dotum,14,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv013", "absolute", "219", "657", "105", "20", null, null, this);
            obj.set_taborder("100");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv003", "absolute", "219", "638", "105", "20", null, null, this);
            obj.set_taborder("101");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv002", "absolute", "115", "638", "105", "20", null, null, this);
            obj.set_taborder("102");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv012", "absolute", "115", "657", "105", "20", null, null, this);
            obj.set_taborder("103");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv011", "absolute", "11", "657", "105", "20", null, null, this);
            obj.set_taborder("104");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_aprv001", "absolute", "11", "638", "105", "20", null, null, this);
            obj.set_taborder("105");
            obj.set_usedecorate("true");
            obj.style.set_background("#f4f4f4ff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_case_no", "absolute", "619", "246", "55", "23", null, null, this);
            obj.set_taborder("106");
            obj.set_text("입력");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_enable("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_LIST");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송접수관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","edt_app_case_no","value","ds_lawsuit","lawsuitAplCaseCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_no","value","ds_lawsuit","lawsuitAdmNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","rdo_bojo","value","ds_lawsuit","lawsuitAsitParcWtr");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","cmb_inst_code","value","ds_instance","instAdmCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cmb_pladef_code","value","ds_lawsuit","lawsuitCpPladefSepcode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_req_no","value","ds_lawsuit","lawRaisreqNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cmb_status","value","ds_instance","instAdmPrgrCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_caseNo","value","ds_instance","instAdmCaseNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_invoice_date","value","ds_instance","instAdmPetiSenddate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cal_end_invoice_date","value","ds_instance","instAdmCortReqidate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_admName","value","ds_instance","instAdmName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_judge_name","value","ds_instance","instAdmJudName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","txt_comment","value","ds_instance","instAdmIssuPoin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","txt_opin","value","ds_instance","instAdmCpOpin");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_depuName","value","ds_instance","instAdmCtpmgrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_deName","value","ds_instance","instAdmCtrmgrDepuname");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_lawyer_name","value","ds_instance","instAdmEntLyrName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cmb_pladef_sep","value","ds_pladef","pladefSepCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cmb_court_exe","value","ds_instance","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cmb_search_court","value","ds_lawsuit","lawsuitAplCortCode");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","cmb_case_type","value","ds_lawsuit","lawsuitCaseTyCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_LIST.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_LIST.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출

        var	lawsrcrlt = "";		//소송관리번호
        var instcdrlt = "";		//심급코드
        var lawRaisreqNo = "";		//소제기번호

        this.LAWSUIT_LIST_onload=function(obj,e)
        {
        	this.comboSetup(); 	//  공통코드 콤보데이터에 맞게 분할
        }

        this.fnParamOnload = function ()
        {	
        	var rtnObj = this.gfnGetArgument();
        	
        	// JW_2020.01.20 - 소제기의뢰회신에서 메뉴이동
        	var rtnStr = application.gds_Params.lookup("PARAM_ID", "RIASREQ_REP", "PARAM_VAL");
        	
        	if(!this.gfn_IsNull(rtnStr))
        	{
        		lawRaisreqNo = rtnStr;
        		
        		//this.aprv_view_true
        	
        		this.ds_lawsuit.clearData();
        		this.ds_lawsuit.addRow();							// 소송관리 신규생성
        		this.ds_instance.clearData();
        		this.ds_instance.addRow();							// 심급관리 신규생성
        		
        		//this.setFormview();								//화면기능 활성화,비활성화
        		this.cmb_inst_code.set_index(0);					//심급차수 변경
        		this.ds_instanceType.filter("codeno == '001'");		//심급 1차 고정
        		// 심급값을 못 저장(1차에 해당하는)하는 오류 있음

        		this.rdo_bojo.set_value("N");						//보조참가여부 defalut처리 (default : NO)
        		this.edt_req_no.set_value(lawRaisreqNo);			// 소제기 의회번호 세팅
        		this.cmb_pladef_code.set_value("001");				//당사원피고구분 기본값 - "원고"
        		
        		if(this.ds_instance.getRowType(this.ds_instance.rowposition) == "2" 
        			&& this.cmb_inst_code.value == "001" ){
        			this.cmb_status.set_value("001");				//소송진행상태 기본값 -"발생"-
        		}
        		
        		this.fn_getRaisdef(lawRaisreqNo);					// 소제기 의뢰 원고 목록 불러오기
        		this.fn_getRaisrea(lawRaisreqNo);					// 소제기 의뢰 사유 불러오기
        		
        		this.btn_mediation_reg.set_enable(false);			// 조정안 버튼 비활성화
        		this.btn_lawsuitrec_reg.set_enable(false);			// 재판외화해 버튼 비활성화
        		
        	}

        	//결제진행리스트에서 소송접수 등록
        	else if(!this.gfn_IsNull(rtnObj))
        	{
        		if(!this.gfn_IsNull(rtnObj.legaladvLawAdvReqNo))
        		{
        			if(rtnObj.legaladvLawAdvReqNo.substr(3,13)) {
        			//this.getLawsuitSearch(rtnObj.legaladvLawAdvReqNo.substr(3,10),rtnObj.legaladvLawAdvReqNo.substr(13,3));
        			this.modal_callback("SearchNo",rtnObj.legaladvLawAdvReqNo.substr(3,13));
        			}
        		}
        		
        		//상신결재리스트
        		if(!this.gfn_IsNull(rtnObj.aprvListEmpl))
        		{
        			if(rtnObj.aprvListEmpl.substr(0,10)) this.modal_callback("SearchNo",rtnObj.aprvListEmpl.substr(3,13));
        		}
        		
        		//전체결재리스트
        		if(!this.gfn_IsNull(rtnObj.aprvListAll))
        		{
        			if(rtnObj.aprvListAll.substr(3,13)) {
        					this.modal_callback("SearchNo",rtnObj.aprvListAll.substr(3,13));
        			}
        		}
        	}
        	// 그외(첫 화면 또는 초기화 실행 시)
        	else
        	{
        		this.ds_lawsuit.clearData();
        		this.ds_lawsuit.addRow();							// 소송관리 신규생성
        		this.ds_instance.clearData();
        		this.ds_instance.addRow();							// 심급관리 신규생성
        		
        		//this.setFormview();								//화면기능 활성화,비활성화
        		
        		this.cmb_inst_code.set_index(0);					//심급차수 변경
        		this.ds_instanceType.filter("codeno == '001'");		//심급 1차 고정
        		this.rdo_bojo.set_value("N");						//보조참가여부 defalut처리 (default : NO)
        		this.edt_req_no.set_value(lawRaisreqNo);			// 소제기 의뢰번호 세팅
        		this.cmb_pladef_code.set_value("001");			//당사원피고구분 기본값 - "원고"
        		
        		if(this.ds_instance.getRowType(this.ds_instance.rowposition) == "2" 
        			&& this.cmb_inst_code.value == "001" ){
        			this.cmb_status.set_value("001");				//소송진행상태 기본값 -"발생"-
        		}
        		
        		this.btn_mediation_reg.set_enable(false);
        		this.btn_lawsuitrec_reg.set_enable(false);
        	}
        	
        };

        /*===============================================================================
         * 2. Dataset 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Desc		: Code 데이터 분할
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.comboSetup=function()
        {
        	this.gf_codeComListLoad("ds_court",  "ds_court",  "Y", "000", "선택", "fnCallback", "A01"); //법원공통코드
        	//gf_codeComListLoad("ds_event",  "ds_event",  "Y", "", "", "fnCallback", "A02"); //사건유형공통코드
        }

        /********************************************************************************
         * Desc		: 소송관리 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.getLawsuitSearch=function(sColumn1,sColumn2)
        {
        	//ds_instanceType.Reset();
        	this.ds_reset();	//데이터셋 초기화
        	//ds_instanceType.filter("");	//필터된 데이터셋 초기화
        		
        	//소송관리 조회
        	var strSvcid="LawsuitSearch";
        	var strController="lawsuit/getLawsuitDetail.do";
        	var strParam="lawsuitAdmNo="+"\""+sColumn1+"\"";//소송관리번호
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_lawsuit=ds_output",strParam,"fnCallback");
        }

        this.ds_reset=function()
        {
        	this.ds_lawsuit.clearData();		//소송관리 데이터셋 초기화
        	this.ds_instance.clearData();	//심급관리 데이터셋 초기화_
        	//ds_instanceType.ClearData();
        	this.ds_pladef.clearData();		//원피고목록 데이터셋 초기화
        	this.ds_position.clearData();	//결재라인 데이터셋 초기화
        	this.ds_position_code.clearData();	//결재박스 데이터셋 초기화
        }

        /********************************************************************************
         * Desc		: 기능에 따른 화면활성화 여부 설정
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.setFormview=function()
        {
        	var lawtype = this.ds_lawsuit.getRowType(this.ds_lawsuit.rowposition);		//소송관리 Dataset 상태확인
        	trace("lawtype ="+lawtype);
        	
        	if(lawtype == "2"){
        		this.edt_app_case_no.set_enable(true);		//소송관리 신규작성시 활성화
        		this.edt_app_case_no.set_readonly(true);	//소송관리 신규작성시 읽기전용
        		this.edt_req_no.set_enable(true);			//소송관리 신규작성시 활성화
        		this.edt_req_no.set_readonly(true);			//소송관리 신규작성시 읽기전용
        	}
        	else if(lawtype == "1" || lawtype == "4"){
        		this.edt_app_case_no.set_enable(false);		//소송관리 신규작성시 비활성화
        		this.edt_app_case_no.set_readonly(true);	//소송관리 신규작성시 읽기전용
        		this.edt_req_no.set_enable(false);			//소송관리 신규작성시 비활성화
        		this.edt_req_no.set_readonly(true);			//소송관리 신규작성시 읽기전용
        	}
        	else{
        	
        	}
        	
        	var insttype = this.ds_instance.getRowType(this.ds_instance.rowposition);		//심급관리	Dataset 상태확인
        	trace("insttype ="+insttype);
        	if(insttype == "2"){
        		this.edt_caseNo.set_enable(true);			//심급관리 신규작성시 사건번호 활성화
        		this.edt_caseNo.set_readonly(true);			//심급관리 신규작성시 사건번호 READONLY
        		this.edt_judge_name.set_enable(true);		//심급관리 신규작성시 담당판사 활성화
        		this.edt_judge_name.set_readonly(true);		//심급관리 신규작성시 담당판사 READONLY
        		this.edt_lawyer_name.set_enable(true);		//심급관리 신규작성시 위임변호사 활성화
        		this.edt_lawyer_name.set_readonly(true);	//심급관리 신규작성시 위임변호사 READONLY
        	}
        	else if(insttype == "1" || insttype == "4"){
        		this.edt_caseNo.set_enable(false);			//심급관리 신규작성시 사건번호 비활성화
        		this.edt_caseNo.set_readonly(true);			//심급관리 신규작성시 사건번호 READONLY
        		this.edt_judge_name.set_enable(false);		//심급관리 신규작성시 담당판사 비활성화
        		this.edt_judge_name.set_readonly(true);		//심급관리 신규작성시 담당판사 READONLY
        		this.edt_lawyer_name.set_enable(false);		//심급관리 신규작성시 위임변호사 비활성화
        		this.edt_lawyer_name.set_readonly(true);	//심급관리 신규작성시 위임변호사 READONLY
        	}
        	else{
        	
        	}
        }

        /********************************************************************************
         * Desc		: 소제기의뢰피고조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.fn_getRaisdef=function(sColumn1)
        {
        	//alert(sColumn1);
        	this.ds_raisdef.clearData();
        	
        	//소제기원피고조회
        	var strSvcid="RaisPladefSearch";
        	var strController="/rais/getRaisreqDefList1.do";
        	var strParam="raisreqNo="+"\""+sColumn1+"\"";	//소제기의뢰번호	
        	this.gfn_transaction(this,strSvcid,strController,"","ds_raisdef=ds_output",strParam,"fnCallback");
        	//trace("ds_raisdef :: " + this.ds_raisdef.saveXML());
        }

        /********************************************************************************
         * Desc		: 소제기의뢰사유
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.fn_getRaisrea=function(sColumn1)
        {
        	this.ds_raisreq.clearData();        
                
            var strSvcid="getRaisreqList";
        	var strController="/rais/getRaisreqList.do";
        	var strParam="lawRaisreqNo="+"\""+sColumn1+"\"";//소제기의뢰번호
        	//trace(strParam);		
        	application.gfn_transaction(this,strSvcid,strController,"","ds_raisreq=ds_output",strParam,"fnCallback");
        	trace("ds_raisreq :: " + ds_raisreq.saveXML());
        }

        /*===============================================================================
         * 3. Grid 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Desc		: 그리드 연락처 마스크 처리
         * Param	: 없음
         * Return	: Mask값 
         *******************************************************************************/
        this.fn_masktel1=function(row)	//추후 재코딩 필요(간소화)
        {
        	var telsearch1 = this.ds_pladef.getColumn(row, "pladefMainTel"); //주요연락처
        	
        	if(telsearch1 != ""){
        		var localcode = telsearch1.substr(0,2);	//지역코드 추출
        		var telsize = telsearch1.length;	//연락번호 길이
        		if(localcode == "02"){ //지역코드가 서울일 경우
        			if(telsize == "9"){
        				return '##-###-####';
        			}else if(telsize == "10"){
        				return '##-####-####';
        			}else{
        				return '###-####-####';
        			}
        		}else{
        			if(telsize == "10"){
        				return '###-###-####';
        			}else if(telsize == "11"){
        				return '###-####-####';
        			}else{
        				return '###-####-####';
        			}
        		}
        	}else{
        		return '###-####-####';
        	}
        }

        this.fn_masktel2=function(row)	//추후 재코딩 필요(간소화)
        {

        	var telsearch2 = this.ds_pladef.getColumn(row, "pladefAddTel"); //추가연락처
        	
        	if(telsearch2 != ""){
        		var localcode = telsearch2.substr(0,2);	//지역코드 추출
        		var telsize = telsearch2.length;	//연락번호 길이
        		
        		if(localcode == "02"){ //지역코드가 서울일 경우
        			if(telsize == "9"){
        				return '##-###-####';
        			}else if(telsize == "10"){
        				return '##-####-####';
        			}else{
        				return '###-####-####';
        			}
        		}else{
        			if(telsize == "10"){
        				return '###-###-####';
        			}else if(telsize == "11"){
        				return '###-####-####';
        			}else{
        				return '###-####-####';
        			}
        		}
        	}else{
        		return '###-####-####';
        	}
        } 

        /*===============================================================================
         * 5. User Function 관련 Script
         *=============================================================================*
        /********************************************************************************
         * Desc		: transaction 후 호출되는 콜백함수
                      소송관리 조회,신규,수정,삭제,결재
         * Param	: 1.errcd  - Error Code
        			  2.errmsg - Error Msg
        			  3.svcid  - transaction id
         * Return	: 없음
         *******************************************************************************/ 
        this.fnCallback=function(svcid,errcd,errmsg)
        {	
        	//alert("svcid = "+svcid);
        	//trace("svcid ="+svcid);
        	switch(svcid)
        	{
        		case "LawsuitSearch":
        			this.fn_enable();
        			//trace(ds_lawsuit.saveXML());
        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        				+ "소송관리 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				//alert("LawsuitSearch Callback Test");
        				this.getPladefInfo(); //원피고 구분에 따른 제목 변경
        				//alert("lawsrcrlt="+lawsrcrlt+" instcdrlt="+instcdrlt);
        				this.getInstSearch(lawsrcrlt,instcdrlt); //심급관리 조회
        				//this.setFormview(); 
        				var cpcode = this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitCpPladefSepcode");
        					if(cpcode != ""){	//당사원피고구분값이 있을 경우
        						this.cmb_pladef_code.set_enable(false);
        					}else{
        						this.cmb_pladef_code.set_enable(true);
        					}
        				
        				var statuscode = this.ds_instance.getColumn(this.ds_instance.rowposition,"instAdmPrgrCode");
        					if(this.gfn_IsNull(statuscode) == true){
        						trace("소송진행 발생으로 변경");
        						this.cmb_status.set_enable(false);	//소송진행상태 비활성화
        						this.cmb_status.set_value("001");		//소송진행상태 기본값 설정(발생)
        					}else{
        						//alert("er");
        						this.cmb_status.set_enable(true);
        					}
        		
        				this.getlawinfo(lawsrcrlt);	// 현재 진행중인 업무 파악 
        				
        			}
        			break;
        		
        		case "InstanceSearch":
        			//trace(ds_instance.saveXML());
        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        				+ "심급관리 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				//alert("InstanceSearch Callback Test");
        				if(this.ds_instance.rowcount == 0){
        					this.ds_instance.copyData(this.ds_instance2);
        					this.ds_instance.addRow();
        					trace("ds_intance@instanceSearch : " + this.ds_instance.saveXML());
        					if(this.edt_no.text != ""){					
        						this.ds_instance.setColumn(this.ds_instance.rowposition,"lawsuitAdmNo",this.edt_no.text);
        						this.ds_instance.setColumn(this.ds_instance.rowposition,"instAdmCode",instcdrlt);
        					}
        				}
        				else{
        				}
        			//trace(this.ds_instance.saveXML());
        			if(this.gfn_IsNull(this.cmb_status.value)==true){
        				this.cmb_status.set_value("001");
        			}
        			if(this.gfn_IsNull(this.cmb_court_exe.value)==true){
        				this.cmb_court_exe.set_index(0);
        			}
        			this.setInstanceLevel(lawsrcrlt);
        			this.getPladefSearch(lawsrcrlt,instcdrlt);	//원피고 조회
        			}
        			break;
        			
        		case "InstanceCntAll":
        			//trace(this.ds_instcnt.saveXML());
        			var instcnt = this.ds_instcnt.getColumn(0,"instAdmCode");	//소송관리번호별 총 심급 수
        			this.setinstancedl(instcnt);	//심급차수 상세분리
        			
        			
        // 			var passport = this.getBookNo();
        // 			alert("getInstAdmInfo 결재라인 불러오기" + passport);
        // 			this.aprv_search(passport);
        			
        			break;
        			
        		case "getRaisreqList":
        			//trace(ds_raisreq.saveXML());
        			var lawrea = this.ds_raisreq.getColumn(this.ds_raisreq.rowposition,"lawRaisreqRea");
        			this.ds_lawsuit.setColumn(this.ds_lawsuit.rowposition,"lawsuitRaisRea",lawrea); //소송제기사유 저장
        			
        			break;	
        				
        		case "getRaisreqList2":
        			
        			//this.selectDef(this.ds_raisreq.getColumn(this.ds_raisreq.rowposition, "lawRaisreqNo"));
        			
        			break;
        			
        		case "getRaisreqDefSelectList":
        			
        			
        			
        			application.gds_Params.deleteAll();
        	
        			break;
        			
        		case "PladefSearch":
        			//trace(this.ds_pladef_0.saveXML());
        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        				+ "원피고목록 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				if(this.ds_pladef_0.rowcount >0){
        			//trace("this.ds_pladef_0 ="+this.ds_pladef_0.saveXML());
        			//trace("this.ds_pladef ="+this.ds_pladef.saveXML());
        			//this.ds_pladef_0.copyData(this.ds_pladef);
        			this.ds_pladef.copyData(this.ds_pladef_0);
        			
        			
        			//trace("this.ds_pladef_0 ="+this.ds_pladef_0.saveXML());
        			//trace("this.ds_pladef ="+this.ds_pladef.saveXML());
        			//trace("this.ds_pladef ="+this.ds_pladef.saveXML());
        				}
        				if(this.ds_pladef.rowcount != 0){
        					this.btn_mediation_reg.set_enable(true);
        					this.btn_lawsuitrec_reg.set_enable(true);
        				}else{
        					this.btn_mediation_reg.set_enable(false);
        					this.btn_lawsuitrec_reg.set_enable(false);
        				}
        				
        				this.grd_click(this.grd_plaintiff, {row:0});
        				
        				var aprvSearchNo='002'+this.ds_lawsuit.getColumn(0,"lawsuitAdmNo")
        								//+cmb_inst_code.value
        								+instcdrlt
        								+this.cmb_pladef_code.value;
        				//alert("aprvSearchNo Test: " +aprvSearchNo);
        				//alert(aprvSearchNo);
        			//	trace("this.ds_lawsuit.getColumn(0,lawsuitAdmNo) ="+this.ds_lawsuit.getColumn(0,"lawsuitAdmNo"));
        			//	trace("instcdrlt ="+instcdrlt);
        			//	trace("this.cmb_pladef_code.value ="+this.cmb_pladef_code.value);
        				this.aprv_search(aprvSearchNo);		//결재조회
        			}
        			break;
        		case "AprvSearch":
        			//trace(ds_position.saveXML());
        			//데이터 조회 에러 발생시
        			
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        				+ "결재목록 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				//결제라인box (ds_position_code) 생성
        				var cnt = 0;
        			
        				/*
        				for( i=0 ; i<=this.ds_position.getRowCount() ; i++){		
        					this.ds_position_code.addRow();
        						if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){			//결재완료
        							this.ds_position_code.setColumn(cnt, "codeNo","Y");
        							this.ds_position_code.setColumn(cnt, "codeName","결제완료");
        						}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        							this.ds_position_code.setColumn(cnt, "codeNo","N");
        							this.ds_position_code.setColumn(cnt, "codeName","결제대기");
        						}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Z"){
        							this.ds_position_code.setColumn(cnt, "codeNo","Z");
        							this.ds_position_code.setColumn(cnt, "codeName","반려");			//반려
        						}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="A"){
        							this.ds_position_code.setColumn(cnt, "codeNo","A");
        							this.ds_position_code.setColumn(cnt, "codeName","전결");			//전결
        						}else{
        						}
        					cnt++;
        				}*/
        	
        			for( i=0 ; i<this.ds_position.getRowCount() ; i++){	
        				this.ds_position_code.addRow();
         
        				if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="Y"){				// 결재완료
        					this.ds_position_code.setColumn(cnt, "codeNo","Y");
        					this.ds_position_code.setColumn(cnt, "codeName","결제완료");
        				}else if(this.ds_position.getColumn(i,"aprvInfoCondCode")=="N"){		//결재대기
        					this.ds_position_code.setColumn(cnt, "codeNo","N");
        					this.ds_position_code.setColumn(cnt, "codeName","결제대기");
        					trace("ds_position trace :: " + this.ds_position.saveXML());
        					trace("ds_position_code trace :: " + this.ds_position_code.saveXML());
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
        // 				if(i==0){
        // 					this.sta_aprv01.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        // 					this.sta_aprv11.set_text(static2);
        // 				}
        // 				if(i==1){
        // 					this.sta_aprv02.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        // 					this.sta_aprv12.set_text(static2);
        // 				}
        // 				if(i==2){
        // 					this.sta_aprv03.set_text(this.ds_position.getColumn(i,"aprvInfoDeptName") + " " + this.ds_position.getColumn(i,"aprvInfoName"));
        // 					this.sta_aprv13.set_text(static2);
        // 				}
        // 				cnt++;
        // 			}
         			//반려시 상신자만 결재라인 초기화
        //  			if(cc=="n" && this.ds_position.getColumn(0, "aprvprgrInfoWritSabun")==loginSabun){
        // 			
        //  				this.ds_position.clearData();
        //  				this.ds_position_code.clearData();
        // 				
        // 				return false;
        // 			}

        			if(this.ds_position.rowcount > 0) {
        				//	this.aprv_lock();
        			}
        		}
        		
        			//application.gds_Params.deleteAll();
        			//this.aprv_lock();	//결재화면(비)활성화 여부 처리
        			this.fn_staSet("sta_aprv001","sta_aprv002","sta_aprv003","sta_aprv011","sta_aprv012","sta_aprv013");
        			break;
        			
        		case "insertLawsuitAll":
        			//trace(ds_pladef.SaveXML());
        			if(errcd != "0"){
        				alert("데이터가 정상적으로 입력되지 않았습니다.\n"
        					+ "소송관리 에러내용: "+ errmsg);
        			return false;
        			}
        			
        			else{
        				alert("저장되었습니다.");
        				lawsrcrlt = this.ds_output.getColumn(0,"lawsuitAdmNo"); 	//소송관리번호
        				instcdrlt = this.ds_output.getColumn(0,"instAdmCode");		//심급코드

        				this.getLawsuitSearch(lawsrcrlt,instcdrlt);
        			}
        // 			else{
        // 				lawsrcrlt = this.ds_lawsuit.getColumn(0,"lawsuitAdmNo"); 	//소송관리번호
        // 				instcdrlt = this.ds_instance.getColumn(0,"instAdmCode");		//심급코드
        // 				
        // 				if(this.gfn_IsNull(lawsrcrlt)==true){
        // 					var rtn = this.gfn_Today();
        // 					//trace(rtn);
        // 					var strSvcid="getNewAdmNo";
        // 					var strController="lawsuit/getNewAdmNo.do";
        // 					var strParam = "lawsuitAplCaseCode="+"\""+this.ds_lawsuit.getColumn(0,"lawsuitAplCaseCode")+"\""; //신청사건번호
        // 						strParam+= " selectedId="+"\""+rtn+"\"";
        // 					//trace(strParam);
        // 					this.gfn_transaction(this,strSvcid,strController,"","ds_newAdmNo=ds_output",strParam,"fnCallback");				
        // 				}else{
        // 					this.getLawsuitSearch(lawsrcrlt,instcdrlt);
        // 					alert("저장되었습니다.");
        // 				}
        // 			} 
        			break;
        			
        		case "insertLawsuit":
        			if(errcd != "0"){	
        				alert("데이터가 정상적으로 입력되지 않았습니다.\n"
        					+ "소송관리 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				alert("소송관리가 생성되었습니다.");
        				if(this.ds_instance.rowcount == 0){
        					this.ds_instance.addRow();		//심급관리생성
        					this.cmb_inst_code.set_index(0);
        					this.cmb_status.set_index(0);
        					this.cmb_status.set_enable(false);	//소송진행상태 비활성화
        					this.cmb_pladef_code.set_enable(false);	//당사원피고구분값 비활성화
        					this.ds_instance.setColumn(this.ds_instance.rowposition,"instAdmPrgrCode","001"); 	//소송진행상태 : 기본값(발생)
        										
        				}
        			}
        			break;
        		case "updateLawsuit":
        			if(errcd != "0"){	
        				alert("데이터가 정상적으로 수정되지 않았습니다.\n"
        					+ "소송관리 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				alert("소송관리가 수정되었습니다.");
        				if(this.ds_instance.rowcount == 0){
        					this.ds_instance.addRow();
        					this.cmb_inst_code.set_index(0);
        				}
        			}
        			break;	
        		case "instanceMgr":
        			if(errcd != "0"){	
        				alert("데이터가 정상적으로 처리되지 않았습니다.\n"
        					+ "심급관리 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				alert("처리가 완료되었습니다.");
        				this.cmb_status.set_enable(true);	//소송진행상태 활성화
        				lawsrcrlt = this.ds_lawsuit.getColumn(0,"lawsuitAdmNo"); 	//소송관리번호
        				instcdrlt = this.ds_instance.getColumn(0,"instAdmCode");		//심급코드
        				this.getLawsuitSearch(lawsrcrlt,instcdrlt);
        			}
        			break;	
        		case "RaisPladefSearch":
        			//trace(ds_raisdef.saveXML());
        		/*#hansol1.jung#
        		if(this.ds_pladef.rowcount != 0){
        		
        			this.ds_pladef_1.copyData(this.ds_pladef);	//원피고목록 존재시 보관
        			
        		}
        		*/
        		
        // 		if(this.ds_raisdef.rowcount() != 0){
        // 		
        // 			this.ds_raisdef_1.copyData(this.ds_raisdef);	//소제기의뢰 목록 존재시 보관
        // 		}
        		
        		
        		//this.ds_pladef.clearData();			//원피고목록 삭제	//#hansol1.jung#
        		//trace(this.ds_raisdef.saveXML());
        		var cnt = this.ds_raisdef.getRowCount();	//소제기의뢰 불러온 값 count
        		for(var i=0; i<cnt ; i++){
        			
        			var regNo = this.ds_raisdef.getColumn(i,"lawRaisreqDefRegno");	//#hansol1.jung# 추가
        			if(this.ds_pladef.findRow("pladefRegNo",regNo)>-1)	continue;	//#hansol1.jung# 추가
        			
        			//var aRow = this.ds_pladef.addRow();
        			var aRow = this.ds_pladef.insertRow(0);
        						
        			//소제기의뢰피고를 원피고목록에 복사
        			
        			//this.ds_pladef.copyData(this.ds_pladef_0);
        			
        			var bool = this.ds_pladef.copyRow(
        					aRow
        				,	this.ds_raisdef
        				,	i
        				,			"pladefName=lawRaisreqDefName"
        				+	" , "	+	"pladefRegNo=lawRaisreqDefRegno"
        				+	" , "	+	"pladefClamVol=lawRaisreqDefClamchg"
        				+	" , "	+	"pladefMainTel=lawRaisreqDefTel"
        				+	" , "	+	"pladefAddr1=lawRaisreqDefAddr"
        				+	" , "	+	"pladefPos=lawRaisreqDefPos"
        				);
        			
        			//alert(this.ds_pladef.getColumn(i,"pladefName"));
        			//this.ds_pladef.setColumn(i,"pladefSepCode",strCheck);				//원피고 구분
        			this.ds_pladef.setColumn(i,"pladefRegInst",this.cmb_inst_code.value);	//등록심급
        						
        			this.ds_pladef.setColumn(i,"pladefAddTel" ,"");
        			this.ds_pladef.setColumn(i,"pladefAddr2" ,"");
        			this.ds_pladef.setColumn(i,"pladefEndInst" ,"");
        			
        			this.ds_pladef.setRowType(i,"2");
        					
        		}
        		
        		//trace(ds_pladef.SaveXML("","A"));
        		
        		//복사된 원피고가 있을경우
        		
        		/*#hansol1.jung#
        		if(this.ds_pladef_1.rowcount > 0){
        			
        			this.ds_pladef.appendData(this.ds_pladef_1);	//현 원피고목록에 기존 원피고목록 합산
        			
        			var fRow;
        			
        			for(var i=0; i<this.ds_pladef.rowcount; i++){
        			
        				fRow = this.ds_pladef.findRow("pladefRegNo",this.ds_pladef.getColumn(i,"pladefRegNo") ,i+1);	//자기자신의 값 찾기
        				//alert(fRow);
        					if(fRow != -1){
        						this.ds_pladef.deleteRow(i);
        						//ds_pladef.SetRowType(i,"delete");
        						//ds_pladef.SetRowType(fRow,"delete");
        						i--;
        					}
        			}
        			var rowcnt = this.ds_pladef.rowcount;
        			
        				for(var i=0; i<rowcnt; i++){
        				
        					if(this.gfn_IsNull(this.ds_pladef.getColumn(i,"pladefSeq")) == true){
        						this.ds_pladef.setRowType(i,"2");
        					}
        				}
        		}
        		*/
        		
        		//이미 불러온 소제기원피고가 있는경우
        		
        			/*#hansol1.jung#
        			//if(ds_raisdef_1.rowcount() >0 && Length(edt_req_no.Text) > 0 ){
        			if(this.ds_raisdef_1.rowcount >0  ){
        				var fRow;
        				//alert("ER");
        				
        				for(var i=0; i<this.ds_raisdef_1.rowcount; i++){
        					
        					fRow = this.ds_pladef.findRow("pladefRegNo", this.ds_raisdef_1.getColumn(i,"pladefRegNo"));	
        				
        				//	alert("1"+fRow);
        					if(fRow != -1){	
        						this.ds_pladef.deleteRow(fRow);
        						this.ds_pladef.setRowType(fRow,"8");
        						//ds_pladef.DeleteRow(i);
        						//ds_pladef.SetRowType(i,"delete");
        					}
        				}
        				
        				//trace(ds_pladef.SaveXML("","A"));
        				this.ds_pladef_1.copyData(this.ds_pladef);	//백업된 소제기가 제거된 원피고 백업
        				
        				this.ds_raisdef_1.copyData(this.ds_raisreq);	//소제기원피고 백업
        				
        				this.ds_pladef.clearData();
        				
        				for(var i=0; i<cnt ; i++){
        						var aRow = this.ds_pladef.addRow();
        						//소제기의뢰피고를 원피고목록에 복사
        						this.ds_pladef.copyRow(aRow,"ds_raisdef",i,"pladefName=lawRaisreqDefName,pladefRegNo=lawRaisreqDefRegno,pladefClamVol=lawRaisreqDefClamchg,pladefMainTel=lawRaisreqDefTel,pladefAddr1=lawRaisreqDefAddr,pladefPos=lawRaisreqDefPos"); 
        						
        						//ds_pladef.SetColumn(i,"pladefSepCode",strCheck);				//원피고 구분
        						this.ds_pladef.setColumn(i,"pladefRegInst",this.cmb_inst_code.value);	//등록심급
        					
        						this.ds_pladef.setColumn(i,"pladefAddTel" ,"");
        						this.ds_pladef.setColumn(i,"pladefAddr2" ,"");
        						this.ds_pladef.setColumn(i,"pladefEndInst" ,"");
        			}
        			
        			this.ds_pladef.appendData(this.ds_pladef_1);	//현 원피고목록에 기존 원피고목록 합산
        			
        			var fRow;
        				
        				for(var i=0; i<this.ds_pladef.rowcount; i++){
        					
        					fRow = this.ds_pladef.findRow("pladefRegNo",this.ds_pladef.getColumn(i,"pladefRegNo") ,i+1);	//자기자신의 값 찾기
        				
        					if(fRow != -1){
        					
        						//ds_pladef.DeleteRow(fRow);
        						this.ds_pladef.deleteRow(i);
        						//ds_pladef.SetRowType(i,"delete");
        						//ds_pladef.SetRowType(fRow,"delete");
        						i--;
        					
        					}
        				}			
        			}
        			
        		if(this.ds_raisdef.rowcount != 0){
        		
        			this.ds_raisdef_1.copyData(this.ds_raisdef);	//소제기의뢰 목록 존재시 보관
        		}
        		*/
        			
        		//trace(ds_pladef.SaveXML("","A"));
        		
        		break;
        		
        		case "LawsuitStatus":
        		break;
        		case "ds_court" :
        			this.cmb_search_court.set_index(0);
        			this.cmb_court_exe.set_index(0);
        			this.gf_codeComListLoad("ds_instanceType",  "ds_instanceType",  "Y", "", "", "fnCallback", "G01"); //심급차수코드
        			//trace(ds_court.saveXML());
        			
        		break;
        		case "ds_instanceType" :
        			this.cmb_inst_code.set_index(0);
        			this.gf_codeComListLoad("ds_lawsuit_status",  "ds_lawsuit_status",  "Y", "000", "선택", "fnCallback", "G02"); //소송진행상태공통코드
        			//trace(this.ds_instanceType.saveXML());
        		break;
        		case "ds_lawsuitEnd" :
        			this.ds_event.setColumn(0,"codeno","");
        			this.ds_event.setColumn(0,"codenm","선택");
        			this.cmb_case_type.set_index(0);
        			this.fnParamOnload();
        			//trace(ds_event.saveXML());
        		break;
        		case "ds_lawsuit_status" :
        			this.cmb_status.set_index(0);
        			this.gf_classCodeListLoad("ds_liti",  "ds_liti",  "Y", "fnCallback", "H02"); //당사원피고구분공통코드
        			//trace(ds_lawsuit_status.saveXML());
        		break;
        		case "ds_event" :
        			this.gf_codeComListLoad("ds_lawsuitEnd", "ds_lawsuitEnd", "N", "", "", "fnCallback", "H01");	// 소송종결여부공통코드
        			break;
        		case "ds_liti" :
        			//this.ds_liti.insertRow(0);
        			this.ds_liti.setColumn(0,"codeno","000");
        			this.ds_liti.setColumn(0,"codenm","선택");
        			this.cmb_pladef_code.set_index(0);
        			this.gf_classCodeListLoad("ds_event",  "ds_event",  "Y", "fnCallback", "A02"); //사건유형공통코드
        			//trace(ds_liti.saveXML());
        		break;
        		case "getNewAdmNo" :
        			//trace(this.ds_newAdmNo.saveXML());
        			this.getLawsuitSearch(this.ds_newAdmNo.getColumn(0,"lawsuitAdmNo"),"");
        			this.alert("등록되었습니다.");
        		break;
        		
        		// 결제자는 상신할 수 없음
        		case "approvalLineListcode" :
        			var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        			var cnt=0;
        			for(i=0;i<this.ds_appr.getRowCount();i++){
        				if(this.ds_appr.getColumn(i,"aprvlineAdmAprvId")==loginSabun) {
        				alert("결제자는 상신을 할 수 없습니다.");
        				return;
        				}
        			}
        			// 상신창 열기 
         			var nLeft = system.clientToScreenX(this, 10);
        			var nTop = system.clientToScreenY(this, 10);
        			 
        			var newChild = new ChildFrame;
        			newChild.init("aprvprogcomm"
        							, "absolute", nLeft, nTop, 300, 250, null, null
        							, "aprv::APRV_PROG_COMMENT.xfdl");
        							
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");
        			
        			newChild.showModal(this.getOwnerFrame()
        								, {stepCode:"002", bookNo:this.getBookNo(),aprvprgrInfoSeq:this.ds_position.getColumn(0, "aprvprgrInfoSeq")}
        								, this
        								, "modal_callback");
        			
        		break;
        		
        	}
        	 
        }
        			
        		
        /********************************************************************************
         * Desc		: 원피고구분에 따른 텍스트 변경
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.getPladefInfo=function()
        {
        	var req_no="";
        	if(this.cmb_pladef_code.text=="피고"){		// 당사원피고구분이 피고일 경우
        		this.sta_pladef_list.set_text("원고목록");		// 원피고목록
        		this.sta_req_noti_no.set_text("소송고지번호");		//소송고지
        		if(this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitNotiAdmNo") != ""){
        			req_no = this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitNotiAdmNo");
        			//ds_lawsuit.setColumn(0,"lawRaisreqNo",req_no);
        		}
        		this.btn_req_noti_src.set_enable(true);
        	}else{
        		this.sta_pladef_list.set_text("피고목록");
        		this.sta_req_noti_no.set_text("소제기의뢰번호");	//소제기의뢰
        		this.btn_req_noti_src.set_enable(true);
        	}
        }

        /********************************************************************************
         * Desc		: 심급관리 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.getInstSearch=function(sColumn1,sColumn2)
        {
        	//심급관리 조회
        	var strSvcid="InstanceSearch";
        	var strController="lawsuit/getInstanceDetail.do";
        	var strParam ="";
        	strParam+="lawsuitAdmNo="+"\""+sColumn1+"\"";	//소송관리번호
        	strParam+=" instAdmCode="+"\""+sColumn2+"\"";	//심급코드
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_instance=ds_output",strParam,"fnCallback");
        }

        //소송관리번호로 현재 업무 현황 
        this.getlawinfo=function(scolumn1)
        {			
        	var strSvcid="LawsuitStatus";
        	var strController="lawsuit/getLawsuitStatus.do";
        	var strParam="lawsuitAdmNo="+"\""+scolumn1+"\"";//소송관리번호
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_lawsuitstatus=ds_output",strParam,"fnCallback");
        }

        /********************************************************************************
         * Desc		: 해당심급차수만 출력하는 기능
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.setInstanceLevel=function(sColumn1)
        {			
        	var strSvcid="InstanceCntAll";
        	var strController="lawsuit/getinstanceListAll.do";
        	var strParam="lawsuitAdmNo="+"\""+sColumn1+"\"";//소송관리번호
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_instcnt=ds_output",strParam,"fnCallback");
        }

        /********************************************************************************
         * Desc		: 원피고 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.getPladefSearch=function(sColumn1,sColumn2)
        {
        	var PladefChk  =""; //원피고구분코드확인
        	 
        	if(this.cmb_pladef_code.value == "001"){	//당사 원고일때
        		PladefChk = "002"; // 피고조회
        	}
        	else{
        		PladefChk = "001"; // 원고조회
        	}
        	
        	//원피고조회
        	var strSvcid="PladefSearch";
        	var strController="lawsuit/getPlaDefDetail.do";
        	var strParam="lawsuitAdmNo="+"\""+sColumn1+"\"";//소송관리번호
        		strParam+=" instAdmCode="+"\""+sColumn2+"\"";	//심급코드
        		strParam+=" lawsuitCpPladefSepcode="+"\""+PladefChk+"\"";	//원피고구분코드
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_pladef_0=ds_output",strParam,"fnCallback");
        }

        this.fnCallback1 = function ()
        {
        	trace("확인");
        };

        /********************************************************************************
         * Desc		: 해당심급차수만 출력하는 기능(상세)
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.setinstancedl=function(instcnt)
        {
        	if(instcnt == "0") {
        			this.ds_instanceType.filter("codeno == '001'");
        			this.cmb_inst_code.set_index(0);
        			}
        	else if(instcnt == "1") {
        			this.ds_instanceType.filter("codeno <= '002'");
        			}
        	else if(instcnt == "2") {
        			this.ds_instanceType.filter("codeno <= '003'");
        			}
        	else if(instcnt == "3") {
        			this.ds_instanceType.filter("codeno <= '004'");
        			}
        	else if(instcnt == "4") {
        			this.ds_instanceType.filter("codeno <= '005'");
        			}	
        	else if(instcnt == "5") {
        			this.ds_instanceType.filter("codeno <= '006'");
        			}									
        	else if(instcnt == "6") {
        			this.ds_instanceType.filter("codeno <= '007'");
        			}	
        	else if(instcnt == "7") {
        			this.ds_instanceType.filter("codeno <= '008'");
        			}	
        	else if(instcnt == "8") {
        			this.ds_instanceType.filter("codeno <= '009'");
        			}	
        	else if(instcnt == "9") {
        			this.ds_instanceType.filter("codeno <= '010'");
        			}
        	else if(instcnt == "10") {
        			this.ds_instanceType.filter("codeno <= '011'");
        			} 
        	/*switch(instcnt){
        		case "0":
        			//ds_instance.addRow();
        			this.ds_instanceType.filter("codeno == '001'");
        			this.cmb_inst_code.index = 0;
        			break;
        		case "1":	//1차일때
        		trace("11111111111111");
        			this.ds_instanceType.filter("codeno <= '002'");
        			break;
        		case "2":
        		trace("22222222222222");
        			this.ds_instanceType.filter("codeno <= '003'");
        			break;
        		case "3":
        		trace("3333333333333333");
        			this.ds_instanceType.filter("codeno <= '004'");
        			break;
        		case "4":
        			this.ds_instanceType.filter("codeno <= '005'");
        			break;
        		case "5":
        			this.ds_instanceType.filter("codeno <= '006'");
        			break;
        		case "6":
        			this.ds_instanceType.filter("codeno <= '007'");
        			break;
        		case "7":
        			this.ds_instanceType.filter("codeno <= '008'");
        			break;
        		case "8":
        			this.ds_instanceType.filter("codeno <= '009'");
        			break;
        		case "9":
        			this.ds_instanceType.filter("codeno <= '010'");
        			break;
        		case "10":
        			this.ds_instanceType.filter("codeno <= '011'");
        			break; 
        		} */
        	//trace(this.ds_instance.saveXML());
        }

        /********************************************************************************
         * Desc		: 결재조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.aprv_search=function(aprvprgrInfoBookNo)
        {
        	this.ds_position.clearData();
         	this.ds_position_code.clearData();
         	
        	var strSvcid="AprvSearch";
        	var strController="approval/approvalLineList.do";
        	var strParam="APRVPRGR_INFO_STEP_CODE="+"\""+"002"+"\"";//결재 진행 코드
        	strParam += " APRVPRGR_INFO_BOOK_NO=" +"\""+aprvprgrInfoBookNo+"\""; 	//결재 대장 번호
        	
        	this.gfn_transaction(this,strSvcid,strController,"","ds_position=ds_output",strParam,"fnCallback");
        	trace(this.ds_position.saveXML());
        }

        /********************************************************************************
         * Desc		: 결재(비)활성화 기능
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.aprv_lock=function()
        {
        	var strSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	if(this.gfn_IsNull(strSabun)) {
        		strSabun = "0";
        	}

        	trace("login sabun = " + strSabun + " 작성자 = " + this.ds_position.getColumn(0,"aprvprgrInfoWritSabun"));
        	trace(this.ds_position.getColumn(0,"aprvInfoCont"));
        	trace(this.ds_position.getColumn(0,"aprvprgrInfoWritSabun") == strSabun);
        	//결재 미 시행시
        	if(this.ds_position.rowcount < 1){
        		//alert("aprvTest0: "+id);
        		this.btn_aprv.set_enable(true);				//결재버튼 활성화
        		this.btn_lawsuit_reg.set_enable(true);		//저장버튼 활성화
        		this.aprv_view_true();					//화면기능 활성화
        	}
        	//1차 결재시
        	else if(this.ds_position.getColumn(0,"aprvInfoCont") == ""){
        		if(this.ds_position.getColumn(0,"aprvprgrInfoWritSabun") == strSabun){		//작성자와 접속자가 같은경우
        			//alert("aprvTest1: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(true);
        			this.aprv_view_true();
        		}
        		else if(this.ds_position.getColumn(0,"aprvInfoSabun") == strSabun){		//결재자와 접속자가 같은경우
        			//alert("aprvTest2: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			//this.aprv_view_false();
        			this.aprv_view_true();
        		}
        		else if(this.ds_position.getColumn(1,"aprvInfoSabun") == strSabun){		//2차결재자와 접속자가 같은경우
        			//alert("aprvTest3: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			//this.aprv_view_false();
        			this.aprv_view_true();
        		}
        		else{	//그외 경우
        			//alert("aprvTest4: "+id);
        			this.btn_aprv.set_enable(false);
        			this.btn_lawsuit_reg.set_enable(false);
        			//this.aprv_view_false();
        			this.aprv_view_true();
        		}
        	}
        	//2차 결재시
        	else if(this.ds_position.getColumn(1,"aprvInfoCont") == ""){		
        		
        		if(this.ds_position.getColumn(0,"aprvInfoSabun") == strSabun){		//결재자와 접속자가 같은경우
        			//alert("aprvTest5: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}
        		else if(this.ds_position.getColumn(1,"aprvInfoSabun") == strSabun){		
        			//alert("aprvTest6: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}
        		else if(this.ds_position.getColumn(2,"aprvInfoSabun") == strSabun){		
        			//alert("aprvTest7: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}		
        		else{	//그외 경우
        			//alert("aprvTest8 "+id);
        			this.btn_aprv.set_enable(false);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}
        	}
        	//3차 결재시
        	else if(this.ds_position.getColumn(2,"aprvInfoCont") == ""){		
        		
        		if(this.ds_position.getColumn(1,"aprvInfoSabun") == strSabun){		//결재자와 접속자가 같은경우
        			//alert("aprvTest9: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}
        		else if(this.ds_position.getColumn(2,"aprvInfoSabun") == strSabun){		
        			//alert("aprvTest10: "+id);
        			this.btn_aprv.set_enable(true);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}
        		else{	//그외 경우
        			//alert("aprvTest11 "+id);
        			this.btn_aprv.set_enable(false);
        			this.btn_lawsuit_reg.set_enable(false);
        			this.aprv_view_false();
        		}
        	}
        	//3차 결재완료시
        	else if(this.ds_position.getColumn(2,"aprvInfoCont") != ""){		
        		//alert("aprvTest12"+id);
        		this.btn_aprv.set_enable(false);
        		this.btn_lawsuit_reg.set_enable(false);
        		this.aprv_view_false();
        		this.ds_pladef.rowposition = -1;
        	}
        	application.gds_Params.deleteAll();
        }

        /********************************************************************************
         * Desc		: 결재기능에 따른 화면	활성화
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.aprv_view_true=function()
        {
        	//기본정보
        	//edt_no.enable=true;			//소송관리번호 활성화
        	this.edt_no.readonly= true;		//소송관리번호 읽기전용
        	this.cmb_inst_code.set_enable(true);		//심급 활성화
        	this.cmb_pladef_code.set_enable(false);	//당사원피고구분 활성화
        	
        	//소송관리
        	this.cmb_search_court.set_enable(true);		//신청법원 활성화
        	this.rdo_bojo.set_enable(true);				//보조참가여부 활성화
        	//edt_app_case_no.enable = true;			//신청사건번호 활성화
        	this.cmb_case_type.set_enable(true);		//사건유형 활성화
        	this.edt_req_no.set_enable(false);			//소제기의뢰번호 활성화
        	this.btn_law_mgr_reg.set_enable(true);		//소송담당자등록 활성화
        	this.btn_add_lawsuit.set_enable(true);		//반소사항 활성화
        	this.btn_app_case_no.set_enable(true);		//신청사건번호 검색 활성화
        	this.btn_req_noti_src.set_enable(true);		//소제기의뢰번호 검색 활성화
        		
        	//심급관리
        	this.cmb_status.set_enable(true);			//소송진행상태 활성화
        	this.edt_caseNo.set_enable(false);			//사건번호 활성화
        	this.edt_admName.set_enable(true);			//심급명 활성화
        	this.cmb_court_exe.set_enable(true);		//수행법원 활성화
        	this.cal_end_invoice_date.set_enable(true);
        	this.cal_invoice_date.set_enable(true);		//송장송부일자 활성화
        	this.txt_comment.set_enable(true);
        	this.txt_opin.set_enable(true);
        	//this.edt_judge.set_enable(false);
        	this.edt_judge_name.set_enable(false);
        	this.edt_depuName.set_enable(true);
        	this.edt_deName.set_enable(true);
        	//this.edt_lawyer.set_enable(false);
        	this.edt_lawyer_name.set_enable(false);
        	this.btn_case_no.set_enable(true);			//사건번호검색버튼 활성화
        	this.btn_judge_src.set_enable(true);		//담당판사검색버튼 활성화
        	this.btn_lawyer.set_enable(true);			//위임변호사검색버튼 활성화
        	
        	//피고목록
        	this.grd_plaintiff.set_enable(true);		//피고목록 그리드 활성화
        	this.btn_def_reg.set_enable(true);			//피고목록 신규버튼 활성화
        	if(this.ds_pladef.rowcount != 0){
        		this.btn_mediation_reg.set_enable(true);
        		this.btn_lawsuitrec_reg.set_enable(true);
        	}
        	
        	// JKIM_191225
        	this.btn_aprv.set_visible(true);
        	this.sta_aprv001.set_visible(true);
        	this.sta_aprv002.set_visible(true);
        	this.sta_aprv003.set_visible(true);
        	this.sta_aprv011.set_visible(true);
        	this.sta_aprv012.set_visible(true);
        	this.sta_aprv013.set_visible(true);
        	this.sta_34.set_visible(true);
        	
        }
        /********************************************************************************
         * Desc		: 결재기능에 따른 화면	비활성화
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.aprv_view_false=function()
        {
        	//기본정보
        	this.edt_no.set_enable(false);			//소송관리번호 비활성화
        	this.cmb_inst_code.set_enable(false);		//심급 비활성화
        	this.cmb_pladef_code.set_enable(false);	//당사원피고구분 비활성화
        	
        	//소송관리
        	this.cmb_search_court.set_enable(false);	//신청법원 비활성화
        	this.rdo_bojo.set_enable(false);				//보조참가여부 비활성화
        	this.edt_app_case_no.set_enable(false);		//신청사건번호 비활성화
        	this.cmb_case_type.set_enable(false);		//사건유형 비활성화
        	this.edt_req_no.set_enable(false);			//소제기의뢰번호 비활성화
        	this.btn_law_mgr_reg.set_enable(false);		//소송담당자등록 비활성화
        	this.btn_add_lawsuit.set_enable(false);		//반소사항 비활성화
        	this.btn_app_case_no.set_enable(false);		//신청사건번호 검색 비활성화
        	this.btn_req_noti_src.set_enable(false);	//소제기의뢰번호 검색 비활성화
        		
        	//심급관리
        	this.cmb_status.set_enable(false);			//소송진행상태 비활성화
        	this.edt_caseNo.set_enable(false);			//사건번호 비활성화
        	this.edt_admName.set_enable(false);			//심급명 비활성화
        	this.cmb_court_exe.set_enable(false);		//수행법원 비활성화
        	this.cal_end_invoice_date.set_enable(false);
        	this.cal_invoice_date.set_enable(false);		//송장송부일자 비활성화
        	this.txt_comment.set_enable(false);
        	this.txt_opin.set_enable(false);
        	//this.edt_judge.set_enable(false);
        	this.edt_judge_name.set_enable(false);
        	this.edt_depuName.set_enable(false);
        	this.edt_deName.set_enable(false);
        	//this.edt_lawyer.set_enable(false);
        	this.edt_lawyer_name.set_enable(false);
        	this.btn_case_no.set_enable(false);			//사건번호검색버튼 비활성화
        	this.btn_judge_src.set_enable(false);		//담당판사검색버튼 비활성화
        	this.btn_lawyer.set_enable(false);			//위임변호사검색버튼 비활성화
        	
        	//피고목록
        	this.grd_plaintiff.set_enable(false);		//피고목록 그리드 비활성화
        	this.btn_def_reg.set_enable(false);			//피고목록 신규버튼 비활성화
        	this.btn_mediation_reg.set_enable(false);
        	this.btn_lawsuitrec_reg.set_enable(false);
        	
        	// JKIM_191225
        	this.btn_aprv.set_visible(false);
        	this.sta_aprv001.set_visible(false);
        	this.sta_aprv002.set_visible(false);
        	this.sta_aprv003.set_visible(false);
        	this.sta_aprv011.set_visible(false);
        	this.sta_aprv012.set_visible(false);
        	this.sta_aprv013.set_visible(false);
        	this.sta_34.set_visible(false);
        }

        /********************************************************************************
         * Event	: grd_plaintiff_Oncelldblclick
         * Desc		: 원피고 목록을 더블클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.grd_plaintiff_oncelldblclick=function(obj,e)
        {//여기
        	var lawsuitNo = this.edt_no.text;
        	var pladefCode = this.cmb_pladef_code.value;
        	var pladefNo = this.ds_pladef.getColumn(e.row,"pladefSeq");
        	var instanceCode = this.cmb_inst_code.value;
        	var defchk = "";	//원피고 구분값
        	
        	if(e.cell >= 6) { 	//원피고 주소 선택시
        		
        		//var rtn = dialog("zipcode","adm::zipcode.xfdl","LAWSUIT_LIST",{zipcode:this.ds_pladef.getColumn(this.ds_pladef.rowposition, "pladefPos")},"showtitlebar=true",0,0); // 소송관리번호 검색
        		this.Plugin00.callMethod("Navigate2", "http://localhost:8080/pd_law_nexa/jsp/zipcodeSearch.jsp");  // JKIM_2020.02.17 : jsp 디렉토리로 변경
        		this.pladefPosChange(e);
        	}
        	// 셀에 값이 공백일 경우 마스크 기본타입으로 처리
        	if(e.cell == 4 || e.cell == 5){
        		var mTel = this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefMainTel");
        		if(mTel.length == 0){
        			return '###-####-####';
        		}
        	}
        }

        /*===============================================================================
         * 4. Component 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Event	: Button onclick
         * Desc		: 소송관리버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_lawsuit_search_onclick=function(obj,e)
        {
        	var lawSearchNo = "";	//소송관리번호 검색값
        	 
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("SearchNo"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_ADM_NO.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");

        	//lawSearchNo = dialog("SearchNo","lawsuit::LAWSUIT_ADM_NO.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0); // 소송관리번호 검색
        	//trace(lawSearchNo);
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        }

        this.modal_callback = function(sSvcId,variant)
        {
        	
        	if(sSvcId == "SearchNo")
        		{
        			/*trace("lawSearchNo  =" + variant);
        			trace("lawSearchNo length =" + variant.length);
        			trace("lawSearchNo substr(0,10) =" + variant.substr(0,10));
        			trace("lawSearchNo gfn_IsNull =" + this.gfn_IsNull(variant));*/
        		
        			if(this.gfn_IsNull(variant)==false){
        				lawsrcrlt = variant.substr(0,10);	// 소송관리번호
        					if(variant.length == "13"){
        						instcdrlt = variant.substr(10,3);	//심급코드
        				}
        				//trace("소송관리 검색");
        				//trace("lawsrcrlt = "+lawsrcrlt);
        				//trace("instcdrlt = "+instcdrlt);
        				this.getLawsuitSearch(lawsrcrlt,instcdrlt); //소송관리검색
        			}else{
        				return false;
        			}
        	}else if(sSvcId == "LAWSUIT_ADD"){
        	
        		if(this.gfn_IsNull(variant)==false){
        			var sp = "";
        			sp = variant.split("&");
        			this.ds_lawsuit.setColumn(0,"lawsuitCtaWtr",sp[0]);
        			this.ds_lawsuit.setColumn(0,"lawsuitCtaNo",sp[1]);
        			this.ds_lawsuit.setColumn(0,"lawsuitCtaCaseNo",sp[2]);
        			this.ds_lawsuit.setColumn(0,"lawsuitCtaChg",sp[3]); 
        			//trace(ds_lawsuit.saveXML());
        		}
        	}
        	else if(sSvcId == "SearchCaseNO")
        	{
        		if(this.gfn_IsNull(variant)==false){		//신청사건번호가 있을 경우
        			//var sp = "";
        			//sp = variant.split("&");
        			this.ds_lawsuit.setColumn(this.ds_lawsuit.rowposition,"lawsuitAplCaseCode",variant);
        			//edt_app_case_no.text = appCaseNo;
        			//trace(" this.ds_lawsuit.getRowType = " + this.ds_lawsuit.getRowType(this.ds_lawsuit.rowposition));
        			if(this.ds_lawsuit.getRowType(this.ds_lawsuit.rowposition) == "2"){
        				//edt_caseNo.text = appCaseNo;
        				if(this.btn_case_no.enable==true){
        					this.ds_instance.setColumn(this.ds_instance.rowposition,"instAdmCaseNo",variant);
        				} 
        			} 
        		}
        		else{
        			return false;
        		} 
        	}
        	else if(sSvcId == "SearchCaseNO2"){
        		if(this.gfn_IsNull(variant)==false){		//사건번호가 있을 경우
        			//edt_caseNo.text = caseNo;
        			this.ds_instance.setColumn(0,"instAdmCaseNo",variant);
        		}
        		else{
        			return false;
        		}
        	}
        	else if(sSvcId == "LAWSUIT_NOTI_NO") {
        		this.ds_lawsuit.setColumn(0,"lawRaisreqNo",variant);
        		if(this.cmb_pladef_code.value == "002"){
        			//fn_getRaisdef(reqNotiNo);	//소제기의뢰 원피고 불러오기
        			//fn_getRaisrea(reqNotiNo);	//소제기의뢰 사유 불러오기 
        			lawsrcrlt = variant.substr(0,10);	// 소송관리번호
        			instcdrlt = variant.substr(10,3);	//심급코드
        			//this.getPladefSearch(lawsrcrlt,instcdrlt);
        		}else{
        			return false;
        		} 
        	}else if(sSvcId == "POP_RAISREQ_SCH"){
        		
        		//alert(variant);
        		this.edt_req_no.set_value(variant);
        		
        		var params = variant.split("/");
        		
        		var num = params[0];
        		trace("modal val : "+num);
        		
        		this.fn_getRaisdef(params[0]);
        		
        		/*
        		this.ds_lawsuit.setColumn(0,"lawRaisreqNo",variant);
        		lawRaisreqNo = variant.substr(0,10);	//소제기 의뢰번호
        		
        		if(this.ds_pladef.rowcount != 0){
        			this.ds_pladef_1.copyData(this.ds_pladef);	//원피고목록 존재시 보관
        		}

        		this.ds_pladef.clearData();		//원피고목록 삭제
        				
        		var cnt = this.ds_raisdef.rowcount;	//소제기의뢰 불러온 값 count
        		
        		for(var i=0; i<cnt; i++){
        		
        		var aRow = this.ds_pladef.addRow();
        		
        		
        		//소제기의뢰피고를 원피고에 복사
        		this.ds_pladef.copyRow(aRow, "ds_raisdef",i,"pladefName=lawRaisreqDefName,pladefRegNo=lawRaisreqDefRegno,pladefClamVol=lawRaisreqDefClamchg,pladefMainTel=lawRaisreqDefTel,pladefAddr1=lawRaisreqDefAddr,pladefPos=lawRaisreqDefPos"); 
        		alert(this.ds_pladef.getColumn(0,"pladefName"));
        		this.ds_pladef.setColumn(i,"pladefRegInst",this.cmb_inst_code.value);
        		
        		this.ds_pladef.setColumn(i,"pladefAddTel","");
        		this.ds_pladef.setColumn(i,"pladefAddr2","");
        		this.ds_pladef.setColumn(i,"pladefEndInst","");
        		
        		this.ds_pladef.setRowType(i,"insert");
        		
        		}
        		
        		if(this.ds_pladef_1.rowcount > 0){
        		
        			this.ds_pladef.appendData(this.ds_pladef_1);		// 현 원피고목록에 기존 원피고목록 합산
        			
        			var fRow;
        		
        			for(var i=0; i<this.ds_pladef.rowcount; i++){
        			
        				fRow = this.ds_pladef.findRow("pladefRegNo",this.ds_pladef.getColumn(i,"pladefRegNo"),i+1);	// 자기자신의 값 찾기
        				
        					if(fRow != -1){
        						this.ds_pladef.deleteRow(i);
        						i--;
        					}
        			
        			}
        			
        			var rowcnt = this.ds_pladef.rowcount;
        			
        				for(var i=0; i<rowcnt; i++){
        					if(this.ds_pladef.getColumn(i,"pladefSeq") == null){
        						this.ds_pladef.setRowType(i,"insert");
        					}
        				}
        		
        		}
        		
        		// 이미 불러온 소제기 원피고가 있는 경우
        		if(this.ds_raisdef_1.rowcount > 0){
        		
        			var fRow;
        			
        			for(var i=0; i<this.ds_raisdef_1.rowcount; i++){
        			
        				fRow = this.ds_pladef.findRow("pladefRegNo", this.ds_raisdef_1.getColumn(i,"pladefRegNo"));
        				
        				if(fRow != -1){
        				
        					this.ds_pladef.deleteRow(fRow);
        					this.ds_pladef.setRowType(fRow,"delete");
        				
        				}
        			
        			}
        		
        			this.ds_pladef_1.copyData(this.ds_pladef);		//백업된 소제기가 제거된 원피고 백업
        			this.ds_raisreq_1.copyData(this.ds_raisreq);	//소제기 원피고 백업
        			this.ds_pladef.clearData();
        			
        			for(var i=0; icnt; i++){
        			
        				var aRow = this.ds_pladef.addRow();
        				//소제기 의뢰피고를 원피고목록에 복사
        				this.ds_pladef.copyRow(aRow,"ds_raisdef",i,"pladefName=lawRaisreqDefName,pladefRegNo=lawRaisreqDefRegno,pladefClamVol=lawRaisreqDefClamchg,pladefMainTel=lawRaisreqDefTel,pladefAddr1=lawRaisreqDefAddr,pladefPos=lawRaisreqDefPos"); 
        				
        				this.ds_pladef.setColumn(i,"pladefRegInst",this.cmb_inst_code.value);	// 등록심급
        				
        				this.ds_pladef.setColumn(i,"pladefAddTel","");
        				this.ds_pladef.setColumn(i,"pladefAddr2", "");
        				this.ds_pladef.setColumn(i,"pladefEndInst","");
        				
        			}
        			
        			this.ds_pladef.appendData(this.ds_pladef_1);	// 현 원피고목록에 기존 원피고 목록 합산
        			
        			var fRow;
        			
        			for(var i=0; i<this.ds_pladef.rowcount; i++){
        			
        				fRow = this.ds_pladef.findRow("pladefRegNo", this.ds_pladef.getColumn(i,"pladefRegNo") ,i+1);	//자기자신의 값 찾기
        				
        				if(fRow != -1){
        					this.ds_pladef.deleteRow(i);
        					i--;
        				}
        			}
        		}
        		
        		if(this.ds_raisdef.rowcount != 0){
        		
        			this.ds_raisdef_1.copyData(this.ds_raisdef);	//소제기의뢰 목록 존재시 보관
        		
        		}*/
        	}		
        	else if(sSvcId == "LEGAL_OFFICIAL_CHECK") {
        			if (this.gfn_IsNull(variant)==false){
        			sp1 = variant.split("&");
        			sp2 = sp1[0].split("=");
        			sp3 = sp1[1].split("=");

        			var judgeid = sp2[1];	//담당판사ID
        			var judgename= sp3[1];	//담당판사명
        		
        			if(this.gfn_IsNull(judgename)==false){	//담당판사값이 있을경우
        				//edt_judge_name.text=judgename;
        				//edt_judge.text=judgeid;
        				this.ds_instance.setColumn(0,"instAdmJudName",judgename);
        				this.ds_instance.setColumn(0,"instAdmJudId",judgeid);
        			}
        			else{
        				return false;
        			}
        		}
        	}
        	else if(sSvcId == "LEGAL_OFFICIAL_CHECK3") 
        	{
        		if (this.gfn_IsNull(variant)==false){
        			sp1 = variant.split("&");
        			sp2 = sp1[0].split("=");
        			sp3 = sp1[1].split("=");

        			var lawyerid = sp2[1];	//위임변호사ID
        			var lawyername= sp3[1];	//위임변호사명
        			
        			if(this.gfn_IsNull(variant)==false){	//위임변호사값이 있을경우
        				//edt_judge_name.text=judgename;
        				//edt_judge.text=judgeid;
        				this.ds_instance.setColumn(0,"instAdmEntLyrName",lawyername);
        				this.ds_instance.setColumn(0,"instAdmEntLyrId",lawyerid);
        			}
        			else{
        				return false;
        			}
        		}		
        	}
        		
        	else if(sSvcId == "aprvcomm" || sSvcId == "aprvprogcomm")
        	{
        		if(this.gfn_IsNull(variant)==false){
        			this.aprv_search(variant);
        		}
        		else{
        			return false;
        		}
        	}
        }

        /********************************************************************************
         * Event	: Button_app_case_no onclick
         * Desc		: 신청사건번호버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_app_case_no_onclick=function(obj,e)
        {
        	var appCaseNo = "";	//신청사건번호변수
        	
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("SearchCaseNO"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::POP_CASENO_SEARCH.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	//appCaseNo = dialog("SearchCaseNO","lawsuit::POP_CASENO_SEARCH.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0); //신청사건번호 값 호출
        }

        /********************************************************************************
         * Event	: Button_case_no onclick
         * Desc		: 사건번호버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_case_no_onclick=function(obj,e)
        {
        	if(this.ds_instance.rowcount == 0){
        		//alert("심급관리내역을 추가해주십시요");
        		return false;
        	}
        	else{
        		var caseNo= "";		//사건번호변수
        		
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        	 
        		var newChild = new ChildFrame;
        		newChild.init("SearchCaseNO2"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "lawsuit::POP_CASENO_SEARCH.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        	
        		newChild.showModal(this.getOwnerFrame()
        							, ""
        							, this
        							, "modal_callback");
        		
        		//caseNo = dialog("SearchCaseNO","lawsuit::POP_CASENO_SEARCH.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0);//사건번호 검색
        	}
        }

        /********************************************************************************
         * Event	: Button_req_noti_src onclick
         * Desc		: 소제기의뢰, 소송고지번호 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_req_noti_src_onclick=function(obj,e)
        {
        	var reqNotiNo = "";		// 소제기,소송고지 번호 변수
        	//trace(cmb_pladef_code.value);
        	if(this.cmb_pladef_code.value == "000"){
        		alert("당사의 원피고구분을 선택하세요");
        		//cmb_pladef_code.ActionDownList();
        		this.cmb_pladef_code.dropdown();
        		return false;
        	}
        	else if(this.cmb_pladef_code.value == "001"){		// 당사 원고일 경우
        		var raiscode = "r1";
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		var newChild = new ChildFrame;
        		newChild.init("POP_RAISREQ_SCH"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "rais::POP_RAISREQ_SCH.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame()
        						, {raiscode:raiscode}
        						, this
        						, "modal_callback");
        		//trace(reqNotiNo);
        	}
        	else if(this.cmb_pladef_code.value == "002"){		// 당사 피고일 경우
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        		var newChild = new ChildFrame;
        		newChild.init("LAWSUIT_NOTI_NO"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "lawsuit::LAWSUIT_NOTI_NO.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame()
        						, ""
        						, this
        						, "modal_callback");
        	}
        }

        /********************************************************************************
         * Event	: Button_law_mgr_reg onclick
         * Desc		: 소송담당자 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_law_mgr_reg_onclick=function(obj,e)
        {
        	var lawsuit_no = this.edt_no.text;	//소송관리번호
        	if(lawsuit_no == ""){
        		alert("소송정보가 등록되어 있어야 합니다.");
        		return false;
        	}
        	else{
        	 var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	 
        	 var newChild = new ChildFrame;
        	 newChild.init("Regist"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "lawsuit::LAWSUIT_TAB_LIST_NO.xfdl");
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						, {lawsuitAdmNo:lawsuit_no}
        						, this);
        	}
        }

        /********************************************************************************
         * Event	: Button_add_lawsuit onclick
         * Desc		: 반소사항등록 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_add_lawsuit_onclick=function(obj,e)
        {
        	var lawsuit_no = this.edt_no.text;	// 소송관리번호
        	var lawsuitCtaWtr="";
        	var lawsuitCtaNo="";
        	var lawsuitCtaCaseNo="";
        	var lawsuitCtaChg="";
        	
        	if(this.gfn_IsNull(lawsuit_no)==true){
        		alert("소송정보가 등록되어 있어야 합니다.");
        		return false;
        	}
        	else{
        		//Dialog("LAWSUIT::LAWSUIT_ADD","no="+lawsuit_no);
        		//trace(ds_lawsuit.saveXML());
        		lawsuitCtaWtr = this.ds_lawsuit.getColumn(0,"lawsuitCtaWtr");
        		lawsuitCtaNo = this.ds_lawsuit.getColumn(0,"lawsuitCtaNo");
        		lawsuitCtaCaseNo = this.ds_lawsuit.getColumn(0,"lawsuitCtaCaseNo");
        		lawsuitCtaChg = this.ds_lawsuit.getColumn(0,"lawsuitCtaChg");
        		
        	 /*	var rtn = dialog("LAWSUIT_ADD","lawsuit::LAWSUIT_ADD.xfdl","LAWSUIT_LIST",
        		{no:lawsuit_no,str_CtaWtr:lawsuitCtaWtr,str_CtaNo:lawsuitCtaNo,str_CtaCaseNo:lawsuitCtaCaseNo,str_CtaChg:lawsuitCtaChg},
        		"showtitlebar=true",0,0); */
        		
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        	 
        		var newChild = new ChildFrame;
        		newChild.init("LAWSUIT_ADD"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "lawsuit::LAWSUIT_ADD.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame()
        						, {no:lawsuit_no,str_CtaWtr:lawsuitCtaWtr,str_CtaNo:lawsuitCtaNo,str_CtaCaseNo:lawsuitCtaCaseNo,str_CtaChg:lawsuitCtaChg}
        						, this
        						, "modal_callback");
        	}
        }

        /********************************************************************************
         * Event	: Button_judge_src onclick
         * Desc		: 담당판사 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_judge_src_onclick=function(obj,e)
        {
        	if(this.ds_instance.rowcount == 0){
        		//alert("심급관리내역을 추가해주십시요");
        		return false;
        	}
        	else{
        	
        		var judgesrc = ""; //담당판사변수
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        	 
        		var newChild = new ChildFrame;
        		newChild.init("LEGAL_OFFICIAL_CHECK"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "lawsuit::LEGAL_OFFICIAL_CHECK.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame() //담담판사 검색
        						, ""//{job:'001'}
        						, this
        						, "modal_callback");
        	}	
        }

        /********************************************************************************
         * Event	: Button_lawyer onclick
         * Desc		: 위임변호사 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_lawyer_onclick=function(obj,e)
        {
        	if(this.ds_instance.rowcount == 0){
        		//alert("심급관리내역을 추가해주십시요");
        		return false;
        	}
        	else{
        		var lawyercode = ""; //위임변호사변수
        		
        		var nLeft = system.clientToScreenX(this, 10);
        		var nTop = system.clientToScreenY(this, 10);
        	 
        		var newChild = new ChildFrame;
        		newChild.init("LEGAL_OFFICIAL_CHECK3"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "lawsuit::LEGAL_OFFICIAL_CHECK.xfdl");
        		newChild.set_openalign("center middle");
        		newChild.set_dragmovetype("all");
        		newChild.showModal(this.getOwnerFrame() //담담판사 검색
        						, ""//{job:'003'}
        						, this
        						, "modal_callback");
        		}	
        }

        /********************************************************************************
         * Event	: Button_def_reg onclick
         * Desc		: 원피고 신규 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_def_reg_onclick=function(obj,e)
        {
        	if(this.cmb_pladef_code.value == "000"){
        		alert("당사 원피고 구분은 필수입니다.");
        		//cmb_pladef_code.ActionDownList();
        		this.cmb_pladef_code.dropdown();
        		return false;
        	}
        	else
        	{
        		var row = this.ds_pladef.addRow();
        		this.btn_mediation_reg.set_enable(false);
        		this.btn_lawsuitrec_reg.set_enable(false);		
        		//this.ds_pladef.setRowType(row,"2");
        	}
        }

        /********************************************************************************
         * Event	: Button_lawsuit_reg onclick
         * Desc		: 소송저장 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_lawsuit_reg_onclick=function(obj,e)
        {
        	//trace(ds_lawsuit.saveXML());
        	//trace(ds_instance.saveXML());
        	//trace(ds_lawsuit.saveXML());
        	//var row = ds_pladef.rowposition;
        	//trace("this.ds_pladef.rowcount ="+this.ds_pladef.rowcount);
        	//trace("this.cmb_pladef_code.value ="+this.cmb_pladef_code.value);
        	//trace("this.cmb_inst_code.value ="+this.cmb_inst_code.value);
        	//trace("this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,lawsuitAdmNo) ="+this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitAdmNo"));
        	/*trace("fdsfdf :: "+this.ds_pladef.saveXML());
        	for(var t=0; t<this.ds_pladef.getRowCount(); t++ )
        	{
        		trace("rowType :: "+this.ds_pladef.getRowType(t));
        	}
        	*/
        	for(var i= 0; i< this.ds_pladef.rowcount; i++)
        	{ 
        		if(this.cmb_pladef_code.value == "001"){	//당사원고일때
        			this.ds_pladef.setColumn(i,"pladefSepCode","002");
        		}
        		else if(this.cmb_pladef_code.value == "002"){	//당사피고일떄
        			this.ds_pladef.setColumn(i,"pladefSepCode","001");
        		}
        		
        		//ds_pladef.SetColumn(row,"pladefSeq",ds_pladef.rowcount);			//원피고일련번호 입력
        		this.ds_pladef.setColumn(i,"pladefRegInst",this.cmb_inst_code.value);	//등록심급입력
        		//ds_pladef.setColumn(i,"pladefRegInst",instcdrlt);	//등록심급입력
        		
        		if(this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitAdmNo") != null){
        			this.ds_pladef.setColumn(i,"lawsuitAdmNo",this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitAdmNo"));
        		}
        	}
        	
        	if(this.cmb_pladef_code.value=="001"){ 		//당사 원고일 경우
        		this.ds_lawsuit.setColumn(this.ds_lawsuit.rowposition,"lawRaisreqNo",this.edt_req_no.text);
        		this.ds_lawsuit.setColumn(this.ds_lawsuit.rowposition,"lawsuitNotiAdmNo","");
        	}else if(this.cmb_pladef_code.value=="002"){ //당사 피고일 경우
        		this.ds_lawsuit.setColumn(this.ds_lawsuit.rowposition,"lawsuitNotiAdmNo",this.edt_req_no.text);
        		this.ds_lawsuit.setColumn(this.ds_lawsuit.rowposition,"lawRaisreqNo","");
        	}
        	if(!this.gfn_IsNull(this.cmb_inst_code.value)){
        		this.ds_instance.setColumn(this.ds_instance.row,"instAdmCode",this.cmb_inst_code.value);
        	}
        	//ds_instance.setColumn(ds_instance.rowposition,"instAdmCode",instcdrlt);
        	if (!this.fn_validation()){	//유효성검사
        			return;
        		}
        	/*
        	if(this.gfn_IsNull(this.ds_instance.getColumn(0,"lawsuitAdmNo"))){
        		this.ds_instance.clearData();
        	}
        	if(this.gfn_IsNull(this.ds_pladef.getColumn(0,"lawsuitAdmNo"))){
        		this.ds_pladef.clearData();
        	}
        	*/
        	var strSvcid="insertLawsuitAll";
        	var strController="lawsuit/saveLawsuitAll.do";
        	
        	trace("ds_input1 :: "+this.ds_instance.saveXML());
        	//trace("ds_input2 :: "+this.ds_pladef.saveXML());
        	
        	this.gfn_transaction(this
        						,strSvcid
        						,strController
        						,"ds_input=ds_lawsuit:U ds_input1=ds_instance:U ds_input2=ds_pladef:U"
        						,"ds_output=ds_output"
        						,""
        						,"fnCallback");
        						
        	trace("output으로 받은 ds_output : " + this.ds_output.saveXML());
        }

        /********************************************************************************
         * Event	: Button_mediation onclick
         * Desc		: 재판외화해 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_lawsuitrec_reg_onclick=function(obj,e)
        {
        	if(this.ds_pladef.rowcount == 0){
        		alert(this.sta_pladef_list.text+"이 없습니다.");
        		return false;
        	}
        	
        	var selectname = this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefName");
        		
        	var rtn = confirm(selectname+" 님의 재판외화해를 실행하시겠습니까?");
        	
        	if(rtn == true)
        	{
        		var lawsuitAdmNo = this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitAdmNo");
        		var instAdmCode = this.ds_instance.getColumn(this.ds_instance.rowposition,"instAdmCode");
        		var variant = lawsuitAdmNo + instAdmCode
        		var aArgs =	{
        						lawsuitList:variant
        					}
        		this.gfnOpenMenu("prgr::LAWSUIT_REC001", aArgs);
        	
        // 	if(rtn == "1"){
        // 	
        // 		// JKIM_2020.01.02 : 메뉴이동
        // 		var oObj = {
        // 			  ds : this.ds_openlaw,
        // 			  nRow : 1,
        // 			  oArg  : []
        // 		};
        // 		
        // 		var nRow = application.gds_Params.addRow();
        // 		application.gds_Params.setColumn(nRow, "PARAM_ID", "LAWSUIT_LIST");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", lawsrcrlt);
        // 		application.gds_Params.setColumn(nRow, "MENU_ID", instcdrlt);
        // 
        // 		Iject.Mdi.call(this, oObj);
        	
        	/*  JKIM_2020.01.02 : gfn_ChkOpenMenu() 미완성된 함수로 오류발생함.
        		application.gds_Params.setColumn(application.gds_Params.addRow(),"PARAM_ID","lawSearchNo");
        		application.gds_Params.setColumn(application.gds_Params.rowposition,"PARAM_VAL",this.edt_no.value+"@"+this.ds_instance.getColumn(this.ds_instance.rowposition,"instAdmCode"));
        		application.gds_Params.setColumn(application.gds_Params.rowposition,"MENU_ID","LAWSUIT_LIST");
        		
        		trace(gds_Params.saveXML());
        		this.gfn_ChkOpenMenu("1008", this.ds_openlaw);
        					
        		Parent.ds_ComInfo.clearData();
        		
        		if(Parent.ds_ComInfo.rowcount() == 0){
        			Parent.ds_ComInfo.addrow();
        		}
        		
        		Parent.ds_ComInfo.setColumn(0,"searchValue","3");	//조정안버튼으로 넘어갈 경우
        		Parent.ds_ComInfo.setColumn(0,"lawsuitAdmNo",ds_lawsuit.GetColumn(ds_lawsuit.rowposition,"lawsuitAdmNo"));	//소송관리번호
        		Parent.ds_ComInfo.setColumn(0,"instAdmCode",cmb_inst_code.Value);	//심급
        		Parent.ds_ComInfo.setColumn(0,"pladefSeq",ds_pladef.GetColumn(ds_pladef.rowposition,"pladefSeq"));	//원피고 일련번호
        		dataPageLink("PRGR::Lawsuit_rec","");	//재판외 화해
        	*/
        	
        	}
        	else{
        		return false;
        	}
        }

        
        this.btn_mediation_reg_onclick = function(obj,e)
        {
        	if(this.ds_pladef.rowcount == 0){
        		alert(this.sta_pladef_list.text+"이 없습니다.");
        		return false;
        	}
        	
        	var selectname = this.ds_pladef.getColumn(this.ds_pladef.rowposition,"pladefName");
        		
        	var rtn = confirm(selectname+" 님의 조정안을 실행하시겠습니까?");

        	if(rtn == true)
        	{
        		var lawsuitAdmNo = this.ds_lawsuit.getColumn(this.ds_lawsuit.rowposition,"lawsuitAdmNo");
        		var instAdmCode = this.ds_instance.getColumn(this.ds_instance.rowposition,"instAdmCode");
        		var variant = lawsuitAdmNo + instAdmCode
        		var aArgs =	{
        						lawsuitList:variant
        					}
        		this.gfnOpenMenu("prgr::MEDIATION001", aArgs);
        	
        		// JKIM_2020.01.02 : 메뉴이동 
        // 		var oObj = {
        // 			  ds : this.ds_openlaw,
        // 			  nRow : 0,
        // 			  oArg  : []
        // 		};
        // 		//alert("lawsrcrlt : " + lawsrcrlt);
        // 		//alert("instcdrlt : " + instcdrlt);
        // 		var nRow = application.gds_Params.addRow();
        // 		application.gds_Params.setColumn(nRow, "PARAM_ID", "LAWSUIT_LIST");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", lawsrcrlt); // 소송관리번호
        // 		application.gds_Params.setColumn(nRow, "MENU_ID", instcdrlt); // 심급
        // 
        // 		Iject.Mdi.call(this, oObj);

        
        	/*  JKIM_2020.01.02 : gfn_ChkOpenMenu() 미완성된 함수로 오류발생함.
        		application.gds_Params.setColumn(application.gds_Params.addRow(),"PARAM_ID","lawSearchNo");
        		application.gds_Params.setColumn(application.gds_Params.rowposition,"PARAM_VAL",this.edt_no.value+"@"+this.ds_instance.getColumn(this.ds_instance.rowposition,"instAdmCode"));
        		application.gds_Params.setColumn(application.gds_Params.rowposition,"MENU_ID","LAWSUIT_LIST");

        		this.gfn_ChkOpenMenu("PRGR::MEDIATION001",this.ds_openlaw);		

        		Parent.ds_ComInfo.clearData();
        		
        		if(Parent.ds_ComInfo.rowcount() == 0){
        			Parent.ds_ComInfo.addrow();
        		}
        		
        		Parent.ds_ComInfo.setColumn(0,"searchValue","3");	//조정안버튼으로 넘어갈 경우
        		Parent.ds_ComInfo.setColumn(0,"lawsuitAdmNo",ds_lawsuit.GetColumn(ds_lawsuit.rowposition,"lawsuitAdmNo"));	//소송관리번호
        		Parent.ds_ComInfo.setColumn(0,"instAdmCode",cmb_inst_code.Value);	//심급
        		Parent.ds_ComInfo.setColumn(0,"pladefSeq",ds_pladef.GetColumn(ds_pladef.rowposition,"pladefSeq"));	//원피고 일련번호
        		dataPageLink("PRGR::Lawsuit_rec","");	//재판외 화해
        	*/
        	
        	}
        	else
        	{
        	
        		return false;
        	}
        	
        }

        
        /********************************************************************************
         * Event	: Button_aprv onclick
         * Desc		: 결재 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_aprv_onclick=function(obj,e)
        {
        	var validation=true;
        	
        	var writSabun = this.ds_position.getColumn(0, "aprvprgrInfoWritSabun");
        	var infoSabun_01 = this.ds_position.getColumn(0, "aprvInfoSabun");
        	var infoSabun_02 = this.ds_position.getColumn(1, "aprvInfoSabun");
        	var infoSabun_03 = this.ds_position.getColumn(2, "aprvInfoSabun");
        	var loginSabun = application.gds_User.getColumn(application.gds_User.rowposition, "sabun");
        	var BookNo="";
        	trace("writSabun" + writSabun);
         	trace("infoSabun_01" + infoSabun_01);
         	trace("infoSabun_02" + infoSabun_02);
         	trace("infoSabun_03" + infoSabun_03);
         	trace("loginSabun" + loginSabun);
        	
        	if(this.edt_no.value == '' || typeof(this.edt_no.value) == 'undefined'){
        		alert("소송정보가 등록되어 있어야 합니다.");
        		validation=false;
        	}
        	if(this.ds_instance.getColumn(0,"instAdmCode") == null){	//심급이 없을경우
        		alert("심급정보가 등록되어 있어야 합니다.");
        		return false;
        	}
        	
        	var aprvprgrInfoBookNo = this.getBookNo();
        	
        	//if(validation){
        		//결제버튼 클릭시 상신페이지 연결
        		/*
        		if(writSabun == loginSabun || writSabun == null) {
        		
        			var nLeft = system.clientToScreenX(this, 10);
        			var nTop = system.clientToScreenY(this, 10);
        	 
        			var newChild = new ChildFrame;
        			newChild.init("SearchNo"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "aprv::APRV_PROG_COMMENT.xfdl");
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");

        		//lawSearchNo = dialog("SearchNo","lawsuit::LAWSUIT_ADM_NO.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0); // 소송관리번호 검색
        		//trace(lawSearchNo);
        			newChild.showModal(this.getOwnerFrame()
        							, ""
        							, this
        							, "modal_callback");
        		}
        		//결제버튼 클릭시 결제페이지(코멘트) 연결
               else if(infoSabun_01 == loginSabun || infoSabun_02 == loginSabun || infoSabun_03 == loginSabun){       
        		
        		var nLeft = system.clientToScreenX(this, 10);
        			var nTop = system.clientToScreenY(this, 10);
        	 
        			var newChild = new ChildFrame;
        			newChild.init("SearchNo"
        						, "absolute", nLeft, nTop, 300, 250, null, null
        						, "aprv::APRV_COMMENT.xfdl");
        			newChild.set_openalign("center middle");
        			newChild.set_dragmovetype("all");

        		//lawSearchNo = dialog("SearchNo","lawsuit::LAWSUIT_ADM_NO.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0); // 소송관리번호 검색
        		//trace(lawSearchNo);
        			newChild.showModal(this.getOwnerFrame()
        							, ""
        							, this
        							, "modal_callback");
                    
               }else{  
               } 
        	}
        	*/
        		//alert("너무 졸려ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ" + this.ds_position.saveXML());

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
         						, {stepCode:"002", bookNo:aprvprgrInfoBookNo, dataset:this.ds_position.saveXML()}
        						, this
         						, "modal_callback");
             }
             else if(writSabun == loginSabun || writSabun == null){
        		this.ds_appr.setColumn(0,"aprvlineAdmProcCode","002");
        		trace( "get : "+this.ds_appr.getColumn(0,"aprvlineAdmProcCode"));
        		this.gfn_transaction(this,
        							"approvalLineListcode",
        							"/apprline/ApprovalLineListCode.do",
        							"ds_appr=ds_appr",
        							"ds_appr=ds_output",
        							"",
        							"fnCallback");
        	}
        	
        }

        /********************************************************************************
         * Event	: Button_Click onclick
         * Desc		: 초기화 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_clear_onclick=function(obj,e)
        {
        	this.reload();
        }

        /********************************************************************************
         * Event	: Button_Close onclick
         * Desc		: 닫기 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_close_onclick=function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        this.btn_del_onclick=function(obj,e)
        {
        	var row = this.ds_pladef.getRowType(this.ds_pladef.rowposition);
        	if(row == "2"){
        		this.ds_pladef.deleteRow(this.ds_pladef.rowposition);
        	}else if(this.ds_pladef.rowcount == 0){
        		alert("삭제할 데이터가 없습니다.");
        	}else{
        		alert("신규 작성중인 열만 삭제할 수 있습니다.");
        	}
        }

        this.edt_caseNo_onkeydown=function(obj,e)
        {
        	if(this.ds_instance.rowcount == 0){
        		//alert("심급관리내역을 추가해주십시요");
        		return false;
        	}
        	else{
        		var caseNo= "";		//사건번호변수
        		
        		//caseNo = Dialog("LAWSUIT::POP_CASENO_SEARCH","");	//사건번호 검색
        		caseNo = dialog("SearchCaseNO","lawsuit::POP_CASENO_SEARCH.xfdl","LAWSUIT_LIST","","showtitlebar=true",0,0);//사건번호 검색
        		if(this.gfn_IsNull(caseNo)==false){		//사건번호가 있을 경우
        			this.edt_caseNo.text = caseNo;
        		}
        		else{
        			return false;
        		}
        	}
        }

        this.ds_pladef_cancolumnchange=function(obj,e)
        {
        	if(e.columnid == "pladefRegNo"){
        	
        	var regnolength = e.newvalue.trim().length;
        		if(regnolength != 13){
        			alert("주민등록번호는 13자리 입니다.");
        			return e.newvalue=e.oldvalue;
        		}
        	}else if(e.columnid == "pladefMainTel"){	//연락처 입력시
        	
        		var tellength = e.newvalue.trim().length;
        		var localcode = e.newvalue.substr(0,2);	//지역코드 추출
        		var telsize = e.newvalue.trim().length;	//연락번호 길이
        		if(this.gfn_IsNull(e.oldvalue)==false){
        			if(localcode == "02"){ //지역코드가 서울일 경우
        				if(telsize <9){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue=e.oldvalue;
        				}
        			}else{
        				if(telsize < 10){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue=e.oldvalue;
        				}
        			}
        		}else{
        			if(localcode == "02"){ //지역코드가 서울일 경우
        				if(telsize <9){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue="";
        				}
        			}else{
        				if(telsize < 10){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue="";
        				}
        			}
        		}
        		
        		if(tellength > 11){
        			alert("전화번호 자리수는 11자리 이하입니다.");			
        		}
        	
        	}else if(e.columnid == "pladefAddTel"){	//연락처 입력시
        		var tellength = e.newvalue.trim().length;
        		var localcode = e.newvalue.substr(0,2);	//지역코드 추출
        		var telsize = e.newvalue.trim().length;	//연락번호 길이
        		if(this.gfn_IsNull(e.oldvalue)==false){
        			if(localcode == "02"){ //지역코드가 서울일 경우
        				if(telsize <9){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue=e.oldvalue;
        				}
        			}else{
        				if(telsize < 10){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue=e.oldvalue;
        				}
        			}
        		}else{
        			if(localcode == "02"){ //지역코드가 서울일 경우
        				if(telsize <9){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue="";
        				}
        			}else{
        				if(telsize < 10){
        					alert("주요연락처를 다시 확인해주세요.");
        					return e.newvalue="";
        				}
        			}
        		}
        		
        		if(tellength > 11){
        			alert("전화번호 자리수는 11자리 이하입니다.");			
        		}
        	}
        }

        this.ds_pladef_onrowposchanged=function(obj,e)
        {
        	if(this.ds_pladef.getRowType(e.newrow) == "2"){
        		this.btn_mediation_reg.set_enable(false);
        		this.btn_lawsuitrec_reg.set_enable(false);
        	}else if(this.ds_pladef.rowcount == 0){
        		this.btn_mediation_reg.set_enable(false);
        		this.btn_lawsuitrec_reg.set_enable(false);
        	}else{
        		this.btn_mediation_reg.set_enable(true);
        		this.btn_lawsuitrec_reg.set_enable(true);
        	}
        }

        /********************************************************************************
         * Desc		: 필수 값 체크
         * Param	: 없음
         * Return	: true - 필수 값이 다 입력되었음
                      false - 입력안된 필수 값이 있음
         *******************************************************************************/
        this.fn_validation=function()
        {
        	//trace(ds_pladef.saveXML());
        	for(var i=0 ; i< this.ds_pladef.rowcount; i++){
        		if(this.gfn_IsNull(this.ds_pladef.getColumn(i,"pladefRegNo"))==false){
        			if(this.gfn_Trim(this.ds_pladef.getColumn(i,"pladefRegNo")).length != 13){
        				alert("주민등록번호는 13자리 입니다.");
        				return false;
        			}
        		}
        		if(this.gfn_IsNull(this.ds_pladef.getColumn(i,"pladefName")) == true){
        			alert("성명은 필수 입력입니다.");
        			return false;
        		}
        	}
        	var lawsuitchk = this.ds_lawsuit.getRowType(this.ds_lawsuit.rowposition);
        	if(lawsuitchk == "2" || lawsuitchk == "4"){		//소송관리 추가, 수정일 경우
        		if(this.cmb_pladef_code.value=="000"){		//당사 원피고 구분미입력시
        			alert("당사 원피고 구분은 필수 입력입니다.");
        			this.cmb_pladef_code.dropdown();		//원피고목록 ActionDown
        			this.cmb_pladef_code.setFocus();
        			return false;
        		}
        		else if(this.cmb_search_court.value=="000"){	//신청법원 미입력시
        			alert("신청법원은 필수 입력입니다.");
        			//combo_search_court.SetFocus();
        			this.cmb_search_court.dropdown();
        			this.cmb_search_court.setFocus();
        			return false;
        		}
        		else if(this.gfn_IsNull(this.edt_app_case_no.text)==true){		//신청사건번호 미입력시
        			alert("신청사건번호는 필수 입력입니다.");
        			this.edt_app_case_no.setFocus();
        			return false;
        		}
        		else if(this.gfn_IsNull(this.cmb_case_type.value)==true){		//사건유형 미입력시
        			alert("사건유형은 필수 입력입니다.");
        			this.cmb_case_type.dropdown();
        			this.cmb_case_type.setFocus();
        			return false;
        		}
        		else{
        		}
        	}
        	if(this.cmb_status.enable==true){
        		if(this.cmb_status.value=="000"){
        			alert("소송진행상태를 선택해주세요.");
        			this.cmb_status.dropdown();
        			this.cmb_status.setFocus();
        			return false;
        		}
        	}
        	if(this.cmb_court_exe.enable==true){
        		if(this.cmb_court_exe.value=="000"){
        			alert("수행법원을 선택해주세요.");
        			this.cmb_court_exe.dropdown();
        			this.cmb_court_exe.setFocus();
        			return false;
        		}
        	}
        	return true;
        }
        function Button00_onclick(obj,e)
        {
        	//fn_getRaisdef("2013080904");	//소제기의뢰 원피고 불러오기
        	//fn_getRaisrea("2014021708");	//소제기의뢰 사유 불러오기 
        	var rtn = Today();
        	//trace(rtn);
        }

        this.cmb_inst_code_onitemchanged=function(obj,e)
        {
        	lawsrcrlt = this.ds_lawsuit.getColumn(0,"lawsuitAdmNo"); 	//소송관리번호
        	instcdrlt = e.postvalue;									//심급코드
        	this.getLawsuitSearch(lawsrcrlt,instcdrlt);					//심급조회
        	
        	this.cmb_inst_code.value = instcdrlt;
        }

        this.cmb_pladef_code_onitemchanged=function(obj,e)
        {
        	
        	//alert("PladefCode Check Test: "+ strCode);
        	//alert("변경된 값 : "+e.postvalue);
        	if(e.postvalue == "002"){		//피고일경우
        		this.sta_pladef_list.set_text("원고목록");
        		this.sta_req_noti_no.set_text("소송고지번호");
        		this.btn_req_noti_src.set_enable(true);	
        		if(this.edt_req_no.set_value != ""){		//소제기의뢰번호 초기화
        			this.edt_req_no.set_value("");
        			this.ds_pladef.clearData();
        		}
        		else{
        			return false;
        		}
        	}
        	else{		//원고일경우
        		this.sta_pladef_list.set_text("피고목록");
        		this.sta_req_noti_no.set_text("소제기의뢰번호");
        		this.btn_req_noti_src.set_enable(true);
        		if(this.edt_req_no.set_value != ""){		//소송고지번호 초기화
        			this.edt_req_no.set_value("");
        			this.ds_pladef.clearData();
        		}
        		else{
        			return false;
        		}
        	}
        }

        this.cmb_search_court_onitemchanged=function(obj,e)
        {
        	if(this.ds_lawsuit.getRowType(this.ds_lawsuit.rowposition) == "2"){
        		if(this.cmb_court_exe.enable==true){
        			this.cmb_court_exe.set_value(e.postvalue);
        		}
        	}
        }

        this.fn_enable=function()
        {
        	this.cmb_status.set_enable(true);
        	this.btn_case_no.set_enable(true);
        	this.edt_admName.set_enable(true);
        	this.cmb_court_exe.set_enable(true);
        	this.cal_invoice_date.set_enable(true);
        	this.cal_end_invoice_date.set_enable(true);
        	this.txt_comment.set_enable(true);
        	this.btn_judge_src.set_enable(true);
        	this.edt_depuName.set_enable(true);
        	this.txt_opin.set_enable(true);
        	this.edt_deName.set_enable(true);
        	this.btn_lawyer.set_enable(true);
        	
        	this.btn_mediation_reg.set_enable(true);
        	this.btn_lawsuitrec_reg.set_enable(true);
        	this.btn_def_reg.set_enable(true);
        	this.btn_del.set_enable(true);
        }

        // 오른 쪽에서 문자열 자름
        this.Right=function(sOrg,nSize)
        {
        	if( this.gfn_IsNull(sOrg) || this.gfn_IsNull(nSize) ) return "";

        	if( sOrg.length < nSize )
        	return sOrg;
        	else
        	return sOrg.substr(sOrg.length-nSize, nSize);
        }

        this.grd_plaintiff_onkeydown=function(obj,e)
        {
        	if(e.keycode == 13){
        		//trace(obj.getCellPos());
        	}
        }

        this.post_Mask=function(value)
        {
        	var obj = value.toString();
        	if(obj.length==5){
        		return "##-###";
        	}else{
        		return "###-###";
        	}
        }

        // 우편 번호 검색 후 값 받기
        var pladefPos_e ="";
        this.Plugin00_TitleChange = function()
        {
        	if(arguments[0] != "TITLE"){
        		var postArr = arguments[0].split("_");
        		this.ds_pladef.setColumn(pladefPos_e.row,"pladefPos",postArr[0]);
        		this.ds_pladef.setColumn(pladefPos_e.row,"pladefAddr1",postArr[1]);
        	}
        }
        this.pladefPosChange=function(e)
        {
        	pladefPos_e=e;
        }

        /*********************************************************
         소제기의뢰사항 조회
         **********************************************************/
        this.getRaisreqList = function(param){
        trace("getRaisreqList param: "+param);
        	var strSvcid 		= "getRaisreqList";
        	var strController 	= "/rais/getRaisreqList.do";
        	var strParam  = "lawRaisreqNo=" +"\""+param+"\"";
        		strParam += " lawRaisreqClasCode=" + "\"\"";
        		strParam += " lawRaisreqReqDate1=" + "\"\"";
        		strParam += " lawRaisreqReqDate2=" + "\"\"";
        		strParam += " lawRaisreqRepWtr=" + "\"\"";
        	
        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"", 
        					"ds_raisreq=ds_output",
        					strParam, 
        					"fnCallBack"
        					);
        	
        }

        
        /*********************************************************
         소제기의뢰사항 조회
         **********************************************************/
        this.getRaisreqList2 = function(param){
        trace("getRaisreqList2 param: "+param);
        	var strSvcid 		= "getRaisreqList2";
        	var strController 	= "/rais/getRaisreqList.do";
        	var strParam  = "lawRaisreqNo=" +"\""+param+"\"";
        		strParam += " lawRaisreqClasCode=" + "\"\"";
        		strParam += " lawRaisreqReqDate1=" + "\"\"";
        		strParam += " lawRaisreqReqDate2=" + "\"\"";
        		strParam += " lawRaisreqRepWtr=" + "\"\"";
        	
        	trace("strParam :: "+strParam);
        	// 트랜젝션 공통함수 호출
        	this.gfn_transaction(this,
        					strSvcid,
        					strController, 
        					"", 
        					"ds_raisdef=ds_output",
        					strParam, 
        					"fnCallBack"
        					);
        	
        }

        /*********************************************************
         
         **********************************************************/

        this.selectDef = function(variant)
        {
        	//alert("1111");
        	this.ds_pladef.addRow();
        	var strParam  = "lawRaisreqNo=" + variant;
        	trace(strParam);
        	
        	this.gfn_transaction(this,
        						"getRaisreqDefSelectList",
        						"rais/getRaisreqDefSelectList.do",
        						"",
        						"ds_pladef=ds_output",
        						strParam,
        						"fnCallBack"
        						);
        	//alert(this.ds_def.getRowCount());
        }

        this.getBookNo = function()
        {
        	var bookNo = "";

        	bookNo = '002'
        		   + this.ds_lawsuit.getColumn(0,"lawsuitAdmNo")
        		   + this.ds_instance.getColumn(0,"instAdmCode")
        		   + this.cmb_pladef_code.value;
            return bookNo;
        }

        // 결재진행상황 세팅
        this.fn_staSet = function(sta1,sta2,sta3,val1,val2,val3) {
        // 	this.ds_position.clearData();
        // 	this.ds_position_code.clearData();
        // 	var deptName = this.ds_position.getColumn(0,"aprvInfoDeptName");
        // 	var name = this.ds_position.getColumn(0,"aprvInfoName");
        // 	var codeName = this.ds_position_code.getColumn(0, "codeName");
        // alert("아오 " + this.ds_position_code.saveXML());
        //alert(this.ds_position_code.rowcount);
        	trace("ds_position trace @ fn_staSet :: " + this.ds_position.saveXML());
        	trace("ds_position_code trace @ fn_staSet :: " + this.ds_position_code.saveXML());
        	//alert("sta1, sta2, sta3, val1, val2, val3 :: " + sta1 + sta2 + sta3 + val1 + val2 + val3);

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
        application.gds_Params.deleteAll();
        	
        // 	this.sta_aprv01.set_text(this.ds_position.getColumn(0,"aprvInfoDeptName") + " " + this.ds_position.getColumn(0,"aprvInfoName"));
        // 	this.sta_aprv11.set_text(this.ds_position_code.getColumn(0, "codeName"));
        // 	this.sta_aprv02.set_text(this.ds_position.getColumn(1,"aprvInfoDeptName") + " " + this.ds_position.getColumn(1,"aprvInfoName"));
        // 	this.sta_aprv12.set_text(this.ds_position_code.getColumn(1, "codeName"));
        // 	this.sta_aprv03.set_text(this.ds_position.getColumn(2,"aprvInfoDeptName") + " " + this.ds_position.getColumn(2,"aprvInfoName"));
        // 	this.sta_aprv13.set_text(this.ds_position_code.getColumn(2, "codeName"));
        }

        // 원피고목록에서 종결여부에 따라 조정안/재판외화해 버튼 활성화/비활성화
        this.grd_click = function(obj,e)
        {
        	if(!this.gfn_IsNull(this.ds_pladef.getColumn(e.row,"pladefLawConcSepcode"))){
        		this.btn_mediation_reg.set_enable(false);
        		this.btn_lawsuitrec_reg.set_enable(false);
        	}
            else {
        		this.btn_mediation_reg.set_enable(true);
        		this.btn_lawsuitrec_reg.set_enable(true);
            }
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_LIST_onload, this);
            this.btn_lawsuit_search.addEventHandler("onclick", this.btn_lawsuit_search_onclick, this);
            this.cmb_inst_code.addEventHandler("onitemchanged", this.cmb_inst_code_onitemchanged, this);
            this.cmb_pladef_code.addEventHandler("onitemchanged", this.cmb_pladef_code_onitemchanged, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.sta_05.addEventHandler("onclick", this.sta_05_onclick, this);
            this.btn_law_mgr_reg.addEventHandler("onclick", this.btn_law_mgr_reg_onclick, this);
            this.btn_add_lawsuit.addEventHandler("onclick", this.btn_add_lawsuit_onclick, this);
            this.btn_app_case_no.addEventHandler("onclick", this.btn_app_case_no_onclick, this);
            this.btn_req_noti_src.addEventHandler("onclick", this.btn_req_noti_src_onclick, this);
            this.cmb_status.addEventHandler("onitemchanged", this.cmb_status_onitemchanged, this);
            this.edt_caseNo.addEventHandler("onkeydown", this.edt_caseNo_onkeydown, this);
            this.cal_invoice_date.addEventHandler("oneditclick", this.cal_invoice_date_oneditclick, this);
            this.btn_judge_src.addEventHandler("onclick", this.btn_judge_src_onclick, this);
            this.btn_lawyer.addEventHandler("onclick", this.btn_lawyer_onclick, this);
            this.btn_mediation_reg.addEventHandler("onclick", this.btn_mediation_reg_onclick, this);
            this.btn_lawsuitrec_reg.addEventHandler("onclick", this.btn_lawsuitrec_reg_onclick, this);
            this.btn_def_reg.addEventHandler("onclick", this.btn_def_reg_onclick, this);
            this.btn_del.addEventHandler("onclick", this.btn_del_onclick, this);
            this.btn_aprv.addEventHandler("onclick", this.btn_aprv_onclick, this);
            this.btn_lawsuit_reg.addEventHandler("onclick", this.btn_lawsuit_reg_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.cmb_search_court.addEventHandler("onitemchanged", this.cmb_search_court_onitemchanged, this);
            this.grd_plaintiff.addEventHandler("onkeydown", this.grd_plaintiff_onkeydown, this);
            this.grd_plaintiff.addEventHandler("oncelldblclick", this.grd_plaintiff_oncelldblclick, this);
            this.grd_plaintiff.addEventHandler("oncellclick", this.grd_click, this);
            this.Plugin00.addEventHandler("TitleChange", this.Plugin00_TitleChange, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_case_no.addEventHandler("onclick", this.btn_case_no_onclick, this);

        };

        this.loadIncludeScript("LAWSUIT_LIST.xfdl");

       
    };
}
)();
