//XJS=commComp.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        
        //화면 오픈시 기본 css셋팅
        this.gfnOnload = function (formObj)
        {
        	var winId = formObj.parent.parent.id;
        	var title = application.gds_openMenu.lookup("WIN_ID",winId,"TITLE");
        	
        	trace("gds_openMenu search current winId :: "+winId+" // current screen title :: "+title);
        	
        	//screen의 title div의 기본 셋팅(있을 경우)
        	if(formObj["DivTitle"] != null)
        	{
        		formObj["DivTitle"].set_left('14px');
        		formObj["DivTitle"].set_top('7px');
        		formObj["DivTitle"].resize('996px','50px');	
        		formObj["DivTitle"].style.set_color('#ffffffff');
        		formObj["DivTitle"].style.set_background('#3366ffff');
        		formObj["DivTitle"].set_text("  "+title);
        		formObj["DivTitle"].style.set_font('bold 12 Dotum');
        		formObj["DivTitle"].style.set_align('left');
        		
        		//form 내의 component 에서 찾음 (form에 직접 바인딩 된 것만...)
        		for(var i in formObj.components){
        			var targetObj = formObj.components[i];
        			var id = targetObj.id;
        			
        			//trace(i+" count, component id :: "+id);
        			
        			if(this.gfn_IsNull(id))	continue;
        			
        			//button object css 셋팅
        			if(id.indexOf('btn_')>-1)
        			{
        				//trace(i+" count, component "+id+" is button");
        				targetObj.resize('55px','23px');
        				targetObj.style.set_font('bold 9 Dotum');
        				targetObj.style.set_color('#ffffffff');
        				targetObj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
        				
        			}
        			
        			if(id.indexOf('img_view')>-1)
        			{
        				var hei = targetObj.getOffsetHeight();
        				//trace(i+" count, component "+id+" is background img_view ( height :: "+hei+")");
        				targetObj.set_left('14px');
        				targetObj.set_width('996px');
        				targetObj.set_height(hei+"px");
        				targetObj.style.set_background('lavenderblush');
        				targetObj.style.set_border('1 solid #a8a8a8ff');
        			}
        			
        			if(id.indexOf('subTitle_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background subTitle");
        				targetObj.set_left('14px');
        				targetObj.style.set_font('bold 9 굴림');
        				targetObj.style.set_align('left top');
        				targetObj.style.set_color('black');
        			}
        			
        			if(id.indexOf('sta_')>-1)
        			{
        				var text = targetObj.text;
        				if(this.gfn_IsNull(text))
        				{
        					targetObj.set_left('24px');
        					targetObj.set_width('979px');
        					targetObj.style.set_background('#f0f0f0ff');
        					targetObj.style.set_border('1 solid #a8a8a8ff ');
        					continue;
        				}
        				//trace(i+" count, component "+id+" is background static");
        				text = nexacro.trim(text);
        				targetObj.set_text(text);
        				
        				var left = targetObj.left;
        				if(left>14 && left<25)	targetObj.set_left("20px");	
        				
        				//메소드 기능 안먹음... 고정된 값만 나옴
        				//var textObj = nexacro.getTextSize(text, targetObj.style.font);
        				//trace("text :: "+text+" // textObj.nx :: "+textObj.nx+" // textObj.ny :: "+textObj.ny);
        				
        				if(text.length >= 8)	targetObj.resize('120px','25px');
        				else					targetObj.resize('105px','25px');
        							
        				targetObj.style.set_align('center middle');
        				targetObj.style.set_font('bold 9 Dotum');
        				targetObj.style.set_color('#133678ff');
        				targetObj.style.set_background('#f4edfaff');
        				targetObj.style.set_border('1 solid #c8c8c8ff');
        				
        			}
        			
        			if(id.indexOf('wSta_')>-1)
        			{
        				var text = targetObj.text;
        				var hei = targetObj.getOffsetHeight();
        				if(this.gfn_IsNull(text))
        				{
        					targetObj.set_left('24px');
        					targetObj.set_width('979px');
        					targetObj.style.set_background('#f0f0f0ff');
        					targetObj.style.set_border('1 solid #a8a8a8ff ');
        					continue;
        				}
        				//trace(i+" count, component "+id+" is background static large");
        				text = nexacro.trim(text);
        				targetObj.set_text(text);
        				
        				var left = targetObj.left;
        				if(left>14 && left<25)	targetObj.set_left("20px");	
        				
        				//메소드 기능 안먹음... 고정된 값만 나옴
        				//var textObj = nexacro.getTextSize(text, targetObj.style.font);
        				//trace("text :: "+text+" // textObj.nx :: "+textObj.nx+" // textObj.ny :: "+textObj.ny);
        				
        				if(text.length >= 7)	targetObj.resize('120px',hei+"px");
        				else					targetObj.resize('105px',hei+"px");
        							
        				targetObj.style.set_align('center middle');
        				targetObj.style.set_font('bold 9 Dotum');
        				targetObj.style.set_color('#133678ff');
        				targetObj.style.set_background('#f4edfaff');
        				targetObj.style.set_border('1 solid #c8c8c8ff');
        			}
        			
        			if(id.indexOf('cb_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background combo");
        				targetObj.resize('130px','19px');
        				targetObj.style.set_border('1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff');
        			}
        			else if(id.indexOf('cal_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background calendar");
        				var left = targetObj.getOffsetLeft();
        				targetObj.set_left(left+'px');
        				targetObj.resize('130px','19px');
        				targetObj.style.set_border('1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff');
        			}
        			else if(id.indexOf('edt_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background edit");
        				if(id.indexOf('_nosize')<0) targetObj.resize('130px','19px');
        				targetObj.style.set_border('1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff');
        			}
        			
        			if(id.indexOf('star_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background asteric");
        				targetObj.resize('37px','23px');
        				targetObj.style.set_font('bold 14 dotum');
        				targetObj.style.set_color('#ff0000ff');
        			}	
        				
        			if(id.indexOf('grd_')>-1)
        			{
        				//trace(i+" count, component "+id+" is grid");
        				var top = targetObj.getOffsetTop();
        				var left = targetObj.getOffsetLeft();
        				var height;
        				var width;
        				
        				/*
        				for(var j in formObj.components){
        					var targetObjSnd = formObj.components[j];
        					var id = targetObjSnd.id;
        					
        					if(targetObjSnd.top == null)	continue;
        					
        					var gapV = Math.abs(targetObjSnd.getOffsetTop()  - top);
        					var gapH = Math.abs(targetObjSnd.getOffsetLeft() - left);
        					
        					if(	id.indexOf('img_view')>-1
        					&&	gapV<20
        					&&	gapH<20)
        					{
        						top 	= targetObjSnd.getOffsetTop() + 6;
        						left 	= targetObjSnd.getOffsetLeft() + 5;
        						height	= targetObjSnd.getOffsetHeight() -10;
        						width	= targetObjSnd.getOffsetWidth() -12;
        						break;
        					}
        				}
        				targetObj.set_top(top+'px');
        				targetObj.set_height(height+'px');
        				targetObj.set_left(left+'px');
        				targetObj.set_width(width+'px');
        				*/
        				
        				targetObj.set_top(top+'px');
        				targetObj.set_height(targetObj.getOffsetHeight()+'px');
        				targetObj.set_left('14px');
        				targetObj.set_width('996px');
        			}
        		}
        	}	
        	else if(formObj["popupTitle"] != null)
        	{
        		formObj["popupTitle"].style.set_color('#ffffffff');
        		formObj["popupTitle"].style.set_background('#3366ffff');
        		formObj["popupTitle"].style.set_font('bold 12 Dotum');
        		formObj["popupTitle"].style.set_align('left');
        		
        		//popup form 내의 component 에서 찾음 (form에 직접 바인딩 된 것만...)
        		for(var i in formObj.components){
        			var targetObj = formObj.components[i];
        			var id = targetObj.id;
        			
        			//trace(i+" count, component id :: "+id);
        			
        			if(this.gfn_IsNull(id))	continue;
        			
        			//button object css 셋팅
        			if(id.indexOf('btn_')>-1)
        			{
        				//trace(i+" count, component "+id+" is button");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px','23px');
        				
        				targetObj.style.set_font('bold 9 Dotum');
        				targetObj.style.set_color('#ffffffff');
        				targetObj.style.set_background("URL('img::btn_WFSA_Search_N.png') stretch 9,9 left top");
        			}
        			
        			if(id.indexOf('img_view')>-1)
        			{
        				var hei = targetObj.getOffsetHeight();
        				//trace(i+" count, component "+id+" is background img_view ( height :: "+hei+")");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px',hei+'px');
        				
        				targetObj.style.set_background('lavenderblush');
        				targetObj.style.set_border('1 solid #a8a8a8ff');
        			}
        			
        			if(id.indexOf('subTitle_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background subTitle");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px',hei+'px');
        				
        				targetObj.style.set_font('bold 9 굴림');
        				targetObj.style.set_align('left top');
        				targetObj.style.set_color('black');
        			}
        			
        			if(id.indexOf('sta_')>-1)
        			{
        				if(this.gfn_IsNull(targetObj.text))	continue;
        				//trace(i+" count, component "+id+" is background static");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px','25px');
        				
        				targetObj.style.set_font('bold 9 Dotum');
        				targetObj.style.set_color('#133678ff');
        				targetObj.style.set_background('#f4edfaff');
        				targetObj.style.set_border('1 solid #c8c8c8ff');
        			}
        			
        			if(id.indexOf('wSta_')>-1)
        			{
        				if(this.gfn_IsNull(targetObj.text))	continue;
        				//trace(i+" count, component "+id+" is background static large");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px',hei+'px');
        				
        				targetObj.style.set_font('bold 9 Dotum');
        				targetObj.style.set_color('#133678ff');
        				targetObj.style.set_background('#f4edfaff');
        				targetObj.style.set_border('1 solid #c8c8c8ff');
        			}
        			
        			if(id.indexOf('cb_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background combo");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px','19px');
        				
        				targetObj.style.set_border('1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff');
        			}
        			else if(id.indexOf('cal_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background calendar");
        				var wid = targetObj.getOffsetWidth();
        				var hei = targetObj.getOffsetHeight();
        				targetObj.resize(wid+'px','19px');
        				
        				targetObj.style.set_border('1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff');
        			}
        			else if(id.indexOf('edt_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background edit");
        				if(id.indexOf('_nosize')<0){
        					var wid = targetObj.getOffsetWidth();
        					var hei = targetObj.getOffsetHeight();
        					targetObj.resize(wid+'px','19px');
        				}
        				
        				targetObj.style.set_border('1 solid #a6a6a9ff,1 solid #d5d5d5ff,1 solid #d5d5d5ff,1 solid #a6a6a9ff');
        			}
        			
        			if(id.indexOf('star_')>-1)
        			{
        				//trace(i+" count, component "+id+" is background asteric");
        				targetObj.resize('37px','23px');
        				targetObj.style.set_font('bold 14 dotum');
        				targetObj.style.set_color('#ff0000ff');
        			}		
        		}
        	}	
        };

        
        this.gfnClose = function ()
        {
        	var winId = Iject.$["workFrame"].getActiveFrame().name;
            Iject.$["workFrame"].frames[winId].destroy();
        };

        this.gfnNVL = function (value,falRtn)
        {
        	var rtnVal;
        	
        	if(falRtn==null || falRtn==undefined)	falRtn='';
        	if(this.gfn_IsNull(value))	return '';
        	
        	rtnVal = this.gfn_IsNull(value) ? falRtn : value;
        	return rtnVal;
        }

        this.gfnGridGetClickedBindingText = function (obj,cell)
        {
        	var name = obj.getCellProperty('body',cell,'text');
        	name = name.replace("bind:",'');
        	return name;
        };

        //추가
        //dataset의 data변환 여부 확인
        //공통 dataset change mewthod 못찾음
        this.gfnDsChangeCheck = function (dataset)
        {	
        	var dsChangeCheck = false;
        	
        	if (dataset.getDeletedRowCount() > 0)	dsChangeCheck=true;
        	
        	for(var j=0; j<dataset.rowcount; j++){
        		if (dataset.getRowType(j) != Dataset.ROWTYPE_NORMAL)
        		{
        			dsChangeCheck=true;
        			break;
        		}
        	}
        	
        	return dsChangeCheck;
        };

        //메뉴 열기
        this.gfnOpenMenu = function(url,aArgs)
        {
        	url = url + ".xfdl";
        	var mRow = application.gds_menu.findRow('PAGE_URL',url);
        	var sMenuid = application.gds_menu.getColumn(mRow, "MENU_ID");
        	
        	Iject.Mdi.newMdi(sMenuid,  mRow, aArgs);
        };

        //메뉴열 때 같이 보낸 JSON return
        this.gfnGetArgument = function()
        {
        	//trace("screen id :: "+this.getOwnerFrame().id);
        	//trace("menu name :: "+this.getOwnerFrame().arguments["menuNm"]);
        	//trace("typeof arg :: "+ typeof this.getOwnerFrame().arguments["aArgs"]);
        	//trace("JSON type to String :: "+JSON.stringify(this.getOwnerFrame().arguments["aArgs"]));
        	
        	return this.getOwnerFrame().arguments["aArgs"];
        };

        
        var CONST_ASC_MARK="▲";
        var CONST_DESC_MARK="▼";
        var CONST_MARK="";

        this.gfnGridHeadSort = function (obj,nCell,bMultiple)
        {
        	var i;
        	
        	//멀티정렬여부를 체크하기위한 변수
            //if(this.gfn_IsNull(bMultiple)) bMultiple = false;
            bMultiple = false;	//멀티 정렬은 사용 않함
            
            //정렬리스트에 포함된 Cell인지 확인하기 위한 변수
            var bChk = false;
            
            //Cell Index를 확인하기 위한 변수
            var nCellIdx;
            
            //헤더 텍스트 변수
            var sHeadText;
            
            //데이터 텍스트 변수
            var sCellText;
            
            //데이터셋 Column Id 변수
            var sColumnId;
            
            //정렬 타입 변수
            var sSortType;
            
            //정렬 리스트 Array 변수
            var arrSortList = new Array();
            
            //정렬 Cell Index/타입을 확인하기 위한 Array 변수
            var arrSortData;
            
            //최종 정렬리스트를 저장하기 위한 Array 변수
            var arrSortList_new = new Array();
            
            //Keystring을 설정하기 위한 변수
            var sSortString = "";
            
            //현재 그리드에 Bind된 Dataset
            var objDs = obj.getBindDataset();
            
            
            //헤더 Text 가져오기
            sHeadText = obj.getCellProperty("head", nCell, "text");
            
            //오름차순이 설정되어있을 경우 내림차순으로 변경
            if(sHeadText.toString().indexOf(CONST_ASC_MARK)>-1)        sSortType = CONST_DESC_MARK;
            
            //내림차순으로 설정되어있을 경우 정렬해제로 변경
            else if(sHeadText.toString().indexOf(CONST_DESC_MARK)>-1)  sSortType = CONST_MARK;
            
            //정렬이 되어있지 않은 경우 오름차순으로 변경
            else                                                      sSortType = CONST_ASC_MARK;
            
            //멀티정렬이 아닐 경우
            if(bMultiple==false)
            {
                //현재 선택된 Cell에 대한 정렬정보만 설정
                arrSortList[0] = nCell+"|"+sSortType;
            }
            else
            {
                //이전 정렬리스트 정보 가져오기
                arrSortList = obj.arrSort;
                
                //정렬리스트 갯수만큼 For
                for(i=0;i<arrSortList.length;i++)
                {
                    //정렬리스트에서 Cell Index/타입을 추출
                    arrSortData = arrSortList[i].split("|");
                    
                    //클릭된 Cell이 정렬리스트에 있을 경우
                    if(arrSortData[0]==nCell)
                    {
                        //체크 변수에 값 true로 설정
                        bChk = true;
                        
                        //기존 정렬리스트의 데이터 변경
                        arrSortList[i] = arrSortData[0]+"|"+sSortType;
                    }
                }
                
                //신규 정렬 정보일 경우
                if(bChk==false)
                {
                    //기존 정렬리스트에 데이터 추가
                    arrSortList[arrSortList.length] = nCell+"|"+sSortType;
                }
            }
            
            //헤더에 설정된 정렬정보 초기화
            for(i=0;i<obj.getCellCount("head");i++)
            {
                //헤더 Text 가져오기
                sHeadText = obj.getCellProperty("head", i, "text");
                
                //오름차순, 내림차순 마커 지우기
                obj.setCellProperty("head", i, "text", sHeadText.replace(CONST_ASC_MARK, "").replace(CONST_DESC_MARK, ""));
            }
            
            //정렬리스트 만큼 For
            for(i=0;i<arrSortList.length;i++)
            {
                //정렬리스트에서 Cell Index/타입 추출
                arrSortData = arrSortList[i].split("|");
                
                //Cell Index 변수에 설정
                nCellIdx = arrSortData[0];
                
                //정렬 타입 변수에 설정
                sSortType = arrSortData[1];
                
                //해더 Text에 정렬마커 추가
                sHeadText = obj.getCellProperty("head", nCellIdx, "text")+sSortType;
                obj.setCellProperty("head", nCellIdx, "text", sHeadText);
                        
                //데이터 Cell Text 가져오기
                sCellText = obj.getCellProperty("body", nCellIdx, "text");
                
                //Bind된 컬럼일 경우 정렬 정보 만들기
                if(sCellText.toString().indexOf("bind:")>-1)
                {
                    //데이터 Cell Text에서 Dataset Column Id 추출
                    sColumnId = sCellText.toString().replace("bind:", "");
                    
                    //정렬타입에 맞게 Keystring 변수에 추가
                    if(sSortType==CONST_ASC_MARK)        sSortString += "-"+sColumnId;
                    else if(sSortType==CONST_DESC_MARK)  sSortString += "+"+sColumnId;
                    
                    //변경된 정렬리스트 정보 만들기
                    arrSortList_new[arrSortList_new.length] = nCellIdx+"|"+sSortType;
                }
            }
            
            //현재 그리드에 변경된 정렬리스트 UserProperty 설정
            obj.arrSort = arrSortList_new;
            
            //keystring 변수에 값이 있을 경우 keystring 설정
            if(sSortString.length>0)
            {
                objDs.set_keystring("S:"+sSortString);
            }
            //keystring 변수에 값이 없을 경우 keystring 설정 해제
            else
            {
                objDs.set_keystring(null);
            }

        }

        
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
