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
                this.set_name("LAWSUIT_ADM_NO");
                this.set_classname("LAWSUIT_ADM_NO");
                this.set_titletext("소송관리번호조회");
                this._setFormPosition(0,0,622,429);
            }
            this.getSetter("inheritanceid").set("");
            this.style.set_color("#ffffffff");
            this.style.set_font("9 Dotum");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_div_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">전체</Col><Col id=\"value\">0</Col></Row><Row><Col id=\"id\">소제기의뢰번호</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"id\">심급명</Col><Col id=\"value\">2</Col></Row><Row><Col id=\"id\">원피고명</Col><Col id=\"value\">3</Col></Row><Row><Col id=\"id\">소송담당자</Col><Col id=\"value\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit_no", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"INT\" size=\"10\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">1차</Col><Col id=\"codeNo\">001</Col></Row><Row><Col id=\"codeName\">2차</Col><Col id=\"codeNo\">002</Col></Row><Row><Col id=\"codeName\">3차</Col><Col id=\"codeNo\">003</Col></Row><Row><Col id=\"codeName\">4차</Col><Col id=\"codeNo\">004</Col></Row><Row><Col id=\"codeName\">5차</Col><Col id=\"codeNo\">005</Col></Row><Row><Col id=\"codeName\">6차</Col><Col id=\"codeNo\">006</Col></Row><Row><Col id=\"codeName\">7차</Col><Col id=\"codeNo\">007</Col></Row><Row><Col id=\"codeName\">8차</Col><Col id=\"codeNo\">008</Col></Row><Row><Col id=\"codeName\">9차</Col><Col id=\"codeNo\">009</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_instanceType_cp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lawsuit_no_cp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lawsuitAdmNo\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmCode\" type=\"STRING\" size=\"256\"/><Column id=\"instAdmName\" type=\"STRING\" size=\"256\"/><Column id=\"lawsuitCpPladefSepCode\" type=\"STRING\" size=\"256\"/><Column id=\"pladefName\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_view01", "absolute", "14", "107", "585", "282", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "14", "70", "574", "25", null, null, this);
            obj.set_taborder("6");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "13", "65", "585", "35", null, null, this);
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "70", "572", "25", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_search", "absolute", "68", "73", "140", "19", null, null, this);
            this.addChild(obj.name, obj);
            var cmb_search_innerdataset = new Dataset("cmb_search_innerdataset", this.cmb_search);
            cmb_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">소제기의뢰번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">심급명</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">원피고명</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">소송담당자</Col></Row></Rows>");
            obj.set_innerdataset(cmb_search_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Edit("edt_legal_input", "absolute", "213", "73", "250", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "469", "71", "55", "23", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Search", "absolute", "20", "113", "573", "270", null, null, this);
            obj.set_taborder("4");
            obj.set_nodatatext("조회된 자료가 없습니다.");
            obj.set_binddataset("ds_lawsuit_no");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"57\"/><Column size=\"131\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"103\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소송관리번호\"/><Cell col=\"1\" text=\"심급\"/><Cell col=\"2\" text=\"심급명\"/><Cell col=\"3\" text=\"원피고구분\"/><Cell col=\"4\" text=\"원피고명\"/><Cell col=\"5\" text=\"소송담당자명\"/></Band><Band id=\"body\"><Cell text=\"bind:lawsuitAdmNo\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:instAdmCode\" combodataset=\"ds_instanceType\" combocodecol=\"codeNo\" combodatacol=\"codeName\"/><Cell col=\"2\" text=\"bind:instAdmName\"/><Cell col=\"3\" text=\"bind:lawsuitCpPladefSepcode\"/><Cell col=\"4\" text=\"bind:pladefName\"/><Cell col=\"5\" text=\"bind:insaName\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "14", "395", "573", "18", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "98", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("1");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "468", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "138", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "170", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "202", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("5");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "234", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "266", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "298", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "330", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "362", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "394", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "426", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "14", "7", "585", "50", null, null, this);
            obj.set_taborder("5");
            obj.set_text("  소송관리번호 조회");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 573, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 622, 429, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_ADM_NO");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소송관리번호조회");
            		p.style.set_color("#ffffffff");
            		p.style.set_font("9 Dotum");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LAWSUIT_ADM_NO.xfdl", "Lib::common.xjs");
        this.registerScript("LAWSUIT_ADM_NO.xfdl", function() {
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        /*===============================================================================
         * 1. Form 관련 Script
         *=============================================================================*                  
        /********************************************************************************
         * Event	: Form onload
         * Desc		: Form의 모든 컴포넌트가 생성되고, 모든 Object가 Load 되었을 때에
                      발생하는 Event
         *******************************************************************************/ 
        this.LAWSUIT_ADM_NO_onload = function(obj,e)
        {
        	//code_select(); 	// 공통코드 호출 [단 1회 호출추천]
        	
        	//comboSetup(); 	//  공통코드 콤보데이터에 맞게 분할
        	this.LawNoSearch();	//소송관리번호 조회
        	this.edt_legal_input.setFocus();
        }

        

        /*===============================================================================
         * 2. Dataset 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Desc		: Code 데이터 분할
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        /*this.comboSetup=function()
        {
        	var str= 0;
        		
        	for(i=0;i<=ds_cmmCd.rowcount;i++) // 코드 세팅
        	{
        		//심급차수코드
        		if(ds_cmmCd.GetColumn(i,"classCode")=="G01" && ds_cmmCd.GetColumn(i,"useYn")=="Y"){
        			ds_instanceType.AddRow();
        			ds_instanceType.SetColumn(str,"codeNo", ds_cmmCd.GetColumn(i,"codeNo"));
        			ds_instanceType.SetColumn(str,"codeName", ds_cmmCd.GetColumn(i,"codeName"));
        			str++;
        		}	
        	}	
        }*/

        /********************************************************************************
         * Desc		: 소송관리번호 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.LawNoSearch=function() {
            var search1= this.cmb_search.value;
            var search2= this.edt_legal_input.text;
        				
        	var strSvcid="select";
        	var strController="/lawsuit/selectCode.do";
        	var strParam="selectedId="+"\""+search1+"\"";
        	strParam += " selectedId1="+"\""+search2+"\"";
        	//alert(strParam);
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_lawsuit_no=ds_output",strParam,"fnCallback");
        }

        this.LawNoSearch2=function() {
            var search1= this.cmb_search.value;
            var search2= this.edt_legal_input.text;
        				
        	var strSvcid="select2";
        	var strController="/lawsuit/selectCode.do";
        	var strParam="selectedId="+"\""+search1+"\"";
        	strParam += " selectedId1="+"\""+search2+"\"";
        	//alert(strParam);
        	//trace(strParam);		
        	this.gfn_transaction(this,strSvcid,strController,"","ds_lawsuit_no=ds_output",strParam,"fnCallback");
        }

        /*===============================================================================
         * 4. Component 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Event	: btn_search onclick
         * Desc		:소송관리번호조회 버튼을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.btn_search_onclick=function(obj,e)
        {
        	//trace("this.cmb_search.value  ="+this.cmb_search.index);
        	var edt_legal_input_test="\""+this.edt_legal_input.text+"\"";
        	//trace("edt_legal_input_test  ="+edt_legal_input_test);
        	if(this.cmb_search.index!=0) {
        		if(edt_legal_input_test=="\""+"\""){
        			alert("검색어를 입력하세요.");
        			this.edt_legal_input.Text='';
        			//this.edt_legal_input.SetFocus();
        			return;
        		}
        	}else{
        		if(edt_legal_input_test !="\""+"\""){
        			alert("검색조건을 선택해주세요.");
        			return;
        		}
        	}
        	//소송관리번호조회 버튼 클릭시 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	this.LawNoSearch();
        }

        /********************************************************************************
         * Event	: Button_legal_input OnKeyDown
         * Desc		: 엔터키를 입력했을 경우 발생되는 Event
         *******************************************************************************/
        this.edt_legal_input_onkeydown=function(obj,e)
        {	
        	if(e.keycode==13){ 
        		this.btn_search_onclick();
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
        	switch(svcid)
        	{
        		case "select":
        // 			trace(this.ds_lawsuit_no.saveXML());
        // 			trace(this.ds_instanceType.saveXML());
        			//데이터 조회 에러 발생시
        			
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        				+ "소송관리조회 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				//trace("this.fv_iStartPageNo = "+this.fv_iStartPageNo);
        				//trace("this.fv_iUnitSelRowNo = "+this.fv_iUnitSelRowNo);
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				//trace("iLastRow"+iLastRow);
        				//trace("rownum >= "+(iLastRow + this.fv_iStartSelRowNo));
        				//trace("rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				this.ds_lawsuit_no.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				//trace("this.ds_lawsuit_no.getRowCount()"+this.ds_lawsuit_no.getRowCount());
        				if (this.ds_lawsuit_no.getRowCount() == 0)
        				{
        					this.div_page.set_visible("false");
        					alert("더이상 조회할 자료가 없습니다.");
        					this.ds_lawsuit_no.filter("");
        					return;
        				}
        				else
        				{
        					this.div_page.set_visible("true");
        					this.fv_iServerRowCount = this.ds_lawsuit_no.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("gray");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        				} 
        			}
        			break;
        			
        			case "select2":
        			//trace(ds_lawsuit_no.saveXML());
        			//데이터 조회 에러 발생시
        			if(errcd != "0"){	
        			alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        				+ "소송관리조회 에러내용: "+ errmsg);
        			return false;
        			}
        			else{
        				//trace("this.fv_iStartPageNo = "+this.fv_iStartPageNo);
        				//trace("this.fv_iUnitSelRowNo = "+this.fv_iUnitSelRowNo);
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				trace(iLastRow);
        				trace(this.fv_iStartSelRowNo);
        				trace(this.fv_iUnitSelRowNo);
        				//trace("iLastRow"+iLastRow);
        				//trace("rownum >= "+(iLastRow + this.fv_iStartSelRowNo));
        				//trace("rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				this.ds_lawsuit_no.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				//trace("this.ds_lawsuit_no.getRowCount()"+this.ds_lawsuit_no.getRowCount());
        				if (this.ds_lawsuit_no.getRowCount() == 0)
        				{
        					this.div_page.set_visible("false");
        					this.ds_lawsuit_no.filter("");
        					return;
        				}
        				else
        				{
        					this.div_page.set_visible("true");
        					this.fv_iServerRowCount = this.ds_lawsuit_no.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("gray");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        				} 
        			}
        			break;
        	}
        } 

        /*===============================================================================
         * 3. Grid 관련 Script
         *=============================================================================*/
        /********************************************************************************
         * Event	: grd_Search_OnCellDblClick
         * Desc		: 소송관리번호 목록을 클릭했을 때 발생되는 Event
         *******************************************************************************/
        this.grd_Search_oncelldblclick=function(obj,e)
        {	
        	this.close(this.grd_Search.getCellValue(e.row,0)+this.grd_Search.getCellValue(e.row,1));
        	
        	/*trace(e.row);
        	trace(this.grd_search);
        	trace("grd_search.getCellValue(e.row,0) ="+this.grd_search.getCellValue(e.row,0));
        	trace("grd_Search.getCellValue(e.row,1) ="+this.grd_Search.getCellValue(e.row,1));*/
        	//this.close();
        	//close(grd_Search.getCellValue(e.row,0)+grd_Search.getCellValue(e.row,1));
        }

        /********************************************************************************
         * Desc		: 헤더 정렬
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/

        this.grd_Search_onheadclick=function(obj,e)
        {	
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 0; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 0;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	this.LawNoSearch2();
        	var objDs = this.objects[obj.binddataset];
        	// 컬럼의 정렬방식을 'head'의 text에 "▲,▼"여부로 판단.										
        	for (var i = 0; i < obj.getCellCount("head"); i++)
        	{	
        		var sHeadText = obj.getCellText(-1, i);
                var nLen      = sHeadText.length - 1;
           
        		if (i == e.cell)
        		{
                    var sColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":");

        			if (sHeadText.substr(nLen) == "▲") 
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▼");
        				objDs.set_keystring("S:-" + sColId[1]);
        			}
        			else if (sHeadText.substr(nLen) == "▼") 
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen)+ "▲");
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        			else 
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText+"▲");
        				objDs.set_keystring("S:+" + sColId[1]);
        			}
        		}
        		else	// 정렬표시 삭제
        		{
        			if (sHeadText.substr(nLen) == "▲" || sHeadText.substr(nLen) == "▼") 
        			{
        				obj.setCellProperty( "head", i, "text", sHeadText.substr(0, nLen));
        			}
        		}
        	}	
        	//oncelldblclick
        	//this.gfn_GridSort(grd_Search,grd_lawsuit_no,nCell,10);
        }

        /********************************************************************************
         * Desc		: 화면 종료시 
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.LAWSUIT_ADM_NO_onclose=function(obj,e)
        {
        	this.close();
        }

        //-------------------------------------------------------------------------------------------------
        // 인텍스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	//trace("obj.text ="+obj.text);
        	var iFirstNum = (iNo-1) * this.fv_iMaxPageNum + 1;
        	//trace("(iNo-1) * this.fv_iMaxPageNum + 1; =" + (iNo-1) * this.fv_iMaxPageNum + 1);
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	//trace("iFirstNum + this.fv_iMaxPageNum; =" + iFirstNum + this.fv_iMaxPageNum);
        	this.fn_SetStyle();
        	obj.style.set_color("gray");
        	this.ds_lawsuit_no.filter("");
        	//trace("rownum >= " + iFirstNum);
        	//trace("rownum < " + iLastNum);
        	this.ds_lawsuit_no.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("select", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // Page번호 Setting
        //-------------------------------------------------------------------------------------------------
        this.fn_SetPageNo = function()
        {
        	var sPage = this.fv_iStartPageNo * this.fv_iMaxPageNum;
        	
        	// 이전버튼 처리
        	if (this.fv_iStartPageNo < 1)
        	{
        		this.div_page.stc_Prev.set_visible(false);
        	} 
        	else 
        	{
        		this.div_page.stc_Prev.set_visible(true);
        	}

        	// 마지막 버튼 처리
        	if (this.fv_iServerRowCount < this.fv_iUnitSelRowNo)
        	{
        		this.div_page.stc_Next.set_visible(false);
        	}
        	else
        	{
        		this.div_page.stc_Next.set_visible(true);
        	}

        	// 인덱스 번호 처리
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].set_visible(true);
        		this.div_page.components["stc_No"+i].set_text(sPage+i+1);

        		if (this.fv_iServerRowCount < (i * this.fv_iMaxPageNum))
        		{
        			this.div_page.components["stc_No"+i].set_visible(false);			
        		} 
        		else 
        		{
        			this.div_page.components["stc_No"+i].set_visible(true);			
        		}
        	}	
        }
        //-------------------------------------------------------------------------------------------------
        // Style조정
        //-------------------------------------------------------------------------------------------------
        this.fn_SetStyle = function()
        {
        	for (var i = 0; i < this.fv_iMaxPageNum; i++)
        	{
        		this.div_page.components["stc_No"+i].style.set_color("black");			
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.LAWSUIT_ADM_NO_onload, this);
            this.addEventHandler("onclose", this.LAWSUIT_ADM_NO_onclose, this);
            this.edt_legal_input.addEventHandler("onkeydown", this.edt_legal_input_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_Search.addEventHandler("oncelldblclick", this.grd_Search_oncelldblclick, this);
            this.grd_Search.addEventHandler("onheadclick", this.grd_Search_onheadclick, this);
            this.div_page.stc_Prev.addEventHandler("onclick", this.div_page_stc_Prev_onclick, this);
            this.div_page.stc_Next.addEventHandler("onclick", this.div_page_stc_Next_onclick, this);
            this.div_page.stc_No0.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No1.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No2.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No3.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No4.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No5.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No6.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No7.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No8.addEventHandler("onclick", this.div_page_stc_No_onclick, this);
            this.div_page.stc_No9.addEventHandler("onclick", this.div_page_stc_No_onclick, this);

        };

        this.loadIncludeScript("LAWSUIT_ADM_NO.xfdl");

       
    };
}
)();
