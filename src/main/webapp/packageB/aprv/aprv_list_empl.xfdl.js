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
                this.set_name("aprv_list_empl");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_aprv", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoBookNo\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoSeq\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritDate\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritCont\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritTit\" type=\"STRING\" size=\"256\"/><Column id=\"infoSeq1\" type=\"STRING\" size=\"256\"/><Column id=\"infoSeq2\" type=\"STRING\" size=\"256\"/><Column id=\"infoSeq3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_stepCode", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_infoSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeno\">N</Col><Col id=\"codenm\">진행중</Col></Row><Row><Col id=\"codeno\">Y</Col><Col id=\"codenm\">완료</Col></Row><Row><Col id=\"codeno\">Z</Col><Col id=\"codenm\">반려</Col></Row><Row><Col id=\"codeno\">A</Col><Col id=\"codenm\">전결</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"aprvprgrInfoStepCode\" type=\"STRING\" size=\"256\"/><Column id=\"aprvprgrInfoWritSabun\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_curr_code", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col></Row><Row><Col id=\"value\">소제기의뢰</Col><Col id=\"code\">001</Col></Row><Row><Col id=\"value\">소송접수</Col><Col id=\"code\">002</Col></Row><Row><Col id=\"value\">응소(제소)보고관리</Col><Col id=\"code\">003</Col></Row><Row><Col id=\"value\">조정안관리</Col><Col id=\"code\">004</Col></Row><Row><Col id=\"value\">재판외화해관리</Col><Col id=\"code\">005</Col></Row><Row><Col id=\"value\">판결보</Col><Col id=\"code\">006</Col></Row><Row><Col id=\"value\">소송종결</Col><Col id=\"code\">007</Col></Row></Rows>");
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
            obj = new Static("Static02", "absolute", "14", "116", "996", "424", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "14", "65", "996", "35", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  상신 진행 리스트");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "34", "70", "970", "25", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "70", "130", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("진행 단계");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("Button_numSearch", "absolute", "301", "71", "55", "23", null, null, this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "155", "72", "141", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_innerdataset("@ds_stepCode");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Grid("Grid00", "absolute", "21", "123", "982", "410", null, null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_aprv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"131\"/><Column size=\"110\"/><Column size=\"57\"/><Column size=\"68\"/><Column size=\"140\"/><Column size=\"239\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"진행단계\"/><Cell col=\"2\" rowspan=\"2\" text=\"결제대장번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"일련번호\"/><Cell col=\"4\" colspan=\"3\" text=\"작성정보\"/><Cell col=\"7\" colspan=\"3\" text=\"결제상태\"/><Cell col=\"10\" rowspan=\"2\" text=\"결제자의견\"/><Cell row=\"1\" col=\"4\" text=\"작성일\"/><Cell row=\"1\" col=\"5\" text=\"제목\"/><Cell row=\"1\" col=\"6\" text=\"내용\"/><Cell row=\"1\" col=\"7\" text=\"1차\"/><Cell row=\"1\" col=\"8\" text=\"2차\"/><Cell row=\"1\" col=\"9\" text=\"3차\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:aprvprgrInfoStepCode\" combodataset=\"ds_stepCode\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"2\" text=\"bind:aprvprgrInfoBookNo\"/><Cell col=\"3\" text=\"bind:aprvprgrInfoSeq\"/><Cell col=\"4\" text=\"bind:aprvprgrInfoWritDate\" expr=\"aprvprgrInfoWritDate.substr(0,4) + &quot;-&quot; + aprvprgrInfoWritDate.substr(4,2) + &quot;-&quot; + aprvprgrInfoWritDate.substr(6,2)\"/><Cell col=\"5\" text=\"bind:aprvprgrInfoWritTit\"/><Cell col=\"6\" text=\"bind:aprvprgrInfoWritCont\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:aprvinfocondcode\" combodataset=\"ds_infoSeq\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"8\" displaytype=\"combo\" text=\"bind:aprvinfocondcode1\" combodataset=\"ds_infoSeq\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"9\" displaytype=\"combo\" text=\"bind:aprvinfocondcode2\" combodataset=\"ds_infoSeq\" combocodecol=\"codeno\" combodatacol=\"codenm\"/><Cell col=\"10\" displaytype=\"button\" style=\"controlcolor:black;\" text=\"의견확인\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "955", "672", "55", "23", null, null, this);
            obj.set_taborder("7");
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
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("aprv_list_empl.xfdl", "Lib::common.xjs");
        this.registerScript("aprv_list_empl.xfdl", function() {
        //include "Lib::common.xjs"; //공통함수 호출
         var lawRaisreqNo="";//소제기의뢰번호(소재기의뢰)

        this.aprv_list_empl = function(obj,e)
        {
        	this.setCode();
        	this.Combo00.index="0";
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "aprvprgrInfoWritSabun", application.gds_User.getColumn(application.gds_User.rowposition, "sabun"));
        	this.ds_search.setColumn(0, "aprvprgrInfoStepCode","");
        	this.getAprvInfo();

        }

        //코드 호출 함수
        this.setCode = function()
        {
         	this.gf_codeComListLoad("ds_stepCode",  "ds_stepCode",   "Y", "", "", "fn_Callback", "P01");
         	
        }

        this.getAprvInfo = function()
        {
        	trace("======================aprv조회======================");
        	this.gfn_transaction(this,
        			  "getAprvInfo",
        			  "aprvListEmpl/getAprvInfo.do",
        			  "ds_search=ds_search",
        			  "ds_aprv=ds_aprv",
        			  "",
        			  "fn_callback");
        }

        this.fn_Callback = function(svcId,errCd ,errmsg)
        {

        	if(svcId=="ds_stepCode"){
        	//this.ds_stepCode.insertRow();
        		this.ds_stepCode.setColumn(0, "codenm", "전체");
        		this.ds_stepCode.setColumn(0, "codeno", "");
        	}
        	if(svcId=="getAprvInfo"){
        		//trace("디ㅏㄺ"+this.ds_aprv.saveXML());
        	}

        }
        this.Button00_onclick = function(obj,e)
        {
        	trace(this.ds_aprv.saveXML());
        }

        this.Button_numSearch_onclick = function(obj,e)
        {
        	this.ds_aprv.clearData();
        	
        	this.getAprvInfo();
        }

        this.Combo00_onitemchanged = function(obj,e)
        {
        	this.ds_search.setColumn(0, "aprvprgrInfoStepCode", this.Combo00.value)
        }

        
        this.oncellclick = function(obj,e)
        {
        	var clickRow = this.ds_aprv.rowposition;
        	
        	if(this.Grid00.getCellPos() == 10)
        	{
        		var aprvprgrInfoStepCode = this.ds_aprv.getColumn(clickRow, "aprvprgrInfoStepCode");
        		var aprvprgrInfoBookNo = this.ds_aprv.getColumn(clickRow, "aprvprgrInfoBookNo");
        		var aprvprgrInfoSeq = this.ds_aprv.getColumn(clickRow, "aprvprgrInfoSeq");
        		
        		application.gds_aprverInfo.setColumn(0, "aprvprgrInfoStepCode", aprvprgrInfoStepCode);
        		application.gds_aprverInfo.setColumn(0, "aprvprgrInfoBookNo", aprvprgrInfoBookNo);
        		application.gds_aprverInfo.setColumn(0, "aprvprgrInfoSeq", aprvprgrInfoSeq);
        		
        		trace("@@@@@@@@@@@@@"+application.gds_aprverInfo.saveXML());
        		
        		
        		//모달 창이 나올 좌표 값을 설정한다
        		 var nLeft = system.clientToScreenX(this, 10);
        		 var nTop = system.clientToScreenY(this, 10);
        		 
        		 //새로운 모달 창을 띄우기 위한 객체 선언
        		 var newChild = new ChildFrame;
        		 
        		 //새로운 플러그인(모달)을 생성한 후 초기화 시키는 메소드
        		 //매개변수 : '플러그인명', 좌표형태, 생성위치x좌표, 생성위치y좌표,
        		 //				sizeWidth, sizeHeight, 포지션 좌표x, 포지션 y좌표
        		 newChild.init("aprv_comment_cont"
        						, "absolute", nLeft, nTop, 400, 250, null, null
        						, "aprv::aprv_comment_cont.xfdl");
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
        							, "");	
        		
        	}
        	
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
        // 	
        // 		var nRow = application.gds_Params.addRow();
        // 	if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="001"){ // 001.소재기의뢰
        // 		application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 		//application.gds_Params.setColumn(nRow, "MENU_ID", instcdrlt);
        // 	Iject.Mdi.call(this, oObj);
        // 	
        // 	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="002"){// 002.소송접수
        // 	oObj.nRow=1;
        // 	application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 
        // 	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="003"){// 003.응소(제소)보고관리
        // 	 oObj.nRow=2;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 		Iject.Mdi.call(this, oObj);
        // 		//this.go("rais::RAISREQ_REG.xfdl");
        // 	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="004"){// 004.조정안관리
        // 	 oObj.nRow=3;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 		application.gds_Params.setColumn(nRow, "MENU_ID", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoSeq"));
        // 		Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="005"){// 005.재판외화해관리
        // 	 oObj.nRow=4;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="006"){// 006.판결보고
        // 	 oObj.nRow=5;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="007"){// 007.소송종결
        // 	 oObj.nRow=6;
        // 	 application.gds_Params.setColumn(nRow, "PARAM_ID", "aprv_list_empl");
        // 		application.gds_Params.setColumn(nRow, "PARAM_VAL", this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo"));
        // 	Iject.Mdi.call(this, oObj);
        // 
        // 	}
        // trace("gds_Params : "+application.gds_Params.getColumn(0,"PARAM_VAL"));
        // trace("gds_Params : "+application.gds_Params.getColumn(1,"PARAM_VAL"));
        // }

        this.Grid1_OnCellDblClick=function(obj,e){
        	if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="001"){ // 001.소재기의뢰
        	
        	var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("rais::RAISREQ_REG", aArgs);
        		
        		}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="002"){// 002.소송접수
        	 var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("lawsuit::lawsuit_list", aArgs);
        	
        	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="003"){// 003.응소(제소)보고관리
        	 var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::ales_sue", aArgs);
        	
        	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="004"){// 004.조정안관리
        	  var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::MEDIATION001", aArgs);
        	
        	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="005"){// 005.재판외화해관리
        	  var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("prgr::LAWSUIT_REC001", aArgs);
        	
        	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="006"){// 006.판결보고
        	 var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("conc::judg_report", aArgs);
        	
        	}else if(this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoStepCode")=="007"){// 007.소송종결
        	var legalAdvNo = this.ds_aprv.getColumn(this.ds_aprv.rowposition,"aprvprgrInfoBookNo");
        	var aArgs =	{
        					aprvListEmpl:legalAdvNo
        				}
        	this.gfnOpenMenu("comp::comp_lawsuit001", aArgs);

        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.aprv_list_empl, this);
            this.Button_numSearch.addEventHandler("onclick", this.Button_numSearch_onclick, this);
            this.Combo00.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.Grid00.addEventHandler("oncellclick", this.oncellclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid1_OnCellDblClick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_OnClick, this);

        };

        this.loadIncludeScript("aprv_list_empl.xfdl");

       
    };
}
)();
