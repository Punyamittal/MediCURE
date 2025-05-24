import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder

# Load the CSV dataset
df = pd.read_csv("Sleep_health_and_lifestyle_dataset.csv")

# Drop missing values
df.dropna(inplace=True)

# Encode categorical target
le = LabelEncoder()
df['Quality of Sleep'] = le.fit_transform(df['Quality of Sleep'])

# Choose the actual feature columns used in your dataset
features = ['Sleep Duration', 'Physical Activity Level', 'Daily Steps', 'Heart Rate', 'Stress Level']
X = df[features]
y = df['Quality of Sleep']

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train RandomForest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict on test set
y_pred = model.predict(X_test)

# Evaluate model
print("\nModel Evaluation:")
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred, target_names=le.classes_.astype(str)))

# Function to make predictions
def predict_sleep_quality(duration, activity, steps, heart_rate, stress):
    input_data = pd.DataFrame([[duration, activity, steps, heart_rate, stress]],
        columns=['Sleep Duration', 'Physical Activity Level', 'Daily Steps', 'Heart Rate', 'Stress Level'])
    prediction = model.predict(input_data)[0]
    return le.inverse_transform([prediction])[0]

# Function to calculate number of complete sleep cycles (90 mins each)
def calculate_sleep_cycles(sleep_duration_hours):
    return int((sleep_duration_hours * 60) // 90)


def suggest_sleep_improvements(duration, activity, steps, heart_rate, stress):
    tips = []

    if duration < 7:
        tips.append("💤 Increase sleep duration to at least 7 hours for better rest.")
    if activity < 5:
        tips.append("🏃‍♂️ Increase physical activity (e.g., walking, jogging) to boost sleep quality.")
    if steps < 5000:
        tips.append("🚶‍♂️ Aim for at least 5,000–7,000 steps daily.")
    if heart_rate > 80:
        tips.append("❤️ Try to lower your resting heart rate through exercise or relaxation.")
    if stress > 5:
        tips.append("🧘 Reduce stress with meditation, deep breathing, or journaling.")
    
    if not tips:
        tips.append("✅ Your lifestyle looks good! Keep maintaining healthy habits.")

    return tips
# Sample prediction with improvement suggestions
print("\n--- Sample Prediction ---")
duration = 7.5
activity = 4
steps = 3000
heart_rate = 85
stress = 6

sample_result = predict_sleep_quality(duration, activity, steps, heart_rate, stress)
cycles = calculate_sleep_cycles(duration)
tips = suggest_sleep_improvements(duration, activity, steps, heart_rate, stress)

print(f"Predicted Sleep Quality: {sample_result}")
print(f"Estimated Sleep Cycles: {cycles}")
print("\nTips to Improve Your Sleep:")
for tip in tips:
    print("•", tip)



import joblib

# Save the model to a file
joblib.dump(model, 'model.pkl')
print("Model saved as model.pkl")