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

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_def", this);
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefRegno\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefTel\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefPos\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefAddr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefClamchg\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq", this);
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRea\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqWtr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDalwCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqExptDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepCont\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqEtcreqPoin\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqRepDate\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqIssuPoin\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clas_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approval", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqData\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approvalPrgr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoUpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSabun\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoReqData\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_approvalStats", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvSucc\" type=\"STRING\" size=\"256\"/><Column id=\"aprvUnde\" type=\"STRING\" size=\"256\"/><Column id=\"aprvReturn\" type=\"STRING\" size=\"256\"/><Column id=\"aprvSum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_curr_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">R</Col><Col id=\"codenm\">전체검색</Col></Row><Row><Col id=\"codeno\">Y</Col><Col id=\"codenm\">완료</Col></Row><Row><Col id=\"codeno\">N</Col><Col id=\"codenm\">미결</Col></Row><Row><Col id=\"codeno\">Z</Col><Col id=\"codenm\">반려</Col></Row><Row><Col id=\"codeno\">A</Col><Col id=\"codenm\">전결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprv_clas_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">Y</Col><Col id=\"codenm\">완료</Col></Row><Row><Col id=\"codeno\">N</Col><Col id=\"codenm\">미결</Col></Row><Row><Col id=\"codeno\">Z</Col><Col id=\"codenm\">반려</Col></Row><Row><Col id=\"codeno\">A</Col><Col id=\"codenm\">전결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprv_step_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">소제기의뢰등록</Col><Col id=\"MENU_ID\">1003</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">rais</Col><Col id=\"PGM_ID\">RAISREQ_REG.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"MENU_NM\">소송접수관리</Col><Col id=\"MENU_ID\">1006</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">lawsuit</Col><Col id=\"PGM_ID\">lawsuit_list.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">ales_sue.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col><Col id=\"MENU_ID\">1050</Col><Col id=\"MENU_NM\">응소(제소)보고관리</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">MEDIATION001.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col><Col id=\"MENU_ID\">1046</Col><Col id=\"MENU_NM\">조종안관리</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">LAWSUIT_REC001.xfdl</Col><Col id=\"MENU_ID\">1008</Col><Col id=\"MENU_NM\">재판외화</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"PGM_PATH\">conc</Col><Col id=\"PGM_ID\">judg_report.xfdl</Col><Col id=\"USE_YN\">0</Col><Col id=\"SORT\">4</Col><Col id=\"MENU_ID\">1053</Col><Col id=\"MENU_NM\">판결보고</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NM\">소송종결관리</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">comp</Col><Col id=\"PGM_ID\">comp_lawsuit001.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view02", "absolute", "14", "289", "996", "303", null, null, this);
            obj.set_taborder("37");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view01", "absolute", "14", "113", "996", "163", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view00", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  결재 진행 리스트");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_Clas_Code", "absolute", "140", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_curr_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_value("R");
            obj.set_text("전체검색");
            obj.set_index("0");

            obj = new Grid("Grid_appr", "absolute", "20", "295", "984", "290", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_approvalPrgr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"115\"/><Column size=\"128\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"56\"/><Column size=\"64\"/><Column size=\"71\"/><Column size=\"153\"/><Column size=\"261\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No,\"/><Cell col=\"1\" rowspan=\"2\" text=\"진행단계\"/><Cell col=\"2\" rowspan=\"2\" text=\"결재대장번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"일련번호\"/><Cell col=\"4\" rowspan=\"2\" text=\"결재여부\"/><Cell col=\"5\" colspan=\"5\" text=\"작성정보\"/><Cell row=\"1\" col=\"5\" text=\"이름\"/><Cell row=\"1\" col=\"6\" text=\"부서\"/><Cell row=\"1\" col=\"7\" text=\"작성일\"/><Cell row=\"1\" col=\"8\" text=\"제목\"/><Cell row=\"1\" col=\"9\" text=\"내용\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:aprvprgrInfoStepCode\" combodataset=\"ds_aprv_step_code\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:aprvprgrInfoBookNo\"/><Cell col=\"3\" text=\"bind:aprvprgrInfoSeq\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:aprvInfoCondCode\" combodataset=\"ds_aprv_clas_code\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"5\" text=\"bind:aprvprgrInfoWrit\"/><Cell col=\"6\" text=\"bind:aprvprgrInfoWritDeptName\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:aprvprgrInfoWritDate\" expr=\"expr:aprvprgrInfoWritDate.substr(0,4) + &quot;-&quot; + aprvprgrInfoWritDate.substr(4,2) + &quot;-&quot; + aprvprgrInfoWritDate.substr(6,2)\"/><Cell col=\"8\" text=\"bind:aprvprgrInfoWritTit\"/><Cell col=\"9\" text=\"bind:aprvprgrInfoWritCont\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("31");
            obj.set_text("결재 여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20", "119", "984", "150", null, null, this);
            obj.set_taborder("32");
            obj.set_binddataset("ds_approvalStats");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"320\"/><Column size=\"169\"/><Column size=\"168\"/><Column size=\"170\"/><Column size=\"168\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분코드\"/><Cell col=\"1\" text=\"결재완료\"/><Cell col=\"2\" text=\"미결현황\"/><Cell col=\"3\" text=\"반려현황\"/><Cell col=\"4\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"bind:aprvprgrInfoStepCode\"/><Cell col=\"1\" text=\"bind:aprvsucc\"/><Cell col=\"2\" text=\"bind:aprvunde\"/><Cell col=\"3\" text=\"bind:aprvreturn\"/><Cell col=\"4\" text=\"bind:aprvsum\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search00", "absolute", "942", "71", "55", "23", null, null, this);
            obj.set_taborder("33");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "661", "55", "23", null, null, this);
            obj.set_taborder("34");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 996, 50, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("  결재 진행 리스트");
            		p.style.set_align("left");
            		p.style.set_background("#3366ffff");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("bold 12 Dotum");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("APRV_LIST.xfdl", "Lib::common.xjs");
        this.registerScript("APRV_LIST.xfdl", function() {
        //include "Lib::common.xjs";

        //결재진행리스트 전체조회
        this.RAISREQ_REG_onload=function(obj,e){

        	this.combo_Clas_Code.index="0";
        	this.gf_codeComListLoad("ds_aprv_step_code",  "ds_aprv_step_code",   "Y", "", "", "fnCallback", "P01");
        	trace("시용자 : "+application.gds_User.getColumn(application.gds_User.rowposition, "sabun"));
        	this.ds_dept.addRow();
        	this.ds_dept.setColumn(0,"aprvInfoSabun",application.gds_User.getColumn(application.gds_User.rowposition, "sabun"));
        	    this.gfn_transaction(this,
                            "approvalStats",
                            "approval/approvalStats.do",
                            "ds_input=ds_dept",
                           "ds_approvalStats=ds_output",
                           "",
                           "fnCallback"
                           );
        }

        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {

        if(sSvcId == "approvalStats"){
        	//전체리스트 조회

        	this.get_ApprovalTotalList("");
        }
        if(sSvcId == "approvalTotalList"){
        	trace(this.ds_approvalPrgr.saveXML());
        }
        }

        this.get_ApprovalTotalList=function(clasValue){

        this.ds_dept.setColumn(0,"aprvInfoCondCode",clasValue)

        trace("되ㅏㄹ : "+this.ds_dept.getColumn(0,"aprvInfoCondCode")+" , "+this.ds_dept.getColumn(0,"aprvInfoSabun"));
          this.gfn_transaction(this,
                            "approvalTotalList",
                            "approval/ApprovalTotalList.do",
                            "ds_input=ds_dept",
                           "ds_approvalPrgr=ds_output",
                           "",
                           "fnCallback"
                           );
        }

        
        this.btn_search_onclick = function(obj,e)
        {
        	if(this.combo_Clas_Code.value=="R") this.get_ApprovalTotalList("");
        	else this.get_ApprovalTotalList(this.combo_Clas_Code.value);
        }

        this.btn_close_OnClick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        // this.Grid1_OnCellDblClick=function(obj:Grid, e:GridClickEventInfo){
        // var approvalUrl = "";
        // 	var approvalData = ""
        // 	var oObj = {
        // 			  ds : this.ds_openlaw,
        // 			  nRow : 0,
        // 			  oArg  : []
        // 		};
        // 		var nRow = application.gds_Params.addRow();
        // 	if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="001"){ // 001.소재기의뢰
        // 	application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 
        // 	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="002"){// 002.소송접수
        // 	 oObj.nRow=1;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="003"){// 003.응소(제소)보고관리
        // 	 oObj.nRow=2;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="004"){// 004.조정안관리
        // 	 oObj.nRow=3;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="005"){// 005.재판외화해관리
        // 	 oObj.nRow=4;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));;
        // 	Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="006"){// 006.판결보고
        // 	 oObj.nRow=5;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="007"){// 007.소송종결
        // 	 oObj.nRow=6;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 
        // 	}
        // 	
        // 	
        // }

        this.Grid1_OnCellDblClick=function(obj,e){
        	if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="001"){ // 001.소재기의뢰
        	
        	var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("rais::RAISREQ_REG", aArgs);
        		
        		}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="002"){// 002.소송접수
        	 var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("lawsuit::lawsuit_list", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="003"){// 003.응소(제소)보고관리
        	 var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::ales_sue", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="004"){// 004.조정안관리
        	  var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::MEDIATION001", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="005"){// 005.재판외화해관리
        	  var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::LAWSUIT_REC001", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="006"){// 006.판결보고
        	 var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("conc::judg_report", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="007"){// 007.소송종결
        	var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					legaladvLawAdvReqNo:legalAdvNo
        				}
        	this.gfnOpenMenu("comp::comp_lawsuit001", aArgs);

        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.RAISREQ_REG_onload, this);
            this.combo_Clas_Code.addEventHandler("onitemchanged", this.list_combo_change, this);
            this.Grid_appr.addEventHandler("oncelldblclick", this.Grid1_OnCellDblClick, this);
            this.btn_list_search00.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_OnClick, this);

        };

        this.loadIncludeScript("APRV_LIST.xfdl");

       
    };
}
)();
