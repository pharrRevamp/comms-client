import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlAll = process.env.REACT_APP_ALL_DATA;
const urlRecent = process.env.REACT_APP_RECENT_DATA;
const urlSendData = process.env.REACT_APP_SEND_DATA;

export const kpiAll = createAsyncThunk("user/kpi-all", async () => {
  const { data } = await axios.get(`${urlAll}`);
  return data;
}); // get

export const kpiRecent = createAsyncThunk("user/kpi-recent", async () => {
  const { data } = await axios.get(`${urlRecent}`);
  return data;
}); // get

export const kpiSend = createAsyncThunk("user/kpi-send", async kpiInfo => {
  const { data } = await axios.post(`${urlSendData}`, kpiInfo);
  return data;
}); // post

const kpiDataMemory = createSlice({
  name: "KPI data",
  initialState: {
    loadStatus: {
      allKPI: "Idle",
      recentKPI: "Idle",
      kpiDataTransfer: "Idle",
    },
    kpiInputs: {
      avgDispatchTime: "",
      numOfHrsTCO: "",
      pctOfCallsUnder: "",
      TrainHoursEmpl: "",
      numOfSpecProg: "",
      pctOfBudgetUsed: "",
      numOfBudgetAdju: "",
      TtlNumOfCalls: "",
      TtlNumOfCallsPharr: "",
      TtlNumTrans: "",
      TtlNumILA: "",
      CompletionRate: "",
      pctCriteria: "",
      pctStaffCert: "",
      pctCertObtained: "",
    },    
    dataAll: [],
    dataRecent: [],
  },
  reducers: {
    resetMemory: state => {
      state.dataAll = [];
      state.dataRecent = [];
      state.loadStatus = {
        allKPI: "Idle",
        recentKPI: "Idle",
        kpiDataTransfer: "Idle",
      };
    },
    inputHandler: (state, action) => {
      const input = action.payload;
      state.kpiInputs = {
        ...state.kpiInputs,
        [input.dataKey]: [input.dataInput],
      };
    },    
  },
  extraReducers: builder => {
    builder.addCase(kpiAll.pending, state => {
      state.loadStatus.allKPI = "Loading";
      state.dataAll = [];
    });
    builder.addCase(kpiAll.fulfilled, (state, action) => {
      state.loadStatus.allKPI = "Loaded";
      state.dataAll = action.payload;
    });
    builder.addCase(kpiAll.rejected, state => {
      state.loadStatus.allKPI = "Failed";
      state.dataAll = [];
    });
    builder.addCase(kpiRecent.pending, state => {
      state.loadStatus.recentKPI = "Loading";
      state.dataRecent = [];
    });
    builder.addCase(kpiRecent.fulfilled, (state, action) => {
      state.loadStatus.recentKPI = "Loaded";
      state.dataRecent = action.payload;
    });
    builder.addCase(kpiRecent.rejected, state => {
      state.loadStatus.recentKPI = "Failed";
      state.dataRecent = [];
    });
    builder.addCase(kpiSend.pending, state => {
      state.loadStatus.kpiDataTransfer = "Loading";
    });
    builder.addCase(kpiSend.fulfilled, state => {
      state.loadStatus.kpiDataTransfer = "Loaded";
    });
    builder.addCase(kpiSend.rejected, state => {
      state.loadStatus.kpiDataTransfer = "Failed";
    });
  },
});

export const { resetMemory, inputHandler} = kpiDataMemory.actions;
export default kpiDataMemory.reducer;
