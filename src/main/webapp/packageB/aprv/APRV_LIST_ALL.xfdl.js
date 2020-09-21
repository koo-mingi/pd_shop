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
                this.set_name("APRV_LIST_ALL");
                this.set_classname("Work");
                this.set_titletext("소송고지관리");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalPrgr", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWrit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoFinWtr\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCondCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoProcDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvInfoDeptName\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/><Column id=\"payseq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprv_step_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">001</Col><Col id=\"value\">소제기의뢰</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">소송접수</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">응소(제소)보고관리</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">조정안관리</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">재판외화해관리</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">판결보고</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">소송종결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_curr_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col><Col id=\"code\"/></Row><Row><Col id=\"code\">001</Col><Col id=\"value\">소제기의뢰</Col></Row><Row><Col id=\"code\">002</Col><Col id=\"value\">소송접수</Col></Row><Row><Col id=\"code\">003</Col><Col id=\"value\">응소(제소)보고관리</Col></Row><Row><Col id=\"code\">004</Col><Col id=\"value\">조정안관리</Col></Row><Row><Col id=\"code\">005</Col><Col id=\"value\">재판외화해관리</Col></Row><Row><Col id=\"code\">006</Col><Col id=\"value\">판결보고</Col></Row><Row><Col id=\"code\">007</Col><Col id=\"value\">소송종결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_aprv_clas_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">완료</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미결</Col></Row><Row><Col id=\"code\">Z</Col><Col id=\"value\">반려</Col></Row><Row><Col id=\"code\">A</Col><Col id=\"value\">전결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_seq", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">  2</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">    3 </Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">소제기의뢰등록</Col><Col id=\"MENU_ID\">1003</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">rais</Col><Col id=\"PGM_ID\">RAISREQ_REG.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"MENU_NM\">소송접수관리</Col><Col id=\"MENU_ID\">1006</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">lawsuit</Col><Col id=\"PGM_ID\">lawsuit_list.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">ales_sue.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col><Col id=\"MENU_ID\">1050</Col><Col id=\"MENU_NM\">응소(제소)보고관리</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">MEDIATION001.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col><Col id=\"MENU_ID\">1046</Col><Col id=\"MENU_NM\">조종안관리</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"PGM_PATH\">prgr</Col><Col id=\"PGM_ID\">LAWSUIT_REC001.xfdl</Col><Col id=\"MENU_ID\">1008</Col><Col id=\"MENU_NM\">재판외화</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row><Row><Col id=\"PGM_PATH\">conc</Col><Col id=\"PGM_ID\">judg_report.xfdl</Col><Col id=\"USE_YN\">0</Col><Col id=\"SORT\">4</Col><Col id=\"MENU_ID\">1053</Col><Col id=\"MENU_NM\">판결보고</Col><Col id=\"MENU_LVL\">2</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NM\">소송종결</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"PGM_PATH\">comp</Col><Col id=\"PGM_ID\">comp_lawsuit001.xfdl</Col><Col id=\"SORT\">4</Col><Col id=\"USE_YN\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "14", "105", "996", "545", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  전체 결재 리스트");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "115", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("결재 단계");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search", "absolute", "283", "71", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_Clas_Code", "absolute", "138", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_innerdataset("@ds_curr_code");
            obj.set_datacolumn("value");
            obj.set_codecolumn("code");
            obj.set_visible("true");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Grid("grd_Search", "absolute", "20", "111", "984", "533", null, null, this);
            obj.set_taborder("44");
            obj.set_binddataset("ds_approvalPrgr");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"69\"/><Column size=\"62\"/><Column size=\"60\"/><Column size=\"47\"/><Column size=\"63\"/><Column size=\"110\"/><Column size=\"208\"/><Column size=\"41\"/><Column size=\"66\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"진행단계\"/><Cell col=\"2\" rowspan=\"2\" text=\"일련번호\"/><Cell col=\"3\" colspan=\"5\" text=\"작성정보\"/><Cell col=\"8\" rowspan=\"2\" text=\"순번\"/><Cell col=\"9\" colspan=\"4\" text=\"결재정보\"/><Cell row=\"1\" col=\"3\" text=\"작성자\"/><Cell row=\"1\" col=\"4\" text=\"부서\"/><Cell row=\"1\" col=\"5\" text=\"작성일\"/><Cell row=\"1\" col=\"6\" text=\"제목\"/><Cell row=\"1\" col=\"7\" text=\"내용\"/><Cell row=\"1\" col=\"9\" text=\"결재자\"/><Cell row=\"1\" col=\"10\" text=\"결재상태\"/><Cell row=\"1\" col=\"11\" text=\"결재일자\"/><Cell row=\"1\" col=\"12\" text=\"상세정보\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"1\" displaytype=\"combo\" style=\"align:center middle;\" text=\"bind:aprvprgrInfoStepCode\" wordwrap=\"none\" suppress=\"0\" combodataset=\"ds_aprv_step_code\" combocodecol=\"code\" combodatacol=\"value\" combodisplayrowcount=\"5\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"2\" text=\"bind:aprvprgrInfoSeq\"/><Cell col=\"3\" text=\"bind:aprvprgrInfoWrit\" suppress=\"0\"/><Cell col=\"4\" text=\"bind:aprvprgrInfoWritDeptName\" suppress=\"0\"/><Cell col=\"5\" text=\"bind:aprvprgrInfoWritDate\" suppress=\"0\"/><Cell col=\"6\" text=\"bind:aprvprgrInfoWritTit\" suppress=\"0\"/><Cell col=\"7\" displaytype=\"text\" text=\"bind:aprvprgrInfoWritCont\" suppress=\"0\" combodisplayrowcount=\"5\" combodisplay=\"edit\"/><Cell col=\"8\" text=\"bind:aprvInfoSeq\" combodataset=\"ds_seq\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"9\" text=\"bind:aprvInfoName\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:aprvInfoCondCode\" combodataset=\"ds_aprv_clas_code\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"11\" text=\"bind:aprvInfoProcDate\" expandsize=\"15\" combodataset=\"ds_aprv_clas_code\"/><Cell col=\"12\" displaytype=\"button\" style=\"gradation:none 0,0 white 100,100 black;color:black;color2:black;barcolor:transparent;controlcolor:black;\" text=\"상세정보\" expandshow=\"hide\" expandsize=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "955", "682", "55", "23", null, null, this);
            obj.set_taborder("46");
            obj.set_text("닫기");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송고지관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Static02","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static03","text","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("APRV_LIST_ALL.xfdl", "Lib::common.xjs");
        this.registerScript("APRV_LIST_ALL.xfdl", function() {
        //include "Lib::common.xjs";

        //로딩시
        this.APRV_LIST_ALL_onload=function(obj,e){
        trace("로딩");
        	this.combo_Clas_Code.index="0";

        	var strSvcid = "approvalPrgrAll";
        	var strUrl = "/approval/approvalAll.do";
        	var strParam = "code="+"\""+this.combo_Clas_Code.value+"\"";

        	this.gfn_transaction(this,strSvcid,strUrl,"","ds_approvalPrgr=ds_output",strParam,"fnCallback");

        }

        //검색버튼 클릭시
         this.btn_search_OnClick=function(obj,e){
         var code=this.combo_Clas_Code.value;
        	
         	
         	var strParam = ""; 
         	trace("code : "+code);
         	if(code!=''){
         	  strParam +="code="+"\""+this.combo_Clas_Code.value+"\"";
         	}else{
         	   strParam +="code="+"\"\"";
         	}
         	trace("strParam : "+strParam);
         	var strSvcid = "approvalPrgrAll";
         	var strUrl = "/approval/approvalAll.do";
         	var strInputDs = ""; 
         	var strOutputDs = "ds_approvalPrgr=ds_output";	 
         	var strFnCallback = "fnCallback";
         		
         	this.gfn_transaction(this,strSvcid
         				, strUrl
         				, strInputDs
         				, strOutputDs
         				, strParam
         				, strFnCallback);
        }

        //콜백 
        this.fnCallback = function(sSvcId,nErrorCode,sErrorMsg)
        {

        if(sSvcId == "approvalPrgrAll"){

        	   if(errcode==0){
        	      if(ds_approvalPrgr.GetRowCount()<1){
        	        alert("조회 항목이 없습니다");
        	        this.APRV_LIST_ALL_onload();
        	      }
        			
        		}else{
        			alert(errmsg);
        		}
        	}
        }

        //그리드 클릭시
        this.grd_Search_oncellclick=function(obj,e){
        //trace("pasyment seq : "+this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"payseq"));
        var data="code="+this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"payseq");
        	trace("그리드 : "+data);
        	trace(data);
        	trace(e.cell);
        	if(e.cell=="12"){	
        	
        		var nLeft = system.clientToScreenX(this, 10);
        	 var nTop = system.clientToScreenY(this, 10);
        	
        	 var newChild = new ChildFrame;
        	 newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 300, 250, null, null
        					, "aprv::APRV_LIST_ALL_POP.xfdl");
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	newChild.showModal(this.getOwnerFrame()
        						,{ data:data}
        						, this
        						, "modal_callback");
        	}
        }

        
        //다시
        this.modal_callback = function(strID,variant)
        {

        }

        //셀 더블클릭시 (추가)
        // this.grd_Search_oncellDbclick=function(obj:Grid, e:GridClickEventInfo){
        // var aprvprgrInfoStepCode = this.ds_approvalPrgr.getColumn(e.row,"aprvprgrInfoStepCode");
        // trace("더블클릭");
        // 
        // 
        // 		var approvalUrl = "";
        // 	var approvalData = ""
        // 	var oObj = {
        // 			  ds : this.ds_openlaw,
        // 			  nRow : 0,
        // 			  oArg  : []
        // 		};
        // 	
        // 		var nRow = application.gds_Params.addRow();
        // 	if(aprvprgrInfoStepCode=="001"){ // 001.소재기의뢰
        // 
        // 		application.gds_Params.setColumn(nRow, "PARAM_ID", "APRV_LIST_ALL");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 	
        // 	}else if(aprvprgrInfoStepCode=="002"){// 002.소송접수
        // 	oObj.nRow=1;
        // 	application.gds_Params.setColumn(nRow, "PARAM_ID", "APRV_LIST_ALL");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 
        // 	}else if(aprvprgrInfoStepCode=="003"){// 003.응소(제소)보고관리
        // 	 oObj.nRow=2;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "APRV_LIST_ALL");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 		//this.go("rais::RAISREQ_REG.xfdl");
        // 	}else if(aprvprgrInfoStepCode=="004"){// 004.조정안관리
        // 	 oObj.nRow=3;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "APRV_LIST_ALL");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 		application.gds_Params.setColumn(nRow, "MENU_ID", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoSeq"));
        // 		Iject.Mdi.call(this, oObj);
        // 	}else if(aprvprgrInfoStepCode=="005"){// 005.재판외화해관리
        // 	 oObj.nRow=4;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "APRV_LIST_ALL");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 	}else if(aprvprgrInfoStepCode=="006"){// 006.판결보고
        // 	 oObj.nRow=5;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "APRV_LIST_ALL");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 	}else if(aprvprgrInfoStepCode=="007"){// 007.소송종결
        // 	 oObj.nRow=6;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 
        // 	}
        // }
        this.btn_close_OnClick = function(obj,e)
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }

        //셀 더블클릭시 (추가)
        this.grd_Search_oncellDbclick=function(obj,e){
        trace("더블 : "+this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo"));
        	if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="001"){ // 001.소재기의뢰
        	
        	var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("rais::RAISREQ_REG", aArgs);
        		
        		}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="002"){// 002.소송접수
        	 var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("lawsuit::lawsuit_list", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="003"){// 003.응소(제소)보고관리
        	 var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::ales_sue", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="004"){// 004.조정안관리
        	  var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::MEDIATION001", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="005"){// 005.재판외화해관리
        	  var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::LAWSUIT_REC001", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="006"){// 006.판결보고
        	 var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("conc::judg_report", aArgs);
        	
        	}else if(this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoStepCode")=="007"){// 007.소송종결
        	var legalAdvNo = this.ds_approvalPrgr.getColumn(this.ds_approvalPrgr.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListAll:legalAdvNo
        				}
        	this.gfnOpenMenu("comp::comp_lawsuit001", aArgs);

        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.APRV_LIST_ALL_onload, this);
            this.btn_list_search.addEventHandler("onclick", this.btn_search_OnClick, this);
            this.grd_Search.addEventHandler("oncellclick", this.grd_Search_oncellclick, this);
            this.grd_Search.addEventHandler("oncelldblclick", this.grd_Search_oncellDbclick, this);
            this.btn_close00.addEventHandler("onclick", this.btn_close_OnClick, this);

        };

        this.loadIncludeScript("APRV_LIST_ALL.xfdl");

       
    };
}
)();
