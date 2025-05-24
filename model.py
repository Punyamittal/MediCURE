import joblib

# Load the saved model
model = joblib.load('model.pkl')

def predict_sleep_quality(duration, activity, steps, heart_rate, stress):
    input_data = [[duration, activity, steps, heart_rate, stress]]
    prediction = model.predict(input_data)
    return prediction[0]