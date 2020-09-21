package nexacro.sample.service.dao.ibatis.depo;

import java.util.List;

import nexacro.sample.vo.depo.DepoVO;
import nexacro.sample.vo.depo.SawonVO;

import org.springframework.stereotype.Repository;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

@Repository("depoDao")
public class DepoDAO extends NexacroIbatisAbstractDAO {

			
		//공탁관리번호 조회
		public List<DepoVO> selectDepotList(DepoVO depoVo){
			return (List<DepoVO>) list("depo.DepoDAO.selectDepotList",depoVo);
		}
		
		//공탁관리번호 조회
		public List<DepoVO> selectDepotView(DepoVO depoVo){
			return (List<DepoVO>) list("depo.DepoDAO.selectDepoView",depoVo);
		}
		
		//담당자 조회
		public List<DepoVO> selectChar(SawonVO sawonVO){
			return (List<DepoVO>) list("depo.DepoDAO.selectChar", sawonVO);
		}
		
		//공탁담당자 지정 없이 공탁관련정보만 저장
		public void insertDepoOnly(DepoVO depoVO){
			insert("depo.DepoDAO.insertDepoOnly", depoVO);
		}
		
		//공탁담당자 포함한 모든 정보 저장
		public void insertDepoAll(DepoVO depoVO){
			insert("depo.DepoDAO.insertDepoAll", depoVO);
		}
		
		//공탁관련정보 수정
		public void updateDepoList(DepoVO depoVO){
			update("depo.DepoDAO.updateDepoList", depoVO);
		}
		
		//공탁담당자 정보 수정
		public void updateMgr(DepoVO depoVO){
			update("depo.DepoDAO.updateMrg", depoVO);
		}
		
		//공탁정보 삭제(공탁담당자테이블은 on delete cascade 제약조건 추가하여 자동 삭제되게끔 수정함)
		public void deleteDepoList(DepoVO depoVO){
			delete("depo.DepoDAO.deleteDepoList", depoVO);
		}
		
}
