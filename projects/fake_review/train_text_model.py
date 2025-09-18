
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
df = pd.read_csv('sample_reviews.csv')
X = df['review']
y = df['label']
tfidf = TfidfVectorizer(stop_words='english', max_features=500)
X_t = tfidf.fit_transform(X)
X_train, X_test, y_train, y_test = train_test_split(X_t, y, test_size=0.33, random_state=42)
clf = LogisticRegression(max_iter=200)
clf.fit(X_train, y_train)
pred = clf.predict(X_test)
print(classification_report(y_test, pred))
