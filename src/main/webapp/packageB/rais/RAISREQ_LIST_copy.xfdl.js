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
                this.set_classname("Work");
                this.set_titletext("소제기 의뢰 현황");
                this._setFormPosition(0,0,800,600);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search_wtr", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"value\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"value\">회신</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">미회신</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clas_code", this);
            obj._setContents("<ColumnInfo><Column id=\"codeName\" type=\"STRING\" size=\"256\"/><Column id=\"codeNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codeName\">구상</Col><Col id=\"codeNo\">001</Col></Row><Row><Col id=\"codeName\">의료과실</Col><Col id=\"codeNo\">002</Col></Row><Row><Col id=\"codeName\">장기채무부존재</Col><Col id=\"codeNo\">003</Col></Row><Row><Col id=\"codeName\">특허침해</Col><Col id=\"codeNo\">004</Col></Row><Row><Col id=\"codeName\">영업방해</Col><Col id=\"codeNo\">005</Col></Row><Row><Col id=\"codeName\">계약파기</Col><Col id=\"codeNo\">006</Col></Row><Row><Col id=\"codeName\">채무불이행</Col><Col id=\"codeNo\">007</Col></Row><Row><Col id=\"codeName\">인사사고</Col><Col id=\"codeNo\">008</Col></Row><Row><Col id=\"codeName\">기타</Col><Col id=\"codeNo\">099</Col></Row><Row><Col id=\"codeName\">전체</Col><Col id=\"codeNo\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_raisreq", this);
            obj._setContents("<ColumnInfo><Column id=\"LAW_RAISREQ_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_CLAS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_REP_YWTR\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_REP_NWTR\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_REP_WTR\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_YWTR\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_NWTR\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_WTR\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqDate1\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqDate2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search_key", this);
            obj._setContents("<ColumnInfo><Column id=\"LAW_RAISREQ_REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAW_RAISREQ_CLAS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqDate1\" type=\"STRING\" size=\"256\"/><Column id=\"raisreqDate2\" type=\"STRING\" size=\"256\"/><Column id=\"wtr\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LAW_RAISREQ_REQ_ID\">전체</Col><Col id=\"LAW_RAISREQ_CLAS_CODE\">100</Col><Col id=\"raisreqDate1\">20130101</Col><Col id=\"raisreqDate2\">20190101</Col><Col id=\"wtr\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_grid_top", "absolute", "0", "31", null, "23", "0", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);

            obj = new Div("DivTop", "absolute", "1%", "8", null, "84", "0.75%", null, this);
            obj.set_taborder("4");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "1.28%", "7", null, "28", "90.31%", null, this.DivTop);
            obj.set_taborder("0");
            obj.set_text("의뢰자");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.DivTop.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "41.58%", "7", null, "28", "46.05%", null, this.DivTop);
            obj.set_taborder("1");
            obj.set_text("소송제기분류");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.DivTop.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "41.71%", "47", null, "28", "46.05%", null, this.DivTop);
            obj.set_taborder("2");
            obj.set_text("기준일자");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.DivTop.addChild(obj.name, obj);
            obj = new Button("btn_searchByID", "absolute", null, "8", "58", "25", "66.58%", null, this.DivTop);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.DivTop.addChild(obj.name, obj);
            obj = new Button("btn_IDReset", "absolute", "34.31%", "7", null, "26", "59.31%", null, this.DivTop);
            obj.set_taborder("7");
            obj.set_text("초기화");
            this.DivTop.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "1.28%", "47", null, "28", "90.31%", null, this.DivTop);
            obj.set_taborder("8");
            obj.set_text("회산여부");
            obj.style.set_background("lavender left middle");
            obj.style.set_padding("1px 1px 1px 10");
            this.DivTop.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "71.81%", "44", null, "34", "23.72%", null, this.DivTop);
            obj.set_taborder("10");
            obj.set_text("~");
            this.DivTop.addChild(obj.name, obj);
            obj = new Button("btn_searchByCal", "absolute", null, "48", "58", "25", "11", null, this.DivTop);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Search");
            this.DivTop.addChild(obj.name, obj);
            obj = new Button("btn_clean", "absolute", "92.09%", "10", null, "26", "1.66%", null, this.DivTop);
            obj.set_taborder("12");
            obj.set_text("초기화");
            this.DivTop.addChild(obj.name, obj);
            obj = new Radio("radio_wtr", "absolute", "10.84%", "50", null, "21", "59.82%", null, this.DivTop);
            this.DivTop.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_search_wtr");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_value("A");
            obj.set_index("0");
            obj = new Edit("edit_ID", "absolute", "10.08%", "9", null, "21", "74.62%", null, this.DivTop);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_value("전체");
            this.DivTop.addChild(obj.name, obj);
            obj = new Combo("combo_clas_code", "absolute", "54.97%", "9", null, "21", "10.08%", null, this.DivTop);
            this.DivTop.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_innerdataset("@ds_clas_code");
            obj.set_datacolumn("codeName");
            obj.set_codecolumn("codeNo");
            obj.set_value("100");
            obj.set_text("전체");
            obj.set_index("9");
            obj = new Calendar("cal_raisreq_date01", "absolute", "54.97%", "51", null, "21", "28.83%", null, this.DivTop);
            this.DivTop.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_popupsize("200 200");
            obj.set_value("null");
            obj.set_innerdataset("@ds_search_key");
            obj.set_datecolumn("raisreqDate1");
            obj.set_type("spin");
            obj = new Calendar("cal_raisreq_date02", "absolute", "73.98%", "51", null, "21", "9.82%", null, this.DivTop);
            this.DivTop.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_popupsize("200 200");
            obj.set_value("null");
            obj.set_innerdataset("@ds_search_key");
            obj.set_datecolumn("raisreqDate2");

            obj = new Div("Div04", "absolute", "1%", "97", null, "35", "84.38%", null, this);
            obj.set_taborder("7");
            obj.set_text("소송제기 의뢰 현황");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "1%", "128", null, "412", "0.75%", null, this);
            obj.set_taborder("8");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid0", "absolute", "0.89%", "7", null, "393", "1.66%", null, this.Div05);
            obj.set_taborder("3");
            obj.set_binddataset("ds_raisreq");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회가 되지 않았습니다");
            obj.set_extendsizetype("row");
            obj.set_enableevent("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"108\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"3\" text=\"상태\"/><Cell col=\"5\" colspan=\"3\" text=\"회신결과\"/><Cell row=\"1\" text=\"의뢰자\"/><Cell row=\"1\" col=\"1\" text=\"소송제기분류\"/><Cell row=\"1\" col=\"2\" text=\"미회신\"/><Cell row=\"1\" col=\"3\" text=\"회신\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"소송가능\"/><Cell row=\"1\" col=\"6\" text=\"소송불가\"/><Cell row=\"1\" col=\"7\" text=\"소송접수\"/></Band><Band id=\"body\"><Cell edittype=\"text\" expr=\"&quot; (&quot;+LAW_RAISREQ_REQ_ID+&quot;)&quot;\"/><Cell col=\"1\" text=\"bind:LAW_RAISREQ_CLAS_CODE\"/><Cell col=\"2\" edittype=\"mask\" text=\"bind:LAW_RAISREQ_REP_NWTR\" mask=\"expr:LAW_RAISREQ_REP_NWTR &gt; '0' ? '###건': '0건'\"/><Cell col=\"3\" edittype=\"mask\" text=\"bind:LAW_RAISREQ_REP_YWTR\" mask=\"expr:LAW_RAISREQ_REP_YWTR &gt; '0' ? '###건': '0건'\"/><Cell col=\"4\" edittype=\"mask\" text=\"bind:LAW_RAISREQ_REP_WTR\" mask=\"expr:LAW_RAISREQ_REP_WTR &gt; '0' ? '###건': '0건'\"/><Cell col=\"5\" edittype=\"mask\" text=\"bind:LAW_RAISREQ_YWTR\" mask=\"expr:LAW_RAISREQ_YWTR &gt; '0' ? '###건': '0건'\"/><Cell col=\"6\" edittype=\"mask\" text=\"bind:LAW_RAISREQ_NWTR\" mask=\"expr:LAW_RAISREQ_NWTR &gt; '0' ? '###건': '0건'\"/><Cell col=\"7\" edittype=\"mask\" text=\"bind:LAW_RAISREQ_WTR\" mask=\"expr:LAW_RAISREQ_WTR &gt; '0' ? '###건': '0건'\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"통계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqRepWtrNnum)&quot;)+&quot; 건&quot;\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqRepWtrYnum)&quot;)+&quot; 건&quot;\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqRepWtrNum)&quot;)+&quot; 건&quot;\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqWtrYnum)&quot;)+&quot; 건&quot;\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqWtrNnum)&quot;)+&quot; 건&quot;\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;parseInt(raisreqDoLawsuit)&quot;)+&quot; 건&quot;\"/></Band></Format></Formats>");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "93.5%", "566", null, "21", "2%", null, this);
            obj.set_taborder("18");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 23, this.div_grid_top,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");

            	}
            );
            this.div_grid_top.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 84, this.DivTop,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.DivTop.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 412, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_border("1 solid #808080ff");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Work");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("소제기 의뢰 현황");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("RAISREQ_LIST_copy.xfdl", "Lib::common.xjs");
        this.registerScript("RAISREQ_LIST_copy.xfdl", function() {
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        this.RAISREQ_LIST_onload = function(obj,e)
        {
        	
        	this.btn_search_onclick();
        }

        this.name_reset_onclick = function(obj,e)
        {
        	this.DivTop.edit_ID.set_value("");
        }

        this.btn_clean_onclick = function(obj,e)
        {
        	this.DivTop.combo_clas_code.set_index("9");
        }

        this.btn_search_onclick = function(obj,e)
        {

        	
           
        	/*var oDatas =  {
        			  svcid : "search",
        			  sController : "userSelectVO.do",			 
        			  inds :["ds_search=ds_search"],
        			  outds :[
        				 "ds_user=output1"
        			     ],			     
        			  args  : [				
        			  ],
        			  bAsync : true,    // 비동기여부 (true : async  false: sync)
        			  nDataType : 0,   // (0: XML타입, 1: 이진 타입, 2: SSV 타입)
        			  bCompress :false,	 //			  
        			}; 
        	trace(" this.ds_search : " + this.ds_search.saveXML());*/
        	//rais=ds_raisreq wtr=ds_search_wtr
        	
        	var code = this.DivTop.combo_clas_code.value;
        	var ID = this.DivTop.edit_ID.value;
        	var wtr = this.DivTop.radio_wtr.value;
        	var date1 = this.DivTop.cal_raisreq_date01.value;
        	var date2 = this.DivTop.cal_raisreq_date02.value;

        	trace(code+"\n"+ID+"\n"+wtr+"\n"+date1+"\n"+date2);
        	
        	var strParam = "";
        	
        	strParam += "combo_Clas_Code=" + "\"" + code +"\"";
            strParam += " edt_ID=\"" + ID + "\"";   
            strParam += " radio_Wtr=" + "\"" + wtr + "\"";
            strParam += " cal_Req_Date1=" + "\"" + date1 + "\"";
            strParam += " cal_Req_Date2=" + "\"" + date2 + "\"";
        	
        	trace(this.ds_raisreq);
        	
        	this.gfn_transaction(
        		this,
        		"getRaisreqDetailList",
        		"/rais/getRaisreqDetailList.do",
        		"rais=ds_raisreq",
        		"ds_raisreq=ds_output",
        		"",
        		"fnCallback"
        	);
        }

        this.fnCallback = function(strId,errcode,errmsg){

            switch (strId)
            {
                case "ds_clas_code" :       
                    // trace(ds_clas_code.saveXML());
                    this.ds_clas_code.deleteRow(this.ds_clas_code.rowcount-1);
                    this.ds_clas_code.insertRow(0);
                    //this.ds_clas_code.setColumn(0,"codeName","전체");
                    this.ds_clas_code.setColumn(0,"codeNo","000");
                    this.ds_clas_code.setColumn(0,"useYn","Y");
                    this.Div00.combo_Clas_Code.index = 0;
                	break;
                case "getRaisreqDetailList" :
                   	//trace(ds_raisreq_stats.saveXML());
        			//데이터 조회 에러 발생시
        			if(errcode != "0"){	
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        					+ "소제기 현황 조회 에러내용: "+ errmsg);
        				return false;
        			
        			}else{
        				trace("this.fv_iStartPageNo = "+this.fv_iStartPageNo);
        				trace("this.fv_iUnitSelRowNo = "+this.fv_iUnitSelRowNo);
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				trace("iLastRow = "+iLastRow);
        				trace("rownum >= "+(iLastRow + this.fv_iStartSelRowNo));
        				trace("rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				this.ds_raisreq.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				trace("this.ds_raisreq.getRowCount() = "+this.ds_raisreq.getRowCount());

        				if(this.ds_raisreq.getRowCount() == 0){
        					alert("해당 검색조건의 결과가 없습니다.");
        					//this.ds_raisreq.filter("");
        					return;
        				}else{
        					this.fv_iServerRowCount = this.ds_raisreq.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("gray");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        				}
        			}	
        			break;
            }
        }   

        this.btn_search2_onclick = function(obj,e)
        {
        	var raisreq_list_frame = new ChildFrame();
            raisreq_list_frame.init("chf_popup1"
                              , 0
                              , 0
                              , 400
                              , 350
                              , null
                              , null
                              , "Form::RAISREQ_LIST_copy");

            raisreq_list_frame.set_dragmovetype("all");
            raisreq_list_frame.set_openalign("center middle");
        //    raisreq_list_frame.set_overlaycolor("RGBA(196,196,196,0.5)")
            
        /*    var objParam = {param1:this.edt_param1.value
                          , param2:this.edt_param2.value
                          , param3:this.ds_parent};		*/
                          
            raisreq_list_frame.showModal(this.getOwnerFrame()
                                  , null
                                  , this
                                  , "fn_popupCallback");
        }

        this.fn_popupCallback = function(strPopupID,strReturn)
        {
            if(strReturn == undefined){
                return;
            }

            if(strPopupID == "chf_popup1"){
                this.alert("Return Value: " + strReturn);
            }
        };

        this.btn_zip_onclick = function(obj,e)
        {
        	application.exit();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.RAISREQ_LIST_onload, this);
            this.DivTop.btn_searchByID.addEventHandler("onclick", this.btn_search2_onclick, this);
            this.DivTop.btn_IDReset.addEventHandler("onclick", this.name_reset_onclick, this);
            this.DivTop.btn_searchByCal.addEventHandler("onclick", this.btn_search_onclick, this);
            this.DivTop.btn_clean.addEventHandler("onclick", this.btn_clean_onclick, this);
            this.DivTop.radio_wtr.addEventHandler("onitemclick", this.radio_Wtr_onitemclick, this);
            this.DivTop.edit_ID.addEventHandler("oneditclick", this.DivTop_edit_ID_oneditclick, this);
            this.Div05.Grid0.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.Div05.Grid0.addEventHandler("onkeydown", this.Grid00_onkeydown, this);
            this.Div05.Grid0.addEventHandler("ontextchanged", this.Grid00_ontextchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_zip_onclick, this);

        };

        this.loadIncludeScript("RAISREQ_LIST_copy.xfdl");

       
    };
}
)();
