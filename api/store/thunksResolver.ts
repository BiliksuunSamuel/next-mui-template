import { ApiResponse, BaseReducerState, HttpClient } from "@/interface";
import {
  ActionReducerMapBuilder,
  AsyncThunkConfig,
  AsyncThunk,
} from "@reduxjs/toolkit";

export function ResolveThunk<IDataType>(
  builder: ActionReducerMapBuilder<BaseReducerState>,
  thunks: AsyncThunk<ApiResponse<IDataType>, HttpClient, AsyncThunkConfig>[]
): ActionReducerMapBuilder<BaseReducerState> {
  for (var thunk of thunks) {
    builder
      .addCase(thunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
        state.title = null;
      })
      .addCase(thunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = null;
        state.title = "Message";
      })
      .addCase(thunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Request failed";
        state.message = null;
        state.title = "Error";
      });
  }

  return builder;
}
