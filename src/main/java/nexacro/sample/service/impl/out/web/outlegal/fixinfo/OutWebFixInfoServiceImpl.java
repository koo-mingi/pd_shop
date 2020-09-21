package nexacro.sample.service.impl.out.web.outlegal.fixinfo;


import java.util.List;

import javax.annotation.Resource;

import nexacro.sample.service.dao.ibatis.out.web.outlegal.fixinfo.OutWebFixInfoDAO;
import nexacro.sample.service.out.web.outlegal.fixinfo.OutWebFixInfoService;
import nexacro.sample.vo.out.web.outlegal.fixinfo.OutWebFixInfoVO;
import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.AbstractServiceImpl;

@Service("outWebFixInfoService")
public class OutWebFixInfoServiceImpl extends AbstractServiceImpl implements OutWebFixInfoService {

	@Resource(name="outWebFixInfoDAO")
	private OutWebFixInfoDAO outWebFixInfoDAO;
	
	/* 소송번호 총 컨텐츠 수 */
	public Object selectOutLawNoSearchPoppagingSet(OutLawNoVO outLawNoVO) {
		return outWebFixInfoDAO.selectOutLawNoSearchPoppagingSet(outLawNoVO);
	}
	
	/* 기일정보 컨텐츠 수 */
	public Object selectOutWebFixInfoPagingSet(OutWebFixInfoVO outWebFixInfoVO) {
		// TODO Auto-generated method stub
		return outWebFixInfoDAO.selectOutWebFixInfoPagingSet(outWebFixInfoVO);
	}

	public List selectOutWebFixInfoInstAdmCode(OutLawNoVO outLawNoVO) {
		return outWebFixInfoDAO.selectOutWebFixInfoInstAdmCode(outLawNoVO);
	}

	public List selectOutWebFixInfoAll(OutWebFixInfoVO outWebFixInfoVO) {
		return outWebFixInfoDAO.selectOutWebFixInfoAll(outWebFixInfoVO);
	}

	/* 기일정보 목록 조회 */
	public List selectOutWebFixInfoListAll(OutWebFixInfoVO outWebFixInfoVO) {
		return outWebFixInfoDAO.selectOutWebFixInfoListAll(outWebFixInfoVO);
	}

	/* 기일정보 상세 조회 */
	public List selectOutWebFixInfoListDetail(OutWebFixInfoVO outWebFixInfoVO) {
		return outWebFixInfoDAO.selectOutWebFixInfoListDetail(outWebFixInfoVO);
	}

	/* 기일정보 상세 입력, 수정, 삭제 */
	public int saveOutWebFixInfoDetail(OutWebFixInfoVO outWebFixInfoVO) {
		int x = 2;
		String gbcode = outWebFixInfoVO.getGbcode();
		System.out.println("===================================>   "+gbcode);

		if(gbcode.equals("insert")){
			outWebFixInfoDAO.insertOutWebFixInfoDetail(outWebFixInfoVO);
			x=3;
		}else if(gbcode.equals("update")){
			x = outWebFixInfoDAO.updateOutWebFixInfoDetail(outWebFixInfoVO);
			x = x+10;
		}else if(gbcode.equals("delete")){
			x = outWebFixInfoDAO.deleteOutWebFixInfoDetail(outWebFixInfoVO);
		}else{
			x=404;
		}
		return x;
		
	}

	

}
