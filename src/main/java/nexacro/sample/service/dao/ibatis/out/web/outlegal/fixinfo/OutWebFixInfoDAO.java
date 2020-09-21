package nexacro.sample.service.dao.ibatis.out.web.outlegal.fixinfo;

import java.util.List;

import nexacro.sample.vo.out.web.outlegal.fixinfo.OutWebFixInfoVO;
import nexacro.sample.vo.out.web.outlegal.lawno.OutLawNoVO;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;


@Repository("outWebFixInfoDAO")
public class OutWebFixInfoDAO extends EgovAbstractDAO {

	@SuppressWarnings("rawtypes")
	/* 총 아이템 수 */
	public Object selectOutLawNoSearchPoppagingSet(OutLawNoVO outLawNoVO){
		return selectByPk("outwebSQL.selectOutLawNoSearchPoppagingSet", outLawNoVO);
	}
	
	/* 기일정보 컨텐츠 수 */
	public Object selectOutWebFixInfoPagingSet(OutWebFixInfoVO outWebFixInfoVO) {
		return selectByPk("outwebSQL.selectOutWebFixInfoPagingSet",outWebFixInfoVO);
	}
	
	/* 심급조회 */
	public List selectOutWebFixInfoInstAdmCode(OutLawNoVO outLawNoVO){
		return list("outwebSQL.selectOutWebFixInfoInstAdmCode", outLawNoVO);		
	}
	
	/* 소송번호와 심급코드로 기일 정보 조회 */
	public List selectOutWebFixInfoAll(OutWebFixInfoVO outWebFixInfoVO){
		return list("outwebSQL.selectOutWebFixInfoAll",outWebFixInfoVO);
	}
	/* 기일정보 목록 조회 */
	public List selectOutWebFixInfoListAll(OutWebFixInfoVO outWebFixInfoVO) {
		return list("outwebSQL.selectOutWebFixInfoListAll",outWebFixInfoVO);
	}

	/* 기일정보 상세 조회 */
	public List selectOutWebFixInfoListDetail(OutWebFixInfoVO outWebFixInfoVO) {
		return list("outwebSQL.selectOutWebFixInfoListDetail",outWebFixInfoVO);
	}
	
	/* 기일정보 상세 -- 입력 */
	public void insertOutWebFixInfoDetail(OutWebFixInfoVO outWebFixInfoVO){
		insert("outwebSQL.insertOutWebFixInfoDetail",outWebFixInfoVO);
	}
	
	/* 기일정보 상세 -- 수정 */
	public int updateOutWebFixInfoDetail(OutWebFixInfoVO outWebFixInfoVO){
		return update("outwebSQL.updateOutWebFixInfoDetail",outWebFixInfoVO);
	}
	
	/* 기일정보 상세 -- 삭제 */
	public int deleteOutWebFixInfoDetail(OutWebFixInfoVO outWebFixInfoVO){
		return delete("outwebSQL.deleteOutWebFixInfoDetail",outWebFixInfoVO);
	}
}
