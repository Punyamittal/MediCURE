import streamlit as st
from model import predict_sleep_quality
from utils import calculate_sleep_cycles, suggest_sleep_improvements

st.title("Sleep Quality & Cycle Finder")

# User input sliders
duration = st.slider("Sleep Duration (hours)", 4.0, 10.0, 7.0, 0.5)
activity = st.slider("Physical Activity Level (1–10)", 1, 10, 5)
steps = st.slider("Steps per Day", 1000, 20000, 7000, 1000)
heart_rate = st.slider("Heart Rate", 40, 120, 70)
stress = st.slider("Stress Level (1–10)", 1, 10, 5)

# Predict
sample_result = predict_sleep_quality(duration, activity, steps, heart_rate, stress)
cycles = calculate_sleep_cycles(duration)
tips = suggest_sleep_improvements(duration, activity, steps, heart_rate, stress)

st.write(f"*Predicted Sleep Quality:* {sample_result}")
st.write(f"*Estimated Sleep Cycles:* {cycles}")
st.write("*Tips to Improve Your Sleep:*")
for tip in tips:
    st.write("•", tip)