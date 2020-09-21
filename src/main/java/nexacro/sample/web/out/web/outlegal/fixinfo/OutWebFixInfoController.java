package nexacro.sample.web.out.web.outlegal.fixinfo;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import nexacro.sample.service.out.web.outlegal.fixinfo.OutWebFixInfoService;
import nexacro.sample.vo.out.web.outlegal.fixinfo.OutWebFixInfoVO;
import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;
import nexacro.sample.web.out.web.json.ConvertJson;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OutWebFixInfoController {

	@Resource(name="outWebFixInfoService")
	private OutWebFixInfoService outWebFixInfoService;
	
	
	/* 소송번호 팝업 페이징 */
	@RequestMapping("selectOutLawNoSearchPoppagingSet.do")
	public void selectOutLawNoSearchPoppagingSet(HttpSession session, HttpServletResponse response, OutLawNoVO outLawNoVO) throws IOException{
		
		outLawNoVO.setInstAdmEntLyrId((String)session.getAttribute("outid"));
		
		int trow = (Integer)outWebFixInfoService.selectOutLawNoSearchPoppagingSet(outLawNoVO);
		
		System.out.println("==================> 아이템수 :"+trow);
		//System.out.println("==================> 현재 페이지: "+ outLegalAdUpVO.getPage());
		response.getWriter().print(trow+"");
		
	}// selectOutLawNoSearchPoppagingSet();
	
	/* 기일목록 페이징 */
	@RequestMapping("selectOutWebFixInfoPagingSet.do")
	public void selectOutWebFixInfoPagingSet(HttpSession session, HttpServletResponse response, OutWebFixInfoVO outWebFixInfoVO) throws IOException{
		
		outWebFixInfoVO.setInstAdmEntLyrId((String)session.getAttribute("outid"));
		
		int trow = (Integer)outWebFixInfoService.selectOutWebFixInfoPagingSet(outWebFixInfoVO);
		
		System.out.println("==================> 아이템수 :"+trow);
		//System.out.println("==================> 현재 페이지: "+ outLegalAdUpVO.getPage());
		response.getWriter().print(trow+"");
		
	}// selectOutWebFixInfoPagingSet.do
	
	@RequestMapping("selectOutWebFixInfoInstAdmCode.do")
	public void selectOutWebFixInfoInstAdmCode(HttpServletResponse response, OutLawNoVO outLawNoVO, ConvertJson convertJson) throws IOException{
		
		List list = outWebFixInfoService.selectOutWebFixInfoInstAdmCode(outLawNoVO);
		String jsonStr = "";
		convertJson.setList(list, outLawNoVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}//selectOutWebFixInfoInstAdmCode()
	
	/* 소송번호와 심급코드로 기일정보 조회 */
	@RequestMapping("selectOutWebFixInfoAll.do")
	public void selectOutWebFixInfoAll(HttpServletResponse response, OutWebFixInfoVO outWebFixInfoVO, ConvertJson convertJson) throws IOException{

		List list = outWebFixInfoService.selectOutWebFixInfoAll(outWebFixInfoVO);
		String jsonStr = "";
		convertJson.setList(list, outWebFixInfoVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}//selectOutWebFixInfoAll()
	
	/* 기일정보 목록 조회 */
	@RequestMapping("selectOutWebFixInfoListAll.do")
	public void selectOutWebFixInfoListAll(HttpServletResponse response, OutWebFixInfoVO outWebFixInfoVO, ConvertJson convertJson) throws IOException{

		List list = outWebFixInfoService.selectOutWebFixInfoListAll(outWebFixInfoVO);
		String jsonStr = "";
		convertJson.setList(list, outWebFixInfoVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}//selectOutWebFixInfoListAll()
	
	/* 기일정보 상세 조회 */
	@RequestMapping("selectOutWebFixInfoListDetail.do")
	public void selectOutWebFixInfoListDetail(HttpServletResponse response, OutWebFixInfoVO outWebFixInfoVO, ConvertJson convertJson) throws IOException{

		List list = outWebFixInfoService.selectOutWebFixInfoListDetail(outWebFixInfoVO);
		String jsonStr = "";
		convertJson.setList(list, outWebFixInfoVO);		
		jsonStr = convertJson.getJsonStr();
		response.getWriter().print(jsonStr);
		
	}//selectOutWebFixInfoListDetail()
	
	
	/* 기일정보 상세 입력, 수정, 삭제 */
	@RequestMapping("saveOutWebFixInfoDetail.do")
	public void saveOutWebFixInfoDetail(HttpServletResponse response, OutWebFixInfoVO outWebFixInfoVO) throws IOException{
	
		int result = outWebFixInfoService.saveOutWebFixInfoDetail(outWebFixInfoVO);
		response.getWriter().print(result+"");
	
	}//saveOutLegaladvRep()
	
}
