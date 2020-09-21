package nexacro.sample.service.dao.ibatis.prgr;

import java.util.List;

import nexacro.sample.vo.prgr.Lawsuit_recVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("lawsuit_recDao")
public class Lawsuit_recDAO extends NexacroIbatisAbstractDAO {

	//공통코드호출
		
		// 기본 사항 조회 ( 심급 )
		public List<Lawsuit_recVO> getLawsuitRecSelect(Lawsuit_recVO lawsuit_recVO) {
			return (List<Lawsuit_recVO>) list("prgr.Lawsuit_recDAO.getLawsuitRecSelect", lawsuit_recVO);
		}
		
		// 기본 사항 조회 ( 원피고 )
		
		public List<Lawsuit_recVO> getLawsuitRecPladefSelect(Lawsuit_recVO lawsuit_recVO) {
			return (List<Lawsuit_recVO>) list("prgr.Lawsuit_recDAO.getLawsuitRecPladefSelect", lawsuit_recVO);
		}
		
		// 재판외화해 상세 조회
		
		public List<Lawsuit_recVO> getLawsuitRecDetailSelect(Lawsuit_recVO lawsuit_recVO) {
			return (List<Lawsuit_recVO>) list("prgr.Lawsuit_recDAO.getLawsuitRecDetailSelect", lawsuit_recVO);
		}
		
		
		
		// 재판외화해 등록
		
		public void insertReconcil(Lawsuit_recVO lawsuit_recVO) {
			insert("prgr.Lawsuit_recDAO.insertReconcil", lawsuit_recVO);
		}
		
		
		// 재판외화해 수정
		public void updateReconcil(Lawsuit_recVO Lawsuit_recVO) {
			update("prgr.Lawsuit_recDAO.updateReconcil", Lawsuit_recVO);
		}
		
		
		// 재판외화해 삭제
		
		public void deleteReconcil(Lawsuit_recVO Lawsuit_recVO) {
			delete("prgr.Lawsuit_recDAO.deleteReconcil", Lawsuit_recVO);
		}
		
		
}
