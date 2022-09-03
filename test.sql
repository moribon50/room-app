-- roomsテーブルへデータを追加
INSERT INTO rooms(name) VALUES ('F403');

-- classesテーブルへデータを追加
INSERT INTO classes(name, semester, day_of_the_week, period, room_id) VALUES ('経済学', '前期', '月', 1, 1);
INSERT INTO classes(name, semester, day_of_the_week, period, room_id) VALUES ('経営学', '前期', '月', 1, 2);
INSERT INTO classes(name, semester, day_of_the_week, period, room_id) VALUES ('社会学', '後期', '火', 1, 3);

/*クエリ*/
SELECT name FROM rooms WHERE id NOT IN (SELECT room_id FROM classes WHERE semester = '後期' AND day_of_the_week = '火' AND period = 1);