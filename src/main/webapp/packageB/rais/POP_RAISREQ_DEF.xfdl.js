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
                this.set_name("POP_RAISREQ_DEF");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,866,460);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_def", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"lawRaisreqNo\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefSeq\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefRegno\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefName\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefTel\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefPos\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefAddr\" type=\"STRING\" size=\"256\"/><Column id=\"lawRaisreqDefClamchg\" type=\"STRING\" size=\"256\"/><Column id=\"rownum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchCondition\" type=\"STRING\" size=\"256\"/><Column id=\"searchKeyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new ImageViewer("img_titlebg", "absolute", "8", "8px", null, "50", "8", null, this);
            obj.set_taborder("0");
            obj.set_text("피고 조회");
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
            obj.set_text("피고 목록");
            obj.style.set_color("black");
            obj.style.set_align("left top");
            obj.style.set_font("굴림,9,bold");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_person", "absolute", "8", "126", null, "266", "8", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_def");
            obj.set_autofittype("col");
            obj.set_scrollpixel("none");
            obj.set_nodatatext("피고가 조회되지 않았습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"132\"/><Column size=\"103\"/><Column size=\"84\"/><Column size=\"116\"/><Column size=\"123\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소제기 번호 \"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"등록번호\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"연락처\"/><Cell col=\"5\" text=\"우편번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"청구금액\"/></Band><Band id=\"body\"><Cell text=\"bind:lawRaisreqNo\"/><Cell col=\"1\" text=\"bind:lawRaisreqDefSeq\"/><Cell col=\"2\" text=\"bind:lawRaisreqDefRegno\"/><Cell col=\"3\" text=\"bind:lawRaisreqDefName\"/><Cell col=\"4\" text=\"bind:lawRaisreqDefTel\"/><Cell col=\"5\" text=\"bind:lawRaisreqDefPos\"/><Cell col=\"6\" text=\"bind:lawRaisreqDefAddr\"/><Cell col=\"7\" text=\"bind:lawRaisreqDefClamchg\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_def_com", "absolute", "84", "67px", "17.92%", "19", null, null, this);
            this.addChild(obj.name, obj);
            var cmb_def_com_innerdataset = new Dataset("cmb_def_com_innerdataset", this.cmb_def_com);
            cmb_def_com_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">no</Col><Col id=\"datacolumn\">소제기의뢰번호</Col></Row><Row><Col id=\"codecolumn\">def_seq</Col><Col id=\"datacolumn\">일련번호</Col></Row><Row><Col id=\"codecolumn\">def_regno</Col><Col id=\"datacolumn\">등록번호</Col></Row><Row><Col id=\"codecolumn\">def_name</Col><Col id=\"datacolumn\">피고명</Col></Row><Row><Col id=\"codecolumn\">def_tel</Col><Col id=\"datacolumn\">연락처</Col></Row><Row><Col id=\"codecolumn\">def_pos</Col><Col id=\"datacolumn\">우편번호</Col></Row><Row><Col id=\"codecolumn\">def_addr</Col><Col id=\"datacolumn\">주소</Col></Row><Row><Col id=\"codecolumn\">def_clamchg</Col><Col id=\"datacolumn\">청구금액</Col></Row><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(cmb_def_com_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("굴림,9");
            obj.set_text("전체");
            obj.set_index("8");

            obj = new Edit("edt_def_tx", "absolute", "35.21%", "67px", "35.83%", "19", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.style.setStyleValue("border", "disabled", "1 solid #a8a8a8ff");
            obj.style.setStyleValue("color", "disabled", "#505050ff");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_def_search", "absolute", "71.88%", "67px", "52", "21", null, null, this);
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

            obj = new Div("div_page", "absolute", "181", "401", "483", "18", null, null, this);
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
            obj = new Layout("default", "", 866, 460, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LAWSUIT_CHAR");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","cmb_def_com","value","ds_instance","instAdmCortCode");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POP_RAISREQ_DEF.xfdl", "Lib::common.xjs");
        this.registerScript("POP_RAISREQ_DEF.xfdl", function() {
        //include "Lib::common.xjs";

        var raiscode="";

        this.POP_RAISREQ_DEF_onload=function(obj,e)
        {
            this.edt_def_tx.setFocus();
            this.btn_def_search_onclick();
            
            this.btn_check.set_enable(false);
        }

        
        // 셀 클릭
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

        this.btn_def_search_onclick=function(obj,e)
        {
        	// 페이징 초기화 
        	this.fv_iStartPageNo    = 0;   // 전체 페이지 순서
        	this.fv_iUnitSelRowNo   = 100; // 한번 Server호출시 가져올 row갯수
        	this.fv_iStartSelRowNo  = 1;   // Server호출시 시작할 row no
        	this.fv_iMaxPageNum     = 10;  // 화면에 보여줄 최대 Page번호 갯수
        	this.fv_iServerRowCount = 0;   // 서버에서 넘어온 Row갯수(100건이 안될 수 있음)
        	
        	this.ds_search.clearData();
        	var rowIdx = this.ds_search.addRow();
            
            var searchCondition = this.cmb_def_com.value;
            var searchKeyword = this.edt_def_tx.value;
            
            this.ds_search.setColumn(0, "searchCondition", searchCondition);
        	this.ds_search.setColumn(0, "searchKeyword", searchKeyword);
        	
            this.getList();
        }

        
        // 검색 처리
        this.getList=function(){   
            //var strParam = "insaSabun='" + gfn_Trim(cmb_def_com.value) + "'";
            //    strParam += " insaName='" + gfn_Trim(edt_def_tx.value) + "'";
            
           
           
            //trace(strParam);       
           
            this.gfn_transaction(this,
                            "getRaisreqDefSearch",
                            "rais/getRaisreqDefSearch.do",
                            "ds_search=ds_search",
                            "ds_def=ds_output",
                            "",
                            "fnCallback");
        }

        this.fnCallback=function(svcid,errcd,errmsg)
        {
            switch(svcid)
            {
                case "getRaisreqDefSearch":        
                    //trace(ds_def.saveXML());
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
        				this.ds_def.filter("rownum >= "+(iLastRow + this.fv_iStartSelRowNo)+" && rownum <= "+(iLastRow + this.fv_iUnitSelRowNo));
        				trace("this.ds_def.getRowCount() = "+this.ds_def.getRowCount());

        				if(this.ds_def.getRowCount() == 0){
        					alert("해당 검색조건의 결과가 없습니다.");
        					this.ds_def.filter("");
        					return;
        				}else{
        					this.fv_iServerRowCount = this.ds_def.getRowCount();
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

        

        this.btn_close_onclick=function(obj,e)
        {
            this.close();
        }

        function edt_def_tx_onkeydown(obj,e)
        {
            if(e.keycode == 13){
                btn_def_search_onclick();
            }
        }

        this.cmb_def_com_onitemchanged=function(obj,e)
        {
            if(this.cmb_def_com.value == -1){
                this.edt_def_tx.set_value("");
                this.edt_def_tx.set_enable(false);
            }else{
                this.edt_def_tx.set_enable(true);
            }
        }

        /*    function grd_person_onheadclick(obj:Grid, e:GridClickEventInfo)
        {
            gfn_GridSort(grd_person,grd_lawsuit_no,nCell,10);
        }    */

        // Grid Row Select
        this.btn_check_onclick=function(obj,e)
        {
            /*	var id = ds_def.getColumn(ds_def.rowposition, "insaSabun");
            var name = ds_def.getColumn(ds_def.rowposition, "insaName");
          
            parent.mgrId.text = id;
            ds_def.addRow();

            close(id+"&"+name);	*/
           
            /*var v_RtnVal = new Array();	//배열생성

        	v_RtnVal[0] = this.ds_def.getColumn(this.ds_def.rowposition,  "insaSabun");
        	v_RtnVal[1] = this.ds_def.getColumn(this.ds_def.rowposition,  "insaName");	*/

        	var variant = [];
        	
        	trace("작업 중");
        	variant [0] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqNo");
        	variant [1] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefSeq");
        	variant [2] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefRegno");
        	variant [3] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefName");
        	variant [4] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefTel");
        	variant [5] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefPos");
        	variant [6] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefAddr");
        	variant [7] = this.ds_def.getColumn(this.ds_def.rowposition, "lawRaisreqDefClamchg");

        	var params = variant[0] +'/' + variant[1] + '/' + variant[2] + '/' + variant[3] +
        				'/' + variant[4] + '/' + variant[5] +'/' + variant[6] + '/' + variant[7];
        	trace(params);
        	
        	this.close(params);
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
        	this.ds_def.filter("");
        	trace("rownum >= " + iFirstNum);
        	trace("rownum < " + iLastNum);
        	this.ds_def.filter("rownum >= " + iFirstNum+" && rownum < " + iLastNum);
        }

        //-------------------------------------------------------------------------------------------------
        // 이전 버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Prev_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo - 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqDefSearch", 0, "succ");
        }

        //-------------------------------------------------------------------------------------------------
        // 다음버튼
        //-------------------------------------------------------------------------------------------------
        this.div_page_stc_Next_onclick = function(obj,e)
        {

        	this.fv_iStartPageNo = this.fv_iStartPageNo + 1;
        	// Transaction()코딩 할 부분
        	this.fnCallback("getRaisreqDefSearch", 0, "succ");
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
            this.addEventHandler("onload", this.POP_RAISREQ_DEF_onload, this);
            this.img_titlebg.addEventHandler("onclick", this.img_titlebg_onclick, this);
            this.sta_12.addEventHandler("onclick", this.sta_12_onclick, this);
            this.grd_person.addEventHandler("oncelldblclick", this.grd_person_oncelldblclick, this);
            this.grd_person.addEventHandler("oncellclick", this.grd_person_oncellclick, this);
            this.cmb_def_com.addEventHandler("onitemchanged", this.cmb_def_com_onitemchanged, this);
            this.edt_def_tx.addEventHandler("onkeydown", this.edt_mgr_tx_onkeydown, this);
            this.btn_def_search.addEventHandler("onclick", this.btn_def_search_onclick, this);
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

        this.loadIncludeScript("POP_RAISREQ_DEF.xfdl");

       
    };
}
)();
