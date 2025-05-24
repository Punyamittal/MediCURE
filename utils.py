def calculate_sleep_cycles(duration_hours):
    # One sleep cycle is approximately 90 minutes (1.5 hours)
    return int(duration_hours * 60 // 90)

def suggest_sleep_improvements(duration, activity, steps, heart_rate, stress):
    tips = []

    if duration < 7:
        tips.append("🛌 Increase sleep duration to at least 7 hours for better rest.")

    if activity < 7:
        tips.append("🏃‍♂ Increase physical activity (e.g., walking, jogging) to boost sleep quality.")

    if steps < 8000:
        tips.append("🚶‍♀ Aim for at least 8,000 steps daily.")

    if heart_rate > 80:
        tips.append("❤ Try to lower your resting heart rate through exercise or relaxation.")

    if stress > 7:
        tips.append("🧘 Reduce stress with meditation, deep breathing, or journaling.")

    if not tips:
        tips.append("✅ Your lifestyle looks good! Keep maintaining healthy habits.")

    return tips