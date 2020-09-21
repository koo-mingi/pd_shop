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
                this.set_name("POP_CASENO_SEARCH");
                this.set_classname("POP_CASENO_SEARCH");
                this.set_titletext("사건번호입력");
                this._setFormPosition(0,0,412,112);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_year", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_case", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"caseType\" type=\"STRING\" size=\"256\"/><Column id=\"caseName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"caseType\">가합</Col><Col id=\"caseName\">가합 : 민사 제1심 합의</Col></Row><Row><Col id=\"caseType\">가단</Col><Col id=\"caseName\">가단 : 민사 제1심 단독 </Col></Row><Row><Col id=\"caseType\">가소</Col><Col id=\"caseName\">가소 : 민사소액사건 </Col></Row><Row><Col id=\"caseType\">나</Col><Col id=\"caseName\">나    : 민사항소 </Col></Row><Row><Col id=\"caseType\">다</Col><Col id=\"caseName\">다    : 민사상고 </Col></Row><Row><Col id=\"caseType\">라</Col><Col id=\"caseName\">라    : 민사항고 </Col></Row><Row><Col id=\"caseType\">마</Col><Col id=\"caseName\">마    : 민사재항고</Col></Row><Row><Col id=\"caseType\">그</Col><Col id=\"caseName\">그    : 민사특별항고</Col></Row><Row><Col id=\"caseType\">바</Col><Col id=\"caseName\">바    : 민사준항고</Col></Row><Row><Col id=\"caseType\">자</Col><Col id=\"caseName\">자    : 화해</Col></Row><Row><Col id=\"caseType\">차</Col><Col id=\"caseName\">차    : 독촉</Col></Row><Row><Col id=\"caseType\">카합</Col><Col id=\"caseName\">카합 : 민사신청사건중 가압류, 가처분 및 이에 대한 이의, 취소(집행취소는 제외)사건중 합의사건</Col></Row><Row><Col id=\"caseType\">카단</Col><Col id=\"caseName\">카단 : 민사신청사건중 가압류, 가처분 및 이에 대한 이의, 취소(집행취소는 제외)사건중 단독사건</Col></Row><Row><Col id=\"caseType\">카공</Col><Col id=\"caseName\">카공 : 공시최고사건</Col></Row><Row><Col id=\"caseType\">카담</Col><Col id=\"caseName\">카담 : 담보취소, 담보제공, 담보물변환, 담보권리행사최고사건</Col></Row><Row><Col id=\"caseType\">카기</Col><Col id=\"caseName\">카기 : 기타민사신청사건</Col></Row><Row><Col id=\"caseType\">타경</Col><Col id=\"caseName\">타경 : 부동산등 경매사건</Col></Row><Row><Col id=\"caseType\">타기</Col><Col id=\"caseName\">타기 : 기타집행사건</Col></Row><Row><Col id=\"caseType\">파</Col><Col id=\"caseName\">파    : 비송사건</Col></Row><Row><Col id=\"caseType\">회</Col><Col id=\"caseName\">회    : 회사정리사건</Col></Row><Row><Col id=\"caseType\">하</Col><Col id=\"caseName\">하    : 파산사건</Col></Row><Row><Col id=\"caseType\">거</Col><Col id=\"caseName\">거    : 화의사건</Col></Row><Row><Col id=\"caseType\">너</Col><Col id=\"caseName\">너    : 가사조정사건</Col></Row><Row><Col id=\"caseType\">러</Col><Col id=\"caseName\">러    : 민사공조사건</Col></Row><Row><Col id=\"caseType\">머</Col><Col id=\"caseName\">머    : 민사조정사건</Col></Row><Row><Col id=\"caseType\">호파</Col><Col id=\"caseName\">호파 : 호적비송사건(호적과태료사건포함)</Col></Row><Row><Col id=\"caseType\">과</Col><Col id=\"caseName\">과    : 과태료사건</Col></Row><Row><Col id=\"caseType\">고합</Col><Col id=\"caseName\">고합 : 형사제1심합의공판사건</Col></Row><Row><Col id=\"caseType\">감고</Col><Col id=\"caseName\">감고 : 감호제1심사건</Col></Row><Row><Col id=\"caseType\">고단</Col><Col id=\"caseName\">고단 : 형사 제1심 단독공판사건</Col></Row><Row><Col id=\"caseType\">고약</Col><Col id=\"caseName\">고약 : 약식사건</Col></Row><Row><Col id=\"caseType\">노</Col><Col id=\"caseName\">노    : 형사항소공판사건</Col></Row><Row><Col id=\"caseType\">감노</Col><Col id=\"caseName\">감노 : 감호항소사건</Col></Row><Row><Col id=\"caseType\">도</Col><Col id=\"caseName\">도    : 형사상고공판사건</Col></Row><Row><Col id=\"caseType\">감도</Col><Col id=\"caseName\">감도 : 감호상고사건</Col></Row><Row><Col id=\"caseType\">로</Col><Col id=\"caseName\">로    : 형사항고사건</Col></Row><Row><Col id=\"caseType\">감로</Col><Col id=\"caseName\">감로 : 감호항고사건</Col></Row><Row><Col id=\"caseType\">모</Col><Col id=\"caseName\">모    : 형사재항고사건</Col></Row><Row><Col id=\"caseType\">감모</Col><Col id=\"caseName\">감모 : 감호재항고사건</Col></Row><Row><Col id=\"caseType\">보</Col><Col id=\"caseName\">보    : 형사준항고</Col></Row><Row><Col id=\"caseType\">오</Col><Col id=\"caseName\">오    : 비상상고</Col></Row><Row><Col id=\"caseType\">감오</Col><Col id=\"caseName\">감오 : 감호비상상고</Col></Row><Row><Col id=\"caseType\">조</Col><Col id=\"caseName\">조    : 즉결심판사건</Col></Row><Row><Col id=\"caseType\">초</Col><Col id=\"caseName\">초    : 형사신청사건</Col></Row><Row><Col id=\"caseType\">감초</Col><Col id=\"caseName\">감초 : 감호신청사건</Col></Row><Row><Col id=\"caseType\">코</Col><Col id=\"caseName\">코    : 형사보상청구사건</Col></Row><Row><Col id=\"caseType\">감토</Col><Col id=\"caseName\">감토 : 감호공조사건</Col></Row><Row><Col id=\"caseType\">구</Col><Col id=\"caseName\">구    : 행정제1심사건</Col></Row><Row><Col id=\"caseType\">누</Col><Col id=\"caseName\">누    : 행정상고사건</Col></Row><Row><Col id=\"caseType\">두</Col><Col id=\"caseName\">두    : 행정상고사건</Col></Row><Row><Col id=\"caseType\">루</Col><Col id=\"caseName\">루    : 행정특별항고</Col></Row><Row><Col id=\"caseType\">부</Col><Col id=\"caseName\">부    : 행정준항고</Col></Row><Row><Col id=\"caseType\">아</Col><Col id=\"caseName\">아    : 행정신청</Col></Row><Row><Col id=\"caseType\">수</Col><Col id=\"caseName\">수    : 선거소송사건</Col></Row><Row><Col id=\"caseType\">수호</Col><Col id=\"caseName\">수호 : 선거항고(재항고, 준항고, 특별항고)사건</Col></Row><Row><Col id=\"caseType\">우</Col><Col id=\"caseName\">우    : 선거상고</Col></Row><Row><Col id=\"caseType\">주</Col><Col id=\"caseName\">주    : 선거신청</Col></Row><Row><Col id=\"caseType\">추</Col><Col id=\"caseName\">추    : 특별소송</Col></Row><Row><Col id=\"caseType\">쿠</Col><Col id=\"caseName\">쿠    : 특별신청</Col></Row><Row><Col id=\"caseType\">푸</Col><Col id=\"caseName\">푸    : 소년보호</Col></Row><Row><Col id=\"caseType\">허</Col><Col id=\"caseName\">허    : 특허제1심사건</Col></Row><Row><Col id=\"caseType\">흐</Col><Col id=\"caseName\">흐    : 특허재항고</Col></Row><Row><Col id=\"caseType\">히</Col><Col id=\"caseName\">히    : 특허특별(준)항고</Col></Row><Row><Col id=\"caseType\">카허</Col><Col id=\"caseName\">카허 : 특허신청사건</Col></Row><Row><Col id=\"caseType\">후</Col><Col id=\"caseName\">후    : 특허상고</Col></Row><Row><Col id=\"caseType\">느합</Col><Col id=\"caseName\">느합 : 가사비송합의</Col></Row><Row><Col id=\"caseType\">느단</Col><Col id=\"caseName\">느단 : 가사비송단독</Col></Row><Row><Col id=\"caseType\">드합</Col><Col id=\"caseName\">드합 : 가사제1심소송합의</Col></Row><Row><Col id=\"caseType\">드단</Col><Col id=\"caseName\">드단 : 가사제1심소송단독</Col></Row><Row><Col id=\"caseType\">르</Col><Col id=\"caseName\">르    : 가사항소</Col></Row><Row><Col id=\"caseType\">므</Col><Col id=\"caseName\">므    : 가사상고</Col></Row><Row><Col id=\"caseType\">브</Col><Col id=\"caseName\">브    : 가사항고</Col></Row><Row><Col id=\"caseType\">스</Col><Col id=\"caseName\">스    : 가사재항고</Col></Row><Row><Col id=\"caseType\">으</Col><Col id=\"caseName\">으    : 가사특별항고</Col></Row><Row><Col id=\"caseType\">즈</Col><Col id=\"caseName\">즈    : 가사신청</Col></Row><Row><Col id=\"caseType\">츠</Col><Col id=\"caseName\">츠    : 가사공조</Col></Row><Row><Col id=\"caseType\">크</Col><Col id=\"caseName\">크    : 소년보호항고</Col></Row><Row><Col id=\"caseType\">트</Col><Col id=\"caseName\">트    : 소년보호재항고</Col></Row><Row><Col id=\"caseType\">정</Col><Col id=\"caseName\">정    : 감치, 과태료재판사건</Col></Row><Row><Col id=\"caseType\">정로</Col><Col id=\"caseName\">정로 : 감치, 과태료항고</Col></Row><Row><Col id=\"caseType\">점모</Col><Col id=\"caseName\">정모 : 감치, 과태료 특별항고</Col></Row><Row><Col id=\"caseType\">선</Col><Col id=\"caseName\">선    : 선박소유자등의 책임제한사건</Col></Row><Row><Col id=\"caseType\">유</Col><Col id=\"caseName\">유    : 유류오염손해배상책임제한사건</Col></Row><Row><Col id=\"caseType\">헌가</Col><Col id=\"caseName\">헌가 : 위헌법률심판사건</Col></Row><Row><Col id=\"caseType\">헌나</Col><Col id=\"caseName\">헌나 : 탄핵심판사건</Col></Row><Row><Col id=\"caseType\">헌다</Col><Col id=\"caseName\">헌다 : 정당해산심판사건</Col></Row><Row><Col id=\"caseType\">헌라</Col><Col id=\"caseName\">헌라 : 권한쟁의심판사건</Col></Row><Row><Col id=\"caseType\">헌마</Col><Col id=\"caseName\">헌마 : 헌법재판소법 제68조 제1항에 의한 헌법소원심판사건</Col></Row><Row><Col id=\"caseType\">헌바</Col><Col id=\"caseName\">헌바 : 헌법재판소법 제68조 제2항에 의한 헌법소원심판사건</Col></Row><Row><Col id=\"caseType\">헌사</Col><Col id=\"caseName\">헌사 : 각종 신청사건(국선대리인선임신청, 가처분신청, 기피신청)</Col></Row><Row><Col id=\"caseType\">헌아</Col><Col id=\"caseName\">헌아 : 각종 특별사건(재심 등)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_00", "absolute", "14", "65", "385", "35", null, null, this);
            obj.set_taborder("13");
            obj.style.set_background("lavenderblush");
            obj.style.set_border("1 solid #a8a8a8ff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_titlebg", "absolute", "14", "7", null, "50", "8", null, this);
            obj.set_taborder("4");
            obj.set_text("   사건번호 입력");
            obj.style.set_background("#3366ffff");
            obj.style.set_color("white");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 dotum");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01", "absolute", "21", "70", null, "25", "20", null, this);
            obj.style.set_background("#f0f0f0ff");
            obj.style.set_border("1 solid #a8a8a8ff");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5.58%", "76", "13.11%", "12", null, null, this);
            obj.set_text("사건년도");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_caseType", "absolute", "181", "73", "55", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_case");
            obj.set_codecolumn("caseType");
            obj.set_datacolumn("caseName");
            obj.style.set_border("1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff");
            obj.style.set_font("9 dotum");

            obj = new Static("Static01", "absolute", "36.41%", "76", "6.31%", "12", null, null, this);
            obj.set_text("유형");
            obj.style.set_font("bold 9 dotum");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "59.22%", "76", "6.31%", "12", null, null, this);
            obj.set_text("번호");
            obj.style.set_font("bold 9 dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_case_input", "absolute", "81.07%", "71", "55", "23", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
            obj.style.set_color("#ffffffff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 dotum");
            obj.getSetter("class").set("btn_WFSA_Search");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_caseNo", "absolute", "273", "73", null, "19", "81", null, this);
            obj.set_taborder("11");
            obj.set_mask("##########");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_year", "absolute", "77", "73", "55", "19", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("12");
            obj.set_innerdataset("@ds_year");
            obj.set_codecolumn("year");
            obj.set_datacolumn("year");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 412, 112, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("POP_CASENO_SEARCH");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("사건번호입력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POP_CASENO_SEARCH.xfdl", "Lib::common.xjs");
        this.registerScript("POP_CASENO_SEARCH.xfdl", function() {
        //include "Lib::common.xjs";

        var strCaseType="";
        var strCaseNo="";

        /*
        this.cmb_caseType_onitemchanged=function(obj:Combo, e:ItemChangeEventInfo)
        {
        	strCaseType=e.postvalue;
        }
        */

        /*this.cmb_year_onitemchanged=function(obj:Combo, e:ItemChangeEventInfo)
        {
        	strCaseYear=e.postvalue;
        }

        this.edt_caseNo_ontextchange=function(obj:Edit,  e:TextChangeEventInfo)
        {
        	
        	var sEng = "[a-zA-Z]+";
        	var sNum = "[0-9]+";
        	var sSpe = "[^a-z0-9A-Z- ]+"; //Z 옆에 스페이스로 공백 한칸

        	var regEng = CreateRegExp(sEng, "ig");
        	var regNum = CreateRegExp(sNum, "g");
        	var regSpe = CreateRegExp(sSpe, "g");

        	var sEngTmp = regEng.Exec(strPostText);
        	var sNumTmp = regNum.Exec(strPostText);
        	var sSpeTmp = regSpe.Exec(strPostText);

        
        	if ( sEngTmp.length >0 || sSpeTmp.length > 0) {

        	edt_caseNo.Text = strPreText;
        	edt_caseNo.SetSel(edt_caseNo.text.length(), edt_caseNo.text.length());

        	}
        	
        }
        */
        this.btn_case_input_onclick=function(obj,e)
        {
        	if(this.cmb_year.text == ""){
        		alert("년도를 선택하세요!");
        		this.cmb_year.dropdown();
        		this.cmb_year.setFocus();
        		return false;
        	}else if(this.cmb_caseType.text==""){
        		alert("유형을 선택하세요!");
        		this.cmb_caseType.dropdown();
        		this.cmb_caseType.setFocus();
        		return false;
        	}else if(this.edt_caseNo.text==""){
        		alert("번호를 입력하세요!");
        		this.edt_caseNo.setFocus();
        		return false;
        	}else{
        		strCaseNo=this.edt_caseNo.text;
        		var Text=this.cmb_year.text+this.cmb_caseType.value+strCaseNo;
        		this.close(Text);
        	}	
        }

        // JKIM_191225
        this.POP_CASENO_SEARCH_onload = function(obj,e)
        {
        	// 년도 자동입력으로 수정함 
        	var nCurPos;
        	var nFromDate = "1990";
        	var objCurDate = new Date();
        	var nToDate = objCurDate.getYear();
        		
        	for (var i=nToDate; i > nFromDate; i--) 
        	{
        		nCurPos = this.ds_year.addRow();
        		this.ds_year.setColumn(nCurPos, "year", i);
        	}
        	
        	this.cmb_year.set_index(0);
        	//this.cmb_caseType.set_index(0);
        	
        	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.POP_CASENO_SEARCH_onload, this);
            this.cmb_caseType.addEventHandler("onitemchanged", this.cmb_caseType_onitemchanged, this);
            this.btn_case_input.addEventHandler("onclick", this.btn_case_input_onclick, this);
            this.cmb_year.addEventHandler("onitemchanged", this.cmb_year_onitemchanged, this);

        };

        this.loadIncludeScript("POP_CASENO_SEARCH.xfdl");

       
    };
}
)();
