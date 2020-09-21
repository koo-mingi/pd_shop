package nexacro.sample.service.impl.conc;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro.spring.data.DataSetRowTypeAccessor;
import com.nexacro.xapi.data.DataSet;

import nexacro.sample.service.conc.Judg_reportService;
import nexacro.sample.service.dao.ibatis.conc.Judg_reportDAO;
import nexacro.sample.vo.conc.Judg_reportVO;

@Service("judgReportService")
public class Judg_reportServiceImpl implements Judg_reportService {

	@Resource(name="judgReportDAO")
	Judg_reportDAO judgReportDAO;
	
	@Override
	public List<Judg_reportVO> getlawsuitInfo(Judg_reportVO vo) {
		return judgReportDAO.getlawsuitInfo(vo);
	}

	@Override
	public List<Judg_reportVO> getInstAdmInfo(Judg_reportVO vo) {
		return judgReportDAO.getInstAdmInfo(vo);
	}

	@Override
	public List<Judg_reportVO> getPladefInfo(Judg_reportVO vo) {
		return judgReportDAO.getPladefInfo(vo);
	}

	@Override
	public boolean lawsuitUpdate(List<Judg_reportVO> list) {
		
		boolean result = false;
		
		for(Judg_reportVO vo : list){
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor)vo;
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				if(judgReportDAO.lawsuitUpdate1(vo)==1 && judgReportDAO.lawsuitUpdate2(vo)==1){
					result = true;
				}
			}
		}
		
		return result;
	}

	@Override
	public boolean instAdmUpdate(List<Judg_reportVO> list) {
		
		boolean result = false;
		
		for(Judg_reportVO vo : list){
			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor)vo;
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				if(judgReportDAO.instAdmUpdate1(vo)==1 && judgReportDAO.instAdmUpdate2(vo)==1){
					result = true;
				}
			}
		}
		
		return result;
	}

	@Override
	public boolean pladefUpdate(List<Judg_reportVO> list) {
		
		boolean result = false;
		
		for(Judg_reportVO vo : list){

			DataSetRowTypeAccessor accessor = (DataSetRowTypeAccessor)vo;
			
			if(accessor.getRowType()==DataSet.ROW_TYPE_UPDATED){
				if(judgReportDAO.pladefUpdate(vo)==1){
					result = true;
				}
			}
		}
		
		return result;
	}

	
}
