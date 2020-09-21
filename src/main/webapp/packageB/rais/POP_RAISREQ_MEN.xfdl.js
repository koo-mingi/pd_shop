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
                this.set_name("LAWSUIT_CHAR");
                this.set_classname("LAWSUIT_CHAR");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,480,455);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mgr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"insaSabun\" type=\"STRING\" size=\"256\"/><Column id=\"insaName\" type=\"STRING\" size=\"256\"/><Column id=\"insaEmail\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dept", this);
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

            obj = new Dataset("ds_mgrno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">전체</Col><Col id=\"id\">-1</Col></Row><Row><Col id=\"value\">사번</Col><Col id=\"id\">0</Col></Row><Row><Col id=\"value\">이름</Col><Col id=\"id\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg", "absolute", "8", "8px", null, "50", "8", null, this);
            obj.set_taborder("0");
            obj.set_text("소제기 의뢰자 조회");
            obj.style.set_background("cornflowerblue");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("굴림,12,bold");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "8", "63px", null, "29", "8", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_12", "absolute", "8", "109", "170", "13", null, null, this);
            obj.set_text("소제기 의뢰자 (소송담당자) 목록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_person", "absolute", "8", "126", null, "266", "8", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_mgr");
            obj.set_autofittype("col");
            obj.set_scrollpixel("none");
            obj.set_nodatatext("의뢰자가 조회되지 않았습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"121\"/><Column size=\"123\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"이메일\"/></Band><Band id=\"body\"><Cell expr=\"bind:rownum\"/><Cell col=\"1\" text=\"bind:insaSabun\"/><Cell col=\"2\" text=\"bind:insaName\"/><Cell col=\"3\" text=\"bind:insaEmail\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_mgr_com", "absolute", "84", "67px", "17.92%", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_mgrno");
            obj.set_codecolumn("id");
            obj.set_datacolumn("value");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_text("전체");
            obj.set_index("0");

            obj = new Edit("edt_mgr_tx", "absolute", "35.21%", "67px", "35.83%", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mgr_search", "absolute", "71.88%", "67px", "52", "21", null, null, this);
            obj.set_taborder("3");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #6168ffff 0,100 #131efeff");
            obj.set_text("검색");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, null, "52", "21", "8", "10", this);
            obj.set_taborder("1");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_border("0 none #999999ff");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #6168ffff 0,100 #131efeff");
            obj.set_text("닫기");
            obj.getSetter("class").set("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_check", "absolute", null, null, "52", "21", "63", "10", this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Dotum");
            obj.style.set_gradation("linear 0,0 #6168ffff 0,100 #131efeff");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "-1", "401", "483", "18", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("stc_Prev", "absolute", "24", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("13");
            obj.set_text("이전");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_Next", "absolute", "432", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("14");
            obj.set_text("다음");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No0", "absolute", "72", "-3", "29", "27", null, null, this.div_page);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No1", "absolute", "109", "-3", "29", "27", null, null, this.div_page);
            obj.set_taborder("16");
            obj.set_text("2");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No2", "absolute", "149", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No3", "absolute", "184", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("18");
            obj.set_text("4");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No4", "absolute", "216", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No5", "absolute", "250", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("20");
            obj.set_text("6");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No6", "absolute", "287", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("21");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No7", "absolute", "322", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No8", "absolute", "352", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);
            obj = new Static("stc_No9", "absolute", "392", "-4", "29", "27", null, null, this.div_page);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_color("black");
            obj.style.set_align("center");
            obj.style.set_cursor("hand");
            this.div_page.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 483, 18, this.div_page,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div00");

            	}
            );
            this.div_page.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 480, 455, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_CHAR");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","cmb_mgr_com","value","ds_instance","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POP_RAISREQ_MEN.xfdl", "Lib::common.xjs");
        this.registerScript("POP_RAISREQ_MEN.xfdl", function() {
        //include "Lib::common.xjs";

        this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)

        var raiscode="";

        this.LAWSUIT_CHAR_onload=function(obj,e)
        {
            this.edt_mgr_tx.setFocus();
            this.btn_check.set_enable(false);
            this.getList();
        }

        //셀 클릭
        this.grd_person_oncellclick = function(obj,e)
        {
        	this.btn_check.set_enable(true);
        }

        // 셀 더블클릭
        this.grd_person_oncelldblclick=function(obj,e)
        {
            // close(grd_person.getCellValue(e.row,0)+grd_person.getCellValue(e.row,1));
            this.btn_check.set_enable(true);
        	this.btn_check_onclick();
        }

        this.getList=function(){
           
            var strSvcid="getRaisMenList";
            var strController="rais/getRaisMenList.do";
            var strParam="";
           
            //var strParam = "insaSabun='" + gfn_Trim(cmb_mgr_com.value) + "'";
            //    strParam += " insaName='" + gfn_Trim(edt_mgr_tx.value) + "'";
            if(this.cmb_mgr_com.value < 0){      
                strParam = "insaName=" + "\""+this.edt_mgr_tx.text+"\"";
            }else if(this.cmb_mgr_com.value == "0"){
                strParam = "insaSabun=" + "\""+this.edt_mgr_tx.text+"\"";
            }else if(this.cmb_mgr_com.value == "1"){
                strParam = "insaName=" + "\""+this.edt_mgr_tx.text+"\"";
            }   
           
            //trace(strParam);       
           
            this.gfn_transaction(this,
                            strSvcid,
                            strController,
                            "",
                            "ds_mgr=ds_output",
                            strParam,
                            "fnCallBack");
        }

        this.fnCallBack=function(svcid,errcd,errmsg)
        {
            switch(svcid)
            {
                case "getRaisMenList":        
                    //trace(ds_mgr.saveXML());
                    //데이터 조회 에러 발생시
                    if(errcd != "0"){   
        				alert("데이터가 정상적으로 조회되지 않았습니다.\n"
        					+ "소송관리조회 에러내용: "+ errmsg);
        				return false;
                    }
                    else{
                        trace("this.fv_iStartPageNo = "+this.fv_iStartPageNo);
        				trace("this.fv_iUnitSelRowNo = "+this.fv_iUnitSelRowNo);
        				var iLastRow = this.fv_iStartPageNo * this.fv_iUnitSelRowNo;
        				trace("iLastRow = "+iLastRow);
        				trace("rownum >= "+(iLastRow + this.fv_iStartSelRowNo));
        				trace("rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				this.ds_mgr.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				trace("this.ds_mgr.getRowCount() = "+this.ds_mgr.getRowCount());

        				if(this.ds_mgr.getRowCount() == 0){
        					alert("해당 검색조건의 결과가 없습니다.");
        					this.ds_mgr.filter("");
        					return;
        				}else{
        					this.fv_iServerRowCount = this.ds_mgr.getRowCount();
        					this.fn_SetStyle();
        					this.fn_SetPageNo();
        					this.div_page.stc_No0.style.set_color("gray");
        					this.div_page_stc_No_onclick(this.div_page.stc_No0,"");
        					
        					trace(this.fv_iStartPageNo +" : "+this.fv_iServerRowCount);
        				}
                    }
                    break;
            }
        }

        this.btn_mgr_search_onclick=function(obj,e)
        {
            this.getList();
        }

        this.btn_close_onclick=function(obj,e)
        {
            this.close();
        }

        /*function edt_mgr_tx_onkeydown(obj:Edit, e:KeyEventInfo)
        {
            if(e.keycode == 13){
                btn_mgr_search_onclick();
            }
        }*/

        this.cmb_mgr_com_onitemchanged=function(obj,e)
        {
            if(this.cmb_mgr_com.value == -1){
                this.edt_mgr_tx.set_value("");
                this.edt_mgr_tx.set_enable(false);
            }else{
                this.edt_mgr_tx.set_enable(true);
            }
        }

        /*    function grd_person_onheadclick(obj:Grid, e:GridClickEventInfo)
        {
            gfn_GridSort(grd_person,grd_lawsuit_no,nCell,10);
        }    */

        // Grid Row Select
        this.btn_check_onclick=function(obj,e)
        {
            /*	var id = ds_mgr.getColumn(ds_mgr.rowposition, "insaSabun");
            var name = ds_mgr.getColumn(ds_mgr.rowposition, "insaName");
          
            parent.mgrId.text = id;
            ds_mgr.addRow();

            close(id+"&"+name);	*/
           
            /*var v_RtnVal = new Array();	//배열생성

        	v_RtnVal[0] = this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaSabun");
        	v_RtnVal[1] = this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaName");	*/
        	v_RtnVal = this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaSabun");
        	v_RtnVal +="&"+this.ds_mgr.getColumn(this.ds_mgr.rowposition,  "insaName");
        	
        	this.close(v_RtnVal);
        }

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
        	this.ds_mgr.filter("");
        	trace("rownum >= " + iFirstNum);
        	trace("rownum < " + iLastNum);
        	this.ds_mgr.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqList", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqList", 0, "succ");
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
            this.addEventHandler("onload", this.LAWSUIT_CHAR_onload, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.sta_12.addEventHandler("onclick", this.sta_12_onclick, this);
            this.grd_person.addEventHandler("oncelldblclick", this.grd_person_oncelldblclick, this);
            this.grd_person.addEventHandler("oncellclick", this.grd_person_oncellclick, this);
            this.cmb_mgr_com.addEventHandler("onitemchanged", this.cmb_mgr_com_onitemchanged, this);
            this.edt_mgr_tx.addEventHandler("onkeydown", this.edt_mgr_tx_onkeydown, this);
            this.btn_mgr_search.addEventHandler("onclick", this.btn_mgr_search_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_check.addEventHandler("onclick", this.btn_check_onclick, this);
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

        this.loadIncludeScript("POP_RAISREQ_MEN.xfdl");

       
    };
}
)();
