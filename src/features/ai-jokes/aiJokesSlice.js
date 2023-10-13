import { createSlice } from "@reduxjs/toolkit";

const aiJokesSlive = createSlice({
  name: "ai-jokes",
  initialState: {
    rules: [{ name: "Joke type", description: "Programmer" }],
    jokes: [],
  },
  reducers: {
    ruleAdded(state, action) {
      const ruleIndex = state.rules.findIndex(
        (rule) => rule.name === action.payload.name
      );
      if (ruleIndex >= 0) return;
      state.rules.push(action.payload);
    },
    ruleRemoved(state, action) {
      const ruleIndex = state.rules.findIndex(
        (rule) => rule.name === action.payload
      );
      if (ruleIndex < 0) return;
      state.rules.splice(ruleIndex, 1);
    },
  },
});

export const { ruleAdded } = aiJokesSlive.actions;

export const { ruleRemoved } = aiJokesSlive.actions;

export default aiJokesSlive.reducer;
