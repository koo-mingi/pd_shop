package nexacro.sample.web.out.web.outlegal.ad_up;



import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.ad_up.OutLegalAdUpService;
import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdCostVO;
import nexacro.sample.vo.out.web.outlegal.ad_up.OutLegalAdUpVO;
import nexacro.sample.web.out.web.json.ConvertJson;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller()
public class OutLegalAdUpController {

	@Resource(name="outLegalAdUpService")
	private OutLegalAdUpService outLegalAdUpService;
	
	
	/* 페이징 */
	@RequestMapping("selectpagingSet.do")
	public void selectpagingSet(HttpSession session, HttpServletResponse response, OutLegalAdUpVO outLegalAdUpVO) throws IOException{
		
		outLegalAdUpVO.setLegaladvOutReqLyrid((String)session.getAttribute("outid"));
		
		int trow = (Integer)outLegalAdUpService.selectTotalItem(outLegalAdUpVO);
		
		
		System.out.println("==================> 아이템수 :"+trow);
		//System.out.println("==================> 현재 페이지: "+ outLegalAdUpVO.getPage());
		response.getWriter().print(trow+"");
		
	}
	
	/* 외부법률자문 조회 */
	@RequestMapping("selectOutLegaladvLawAdvWeb.do")
	public void selectOutLegaladvLawAdvWeb(HttpSession session, ConvertJson convertJson, OutLegalAdUpVO outLegalAdUpVO, HttpServletResponse response) throws IOException{

		System.out.println("=======================> 번호: "+outLegalAdUpVO.getLegaladvLawAdvReqNo());
		if(outLegalAdUpVO.getLegaladvLawAdvReqNo().trim()==""||outLegalAdUpVO.getLegaladvLawAdvReqNo().trim()==null){
			outLegalAdUpVO.setLegaladvLawAdvReqNo("all");
		}
		System.out.println("=======================> 번호: "+outLegalAdUpVO.getLegaladvLawAdvReqNo());
		List list = outLegalAdUpService.selectOutLegaladvLawAdvWeb(outLegalAdUpVO);		

		String jsonStr = "";
		convertJson.setList(list, outLegalAdUpVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}// selectOutLegaladvLawAdvWeb()
	
	@RequestMapping("selectOutLegaladvLawAdvWebDetail.do")
	public void selectOutLegaladvLawAdvWebDetail(HttpSession session, ConvertJson convertJson, OutLegalAdUpVO outLegalAdUpVO, HttpServletResponse response) throws IOException{

		System.out.println("=======================> 번호: "+outLegalAdUpVO.getLegaladvLawAdvReqNo());
		List list = outLegalAdUpService.selectOutLegaladvLawAdvWebDetail(outLegalAdUpVO);		

		String jsonStr = "";
		convertJson.setList(list, outLegalAdUpVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}// selectOutLegaladvLawAdvWeb()
	
	
	/* 자문 update */
	@RequestMapping("saveOutLegaladvRep.do")
	public void saveOutLegaladvRep(HttpServletResponse response, OutLegalAdUpVO outLegalAdUpVO) throws IOException{
	
		int result = outLegalAdUpService.saveOutLegaladvLawAdvWeb(outLegalAdUpVO);
		response.getWriter().print(result+"");
	
	}//saveOutLegaladvRep()
	
	
	/* 자문비 조회 */
	@RequestMapping("selectOutLegaladvCostLawadvWeb.do")
	public void selectOutLegaladvCostLawadvWeb(HttpSession session, ConvertJson convertJson, HttpServletResponse response, OutLegalAdCostVO outLegalAdCostVO) throws IOException{
		
		List list = outLegalAdUpService.selectOutLegaladvCostWeb(outLegalAdCostVO);		

		String jsonStr = "";
		convertJson.setList(list, outLegalAdCostVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}//selectOutLegaladvCostLawadvWeb()
	
	
	/* 자문비 입력,수정,삭제 */
	@RequestMapping("saveOutLegaladvCostLawadvWeb.do")
	public void saveOutLegaladvCostLawadvWeb(HttpServletResponse response, OutLegalAdCostVO outLegalAdCostVO) throws IOException{
	
		int result = outLegalAdUpService.saveOutLegaladvCostWeb(outLegalAdCostVO);
		response.getWriter().print(result+"");
	
	}//insertOutLegaladvCostLawadvWeb()
	
}// class
