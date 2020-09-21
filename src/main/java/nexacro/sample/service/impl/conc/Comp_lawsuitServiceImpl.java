package nexacro.sample.service.impl.conc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import nexacro.sample.service.conc.Comp_lawsuitService;
import nexacro.sample.service.conc.Judg_reportService;
import nexacro.sample.service.dao.ibatis.conc.Comp_lawsuitDAO;
import nexacro.sample.service.dao.ibatis.conc.Judg_reportDAO;
import nexacro.sample.vo.conc.Comp_lawsuitVO;
import nexacro.sample.vo.conc.Judg_reportVO;

@Service("comp_lawsuitService")
public class Comp_lawsuitServiceImpl implements Comp_lawsuitService {

	@Resource(name = "Comp_lawsuitDAO")
	Comp_lawsuitDAO comp_lawsuitDAO;

	@Override
	public List<Comp_lawsuitVO> getlawsuitInfo(Comp_lawsuitVO vo) {
		System.out.println("여기니서");
		return comp_lawsuitDAO.getlawsuitInfo(vo);
	}

	@Override
	public List<Comp_lawsuitVO> getPladefInfo(Comp_lawsuitVO vo) {
		return comp_lawsuitDAO.getPladefInfo(vo);
	}

	@Override
	public boolean lawsuitUpdate(List<Comp_lawsuitVO> list) {
		boolean result = false;

		for (Comp_lawsuitVO vo : list) {
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) vo;

			if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				if (comp_lawsuitDAO.lawsuitUpdate1(vo) == 1
						&& comp_lawsuitDAO.lawsuitUpdate2(vo) == 1) {
					result = true;
				}
			}
		}

		return result;
	}

	@Override
	public boolean pladefUpdate(List<Comp_lawsuitVO> list) {

		boolean result = false;

		for (Comp_lawsuitVO vo : list) {

			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) vo;

			if (accessor.getRowType() == DataSet.ROW_TYPE_UPDATED) {
				if (comp_lawsuitDAO.pladefUpdate(vo) == 1) {
					result = true;
				}
			}
		}

		return result;
	}

	// 원피고 Count 조회
	@Override
	public List getPladeCountList(Comp_lawsuitVO vo) {
		return comp_lawsuitDAO.getPladeCountList(vo);
	}

	// 입력 수정 삭제 -- 원피고 종결
	@Override
	public String createPladef(List<Comp_lawsuitVO> pladef) throws Exception {
		String saveKey = null;

		for (int i = 0; i < pladef.size(); i++) {
			Comp_lawsuitVO createCopm = pladef.get(i);

			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) createCopm;

			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				comp_lawsuitDAO.insertPladef(createCopm);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				comp_lawsuitDAO.updatePladef(createCopm);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				comp_lawsuitDAO.deletePladef(createCopm);
			}
		}
		return saveKey;

	}
	
	@Override
	public String createConc(List<Comp_lawsuitVO> lawsuit) throws Exception {
		String saveKey = null;

		for (int i = 0; i < lawsuit.size(); i++) {
			Comp_lawsuitVO createCopm = lawsuit.get(i);

			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor) createCopm;

			if(accessor.getRowType() == DataSet.ROW_TYPE_INSERTED){
				comp_lawsuitDAO.insertConc(createCopm);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_UPDATED){
				comp_lawsuitDAO.updateConc(createCopm);
			}else if(accessor.getRowType() == DataSet.ROW_TYPE_DELETED){
				comp_lawsuitDAO.deleteConc(createCopm);
			}
		}
		return saveKey;

	}
	
	// 소송대장번호 & 원피고구분코드 피고사항목록 조회 (원피고일련번호당)
	@Override
	public List getPseqJudglist(Comp_lawsuitVO pladef) {
		return comp_lawsuitDAO.getPseqJudglist(pladef);
	}
	
	@Override
	public List getinstanceListAll(Map<String, Object> selectMap) throws Exception {
		// TODO Auto-generated method stub
		return comp_lawsuitDAO.getinstanceListAll(selectMap);
	}
}
