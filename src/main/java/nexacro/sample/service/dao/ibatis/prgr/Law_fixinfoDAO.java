package nexacro.sample.service.dao.ibatis.prgr;

import java.util.List;

import nexacro.sample.vo.prgr.Law_fixinfoVO;
import nexacro.sample.vo.prgr.Lawsuit_recVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("law_fixinfoDao")
public class Law_fixinfoDAO extends NexacroIbatisAbstractDAO {

	//공통코드호출
		
		// 소송관리번호 조회
		public List<Law_fixinfoVO> getLawsuitRecSelect(Law_fixinfoVO law_fixinfoVO) {
			return (List<Law_fixinfoVO>) list("prgr.Law_fixinfoDAO.getLawsuitRecSelect", law_fixinfoVO);
		}
		
		
		// 소송기일정보 및 기일상세정보 조회
		public List<Law_fixinfoVO> getLawFixinfoSelect(Law_fixinfoVO law_fixinfoVO) {
			return (List<Law_fixinfoVO>) list("prgr.Law_fixinfoDAO.getLawFixinfoSelect", law_fixinfoVO);
		}
		
		// 재판외화해 등록
		
		public void insertFixinfo(Law_fixinfoVO law_fixinfoVO) {
			insert("prgr.Law_fixinfoDAO.insertFixinfo", law_fixinfoVO);
		}
		
		
		// 재판외화해 수정
		public void updateFixinfo(Law_fixinfoVO law_fixinfoVO) {
			update("prgr.Law_fixinfoDAO.updateFixinfo", law_fixinfoVO);
		}
		
		
		// 재판외화해 삭제
		public void deleteFixinfo(Law_fixinfoVO law_fixinfoVO) {
			delete("prgr.Law_fixinfoDAO.deleteFixinfo", law_fixinfoVO);
		}
		
}
