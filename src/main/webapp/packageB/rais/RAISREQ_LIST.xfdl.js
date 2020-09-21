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
                this.set_name("RAISREQ_LIST");
                this.set_classname("RAISREQ_LIST");
                this.set_titletext("소제기 의뢰 현황");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");
            this.getSetter("OnLoadCompleted").set("RAISREQ_LIST_OnLoadCompleted");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search_wtr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">전체</Col><Col id=\"codeNo\">0</Col></Row><Row><Col id=\"codeName\">회신</Col><Col id=\"codeNo\">1</Col></Row><Row><Col id=\"codeName\">미회신</Col><Col id=\"codeNo\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clas_code", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codeno\" type=\"STRING\" size=\"256\"/><Column id=\"codenm\" type=\"STRING\" size=\"256\"/><Column id=\"codeFull\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"raisreqReqId\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqClasCode\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqReqWtrNnum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqReqWtrYnum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqReqWtrNum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqWtrYnum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqWtrNnum\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqDoLawsuit\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mgr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaEmail\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "14", "161", "996", "419", null, null, this);
            obj.set_taborder("26");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "14", "7", "996", "50", null, null, this);
            obj.set_taborder("0");
            obj.set_text("  소제기 의뢰 현황");
            obj.style.set_align("left");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("#ffffffff");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "14", "65", "996", "59", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #c8c8c8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "70", "984", "25", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "20", "70", "105", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("의뢰자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_No", "absolute", "130", "73", "130", "19", null, null, this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.style.setStyleValue("background", "disabled", "#f7f7f7ff");
            obj.style.setStyleValue("color", "disabled", "#999999ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list_search", "absolute", "278", "71", "55", "23", null, null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "351", "70", "105", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("소송제기분류");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "94", "984", "25", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#eaeaeaff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.style.set_align("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "20", "94", "105", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("회신여부");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_Wtr", "absolute", "132", "97", "203", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_innerdataset("@ds_search_wtr");
            obj.set_codecolumn("codeNo");
            obj.set_datacolumn("codeName");
            obj.style.set_color("black");
            obj.style.set_font("8 Dotum");
            obj.set_columncount("3");
            obj.set_value("0");
            obj.set_index("0");

            obj = new Static("Static06", "absolute", "351", "94", "105", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("기준일자");
            obj.style.set_background("#f4edfaff");
            obj.style.set_border("1 solid #c8c8c8ff");
            obj.style.set_color("#133678ff");
            obj.style.set_bordertype("normal 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Req_Date1", "absolute", "461", "97", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.style.set_background("#f7f7f7ff");

            obj = new Static("Static07", "absolute", "599", "96", "16", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Req_Date2", "absolute", "618", "97", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.style.set_background("#f7f7f7ff");

            obj = new Button("btn_list_search00", "absolute", "881", "95", "55", "23", null, null, this);
            obj.set_taborder("16");
            obj.set_text("검색");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clean", "absolute", "942", "95", "55", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_text("초기화");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("white");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "14", "139", null, "19", "83.11%", null, this);
            obj.set_taborder("19");
            obj.set_text("소송 제기 의뢰 현황");
            obj.style.set_font("bold 9 굴림체");
            this.addChild(obj.name, obj);

            obj = new Combo("list_com", "absolute", "461", "73", "130", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_innerdataset("@ds_clas_code");
            obj.set_codecolumn("codeno");
            obj.set_datacolumn("codenm");
            obj.style.set_background("#ffffffff");
            obj.style.set_color("#333333ff");
            obj.set_index("-1");

            obj = new Grid("grd_0", "absolute", "20", "167", "984", "407", null, null, this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_raisreq");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"133\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\"/></Cell><Cell col=\"5\" colspan=\"3\"><Cell/><Cell col=\"1\" text=\"회신결과\"/><Cell col=\"2\"/></Cell><Cell row=\"1\" text=\"의뢰자\"/><Cell row=\"1\" col=\"1\" text=\"소송제기분류\"/><Cell row=\"1\" col=\"2\" text=\"미회신\"/><Cell row=\"1\" col=\"3\" text=\"회신\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"소송가능\"/><Cell row=\"1\" col=\"6\" text=\"소송불가\"/><Cell row=\"1\" col=\"7\" text=\"소송접수\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" expr=\"expr:insaName +&quot; (&quot;+raisreqReqId+&quot;)&quot;\"/><Cell col=\"1\" displaytype=\"combo\" text=\"bind:lawRaisreqClasCode\" editdisplay=\"edit\" combodataset=\"ds_clas_code\" combocodecol=\"codeno\" combodatacol=\"codenm\" combodisplay=\"edit\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:raisreqRepWtrNnum\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:raisreqRepWtrYnum\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:raisreqRepWtrNum\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:raisreqWtrYnum\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:raisreqWtrNnum\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:raisreqDoLawsuit\"/></Band><Band id=\"summary\"><Cell colspan=\"2\"><Cell text=\"                      통계\"/><Cell col=\"1\"/></Cell><Cell col=\"2\" displaytype=\"text\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;raisreqRepWtrNnum&quot;)+&quot; 건&quot;\"/><Cell col=\"3\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;raisreqRepWtrYnum&quot;)+&quot; 건&quot;\"/><Cell col=\"4\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;raisreqRepWtrNum&quot;)+&quot; 건&quot;\"/><Cell col=\"5\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;raisreqWtrYnum&quot;)+&quot; 건&quot;\"/><Cell col=\"6\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;raisreqWtrNnum&quot;)+&quot; 건&quot;\"/><Cell col=\"7\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;raisreqDoLawsuit&quot;)+&quot; 건&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00", "absolute", "953", "585", "55", "23", null, null, this);
            obj.set_taborder("25");
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
            		p.set_classname("RAISREQ_LIST");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소제기 의뢰 현황");
            		p.getSetter("OnLoadCompleted").set("RAISREQ_LIST_OnLoadCompleted");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cal_Req_Date1","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_Req_Date2","value","ds_lawsuitNoti","lawsuitNotiDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_No","value","ds_mgr","insaName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("RAISREQ_LIST.xfdl", "Lib::common.xjs");
        this.registerScript("RAISREQ_LIST.xfdl", function() {
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        var search1=""; // 소송제기분류
        var search2=""; // 의뢰자	
        var search3=""; // 회신여부
        var search4=""; // 기준일자
        var search5="";

        /*===============================================================================
         * 1. Form 관련 Script
         *=============================================================================*                  
        /********************************************************************************
         * Event	: Form onload
         * Desc		: Form의 모든 컴포넌트가 생성되고, 모든 Object가 Load 되었을 때에
                      발생하는 Event
         *******************************************************************************/ 
        this.RAISREQ_LIST_onload = function(obj,e)
        {    
            //this.ds_clas_code.clearData();
            //this.gf_classCodeListLoad("ds_clas_code", "ds_clas_code", "Y", "fnCallBack", "D01"); //사건유형공통코드	*/
        	this.comboSetup();
        	this.list_com.index="0";
            //this.btn_search_onclick();
            this.getList();

           // this.name_reset.set_enable(false);
        }

        /********************************************************************************
         * Desc		: 상태코드 데이터셋 초기화
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.comboSetup = function(){
        this.gf_codeComListLoad("ds_clas_code",  "ds_clas_code",   "Y", "", "", "fnCallback", "D01");// 사건유형공통코드
           // this.ds_clas_code.setColumn(0, "codeName", "전체");
        }

        
        /********************************************************************************
         * Desc		: 소제기 현황 조회
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.getList = function(){

            var strSvcid        = "getRaisreqDetailList"; // "getRaisreqListDetail";
            var strController    = "/rais/getRaisreqDetailList.do";
        trace("tran val : "+search1+" "+this.gfn_Trim(this.ds_mgr.getColumn(0, "insaSabun"))+" " +search3+" "+search4);
             var strParam = "combo_Clas_Code=" + "\"" + search1 +"\"";
                strParam += " edt_No=\"" +   this.gfn_Trim(this.ds_mgr.getColumn(0, "insaSabun")) + "\"";   
                 strParam += " radio_Wtr=" + "\"" + search3 + "\"";
                  strParam += " cal_Req_Date1=" + "\"" + search4 + "\"";
              strParam += " cal_Req_Date2=" + "\"" + search5 + "\""; 
          
            // alert(strParam);
            // 트랜젝션 공통함수 호출 // eclipse로 인자값들을 전달하는 부분
            this.gfn_transaction(this,
                            strSvcid,
                            strController,
                            "",
                            "ds_raisreq=ds_output",
                            strParam,
                            "fnCallback"
                            );
           
        }

        
        // CallBack
        this.fnCallback = function(strId,errcode,errmsg){

        if(strId == "getRaisreqDetailList"){

        	for(var i=0;i<this.ds_raisreq.getRowCount();i++){

        	if(typeof (this.ds_raisreq.getColumn(i,"insaName"))=='undefined') this.ds_raisreq.setColumn(i,"insaName"," ");
        	if(typeof (this.ds_raisreq.getColumn(i,"raisreqReqId"))=='undefined') this.ds_raisreq.setColumn(i,"raisreqReqId","");
        	}

        		if(errcode == 0){	
        		    if( this.ds_raisreq.getRowCount() < 1 ){
        		    
        		       alert( "조회 내용이 없습니다.");
        		       this.btn_clean_onclick();
        		   
        		    }
        			
        		}else{
        		
        		    alert("데이터 불러오기에 실패하였습니다." + errmsg);
        		}
        	}
        	if(strId=="ds_clas_code"){
        		this.ds_clas_code.setColumn(0,"codenm","전체");
        		this.ds_clas_code.setColumn(0,"codeno","");
        	}

        
         }
        // 
        //    switch (strId)
         // {
        //         case "ds_clas_code" :       
        //             // trace(ds_clas_code.saveXML());
        //             this.ds_clas_code.deleteRow(this.ds_clas_code.rowcount-1);
        //             this.ds_clas_code.insertRow(0);
        //             this.ds_clas_code.setColumn(0,"codeName","전체");
        //             this.ds_clas_code.setColumn(0,"codeNo","000");
        //             this.ds_clas_code.setColumn(0,"useYn","Y");
        //             this.combo_Clas_Code.index = 0;
        //         	break;
         //       case "getRaisreqDetailList" :
               
        //            	//trace(ds_raisreq_stats.saveXML());
        // 			//데이터 조회 에러 발생시
        // 			if(errcode != "0"){	
        // 				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        // 					+ "소제기 현황 조회 에러내용: "+ errmsg);
        // 				return false;
        // 			
        // 			}else{
        // 				trace("this.fv_iStartPageNo = "+this.fv_iStartPageNo);
        // 				trace("this.fv_iUnitSelRowNo = "+this.fv_iUnitSelRowNo);
        // 				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        // 				trace("iLastRow = "+iLastRow);
        // 				trace("rownum >= "+(iLastRow + this.fv_iStartSelRowNo));
        // 				trace("rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        // 				this.ds_raisreq.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        // 				trace("this.ds_raisreq.getRowCount() = "+this.ds_raisreq.getRowCount());
        // 
        // 				if(this.ds_raisreq.getRowCount() <= 0){
        // 					alert("해당 검색조건의 결과가 없습니다.");
        // 					this.ds_raisreq.filter("");
        // 					return;
        // 				}else{
        // 					this.fv_iServerRowCount = this.ds_raisreq.getRowCount();
        // 					this.fn_SetStyle();
        // 					this.fn_SetPageNo();
        // 					this.div_page.stc_No0.style.set_color("gray");
        // 					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        // 				}
        // 			}	
        //		break;
        //     }

        
        // 검색버튼
        this.btn_search_onclick = function(obj,e)
        {

        	// 2 전체소제기분류코드 선택시 처리
        	trace("검색: "+this.list_com.value);
        	search1=this.list_com.value;

        	if( typeof (this.list_com.value)=="undefined"){
        		search1=""
        	}
            if(this.radio_Wtr.index=="1"){
        		search3="Y";
        	}else if(this.radio_Wtr.index=="2"){
        		search3="N";
        	}else{
        	    search3="";
        	}
            
           
            search4=this.cal_Req_Date1.value;
        	search5=this.cal_Req_Date2.value;

        	
        	
        	if(search4>search5){
        	
        	alert('날짜를 확인해 주세요.');
        	this.cal_Req_Date2.set_value("");
        	this.cal_Req_Date2.dropdown();
        	return;
        // 	
        // 		if( this.gfn_IsNull(this.cal_Req_Date1.value) && !(this.gfn_IsNull(this.cal_Req_Date2.value)) ){
        // 			alert("앞의 날짜를 입력해주세요.");
        // 		}else if( !(this.gfn_IsNull(this.cal_Req_Date1.value)) && this.gfn_IsNull(this.cal_Req_Date2.value) ){
        // 			alert("뒤의 날짜를 입력해주세요.");
        // 		}else{
        // 			if( this.gfn_IsNull(this.cal_Req_Date1.value) && this.gfn_IsNull(this.cal_Req_Date2.value) ){
        // 				 search4="";
        // 				 search5="";
        // 			}
        // 			//버튼 클릭시 페이징 초기화 
        // 			this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        // 			this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        // 			this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        // 			this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        // 			this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        // 			
        // 			this.comboSetup();
        // 			this.getList();
        	//	}
        	}
        	else {
        	
        	if( this.gfn_IsNull(this.cal_Req_Date1.value) && this.gfn_IsNull(this.cal_Req_Date2.value) ){
        			 search4="";
        			 search5="";
        			}
        	this.getList();
        	}
        }
            /*	var strSvcid        = "getRaisreqList"; // "getRaisreqListDetail";
            var strController    = "rais/getRaisreqList.do";
            var strParam = "lawRaisreqReqId=" + wrapQuote(search1);
                strParam += " lawRaisreqClasCode=" + wrapQuote(search2);   
                strParam += " lawRaisreqWtrNum=" + wrapQuote(search3);
                strParam += " this.cal_Req_Date1=" + wrapQuote(search4);
                strParam += " this.cal_Req_Date2=" + wrapQuote(search5); 
           
            alert(strParam);
            // 트랜젝션 공통함수 호출 // eclipse로 인자값들을 전달하는 부분
            gfn_transaction(this,
                            strSvcid,
                            strController,
                            "",
                            "ds_raisreq_stats=ds_output",
                            strParam,
                            "fnCallback"
                            );	*/
            /*    if(search4 > search5){
                alert("날짜를 확인해 주세요");
                this.cal_Req_Date2.value="";
                this.cal_Req_Date2.dropdown();
                return;
            }else{
                getList();
            }    */

        // 초기화
        this.btn_clean_onclick = function(obj,e)
        {
        	this.list_com.set_value("");
            this.edt_No.set_value("");
            this.radio_Wtr.index="0";
            this.cal_Req_Date1.set_value("");
            this.cal_Req_Date2.set_value("");
        	this.ds_raisreq.clearData();
        	this.ds_mgr.setColumn(0, "insaSabun","");
        	  search1=""; 
            search2=""; //
            search3=""; // 회신여부
            search4=""; // 기준일자
            search5="";    
        	this.RAISREQ_LIST_onload();
           // this.reload();
            
            //페이징 초기화 
        // 	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        // 	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        // 	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        // 	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        // 	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        // 	
        // 	this.fn_SetPageNo();
        //     
            // ds_raisreq_stats.ClearData();

        }

        // 닫기
        this.btn_close_OnClick = function(obj)
        {
            var winId = Iject.$["workFrame"].getActiveFrame().name;
        	trace("winId : "+winId);
            Iject.$["workFrame"].frames[winId].destroy();
        }
           
        this.edt_ID_OnKeyDown = function(obj,nChar,bShift,bCtrl,bAlt,LLParam,HLParam)
        {
            if( nChar == 13 ){
               this.btn_search2_onclick();
            }
        }

        // 의뢰자조회버튼
        this.btn_search2_onclick = function(obj,e){
            var v_argParm = new Array();    //배열선언
            v_argParm[0] = '';
         
            //팝업화면 호출
            var nLeft = system.clientToScreenX(this, 10);
        	var nTop = system.clientToScreenY(this, 10);
        	
        	// 차일드 프레임 생성 및 모달 창 출력
        	var newChild = new ChildFrame;
        	newChild.init("Popup1"
        					, "absolute", nLeft, nTop, 700, 600, null, null
        					,/* "rais::POP_RAISREQ_MEN.xfdl"*/"lawsuit::LAWSUIT_CHAR.xfdl");
        					
        					
        	newChild.set_openalign("center middle");
        	newChild.set_dragmovetype("all");
        	
        	newChild.showModal(this.getOwnerFrame()
        						,  {data:this.edt_No.value}
        						, this
        						, "modal_callback");
        	
        	
            
            //var v_RtnVal =  this.gf_dialog("RAISREQ_LIST", "lawsuit::LAWSUIT_CHAR.xfdl", 0, 0, 700, 600, "", "Middle center",{objArguments:v_argParm});

        
        	

            /*	if(!gfn_IsNull(v_rtnArr))
            {        
                select_legal(v_rtnArr[0]);
            }	*/
            
            /* if(this.ds_mgr.rowcount == 0){
        			this.ds_mgr.addRow();
        			if(!this.gfn_IsNull(this.edt_ID.value)){
        				this.ds_mgr.setColumn(this.ds_mgr.rowposition, "insaName", this.edt_ID.value);
        			}
        		}
        		this.ds_mgr.setColumn(0, "insaSabun", v_RtnVal[0]);
        		this.ds_mgr.setColumn(0, "insaName", v_RtnVal[1]);
        		
        		trace("=====================>  "+this.ds_mgr.getColumn(0,0)+" : "+this.ds_mgr.getColumn(0,1));*/
        		// cal_depo_asig_date.value = gfn_Today();
        }

        // 모달창 콜백
        this.modal_callback = function(strID,variant)
        {
        	trace(variant);
        	if(strID == "Popup1")
        	{
        		var idx = variant.indexOf("&"); 
        		var a = variant.substring(0, idx);
        		var b = variant.substring(idx+1);
        		
        		if(this.ds_mgr.getRowCount() == 0){
        			this.ds_mgr.addRow();
        		}
        			
        		this.ds_mgr.setColumn(0, "insaSabun", a);
        		this.ds_mgr.setColumn(0, "insaName", b);
        	
        		//this.name_reset.set_enable(true);
        		
        		if(this.gfn_IsNull(variant))
        		{
        			return;
        		}
        	}
        }	

        /*    function btn_search2_onclick(obj:Button,  e:ClickEventInfo)
        {
            var rtn = "";
            rtn = dialog("SearchID","lawsuit::LAWSUIT_CHAR.xfdl","RAISREQ_LIST","","showtitlebar=true",0,0);
            var id = split(rtn,"&");
            for( i=0 ; i<id.Length() ; i++ ){
                   AddVariable( "no_"+ (i+1) , id[i]);
               }         
            edt_ID.Text = no_2;
            search2 = no_1;
        }    */   

        this.combo_Clas_Code_onitemchanged = function(obj,e)
        {
            trace("chekcd :"+this.list_com.value);
        }

        /********************************************************************************
         * Desc		: 닫기 버튼 누르면, 화면 종료 
         * Param	: 없음
         * Return	: 없음
         *******************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
            this.close();
        }

        /*	function edt_ID_onkeydown(obj:Edit, e:KeyEventInfo)
        {
        	if( nChar == 13 ){

        	   btn_search2_OnClick();
        	
            }
        }	*/
        //여기서부터 페이지링 상관없는 코드...
        //-------------------------------------------------------------------------------------------------
        // 인덱스 클릭
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_No_onclick = function(obj,e)
        {
        	var iNo = new Number(obj.text);
        	trace("obj.text ="+obj.text);
        	var iFirstNum = (iNo-1) * this.fv_iMaxPageNum + 1;
        	trace("(iNo-1) * this.fv_iMaxPageNum + 1; =" + (iNo-1) * this.fv_iMaxPageNum + 1);
        	var iLastNum = iFirstNum + this.fv_iMaxPageNum;
        	trace("iFirstNum + this.fv_iMaxPageNum; =" + iFirstNum + this.fv_iMaxPageNum);
        	this.fn_SetStyle();
        	obj.style.set_color("gray");
        	this.ds_raisreq.filter("");
        	trace("rownum >= " + iFirstNum);
        	trace("rownum < " + iLastNum);
        	this.ds_raisreq.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        	
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqDetailList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqDetailList", 0, "succ");
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
        this.name_reset_onclick = function(obj,e)
        {
        	this.ds_mgr.clearData();
        	this.name_reset.set_enable(false);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.RAISREQ_LIST_onload, this);
            this.btn_list_search.addEventHandler("onclick", this.btn_search2_onclick, this);
            this.radio_Wtr.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.btn_list_search00.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clean.addEventHandler("onclick", this.btn_clean_onclick, this);
            this.list_com.addEventHandler("onitemchanged", this.combo_Clas_Code_onitemchanged, this);
            this.grd_0.addEventHandler("oncellclick", this.grd_Search_oncellclick, this);
            this.grd_0.addEventHandler("oncelldblclick", this.grd_Search_oncellDbclick, this);
            this.btn_close00.addEventHandler("onclick", this.btn_close_OnClick, this);

        };

        this.loadIncludeScript("RAISREQ_LIST.xfdl");

       
    };
}
)();
