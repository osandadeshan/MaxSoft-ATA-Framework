var tags = ["get_my_deck", "get_my_decks", "delete_my_deck", "recommendation", "create_question-positive_tests", "create_questions_from_text-positive_tests", "qa_int", "restore_expert_deck", "create_expert_deck", "get_sku", "create_question_mcq_type", "archive_my_deck", "sku", "create_question", "delete_a_question", "get_all_questions_in_a_deck", "get_a_category", "get_pi_token", "edit_expert_deck", "create_my_deck", "edit_question_all_type", "edit_question-positive_tests", "regression", "add_expert_deck_to_my_deck", "send_feedback-positive_tests", "create_category", "restore_my_deck", "deck_service", "activity", "ci_ready", "create_question_all_type", "create_category-negative_tests", "copy_decks", "delete_expert_deck", "edit_my_deck", "deck_management", "edit_question_mcq_type", "production_token", "aggregation_service", "bvt", "create_question_short_answer_type", "get_a_question", "create_category-positive_tests", "negative", "staging_token", "staging", "load_decks_of_bundle", "create_questions_from_text", "edit_question", "feedback", "get_questions_count", "edit_category-positive_tests", "edit_category-negative_tests", "get_all_categories", "edit_category", "create_question-negative_tests", "archive_expert_deck", "bundle", "get_bundle", "positive", "get_expert_decks", "production", "get_expert_deck", "edit_question_short_answer_type", "delete_a_category"]
var specs = [{"path":"specs\\Access Token\\Get Production PI Token.html","name":"Get Production PI Token Specification","scenarios":[{"name":"Invoke PI API in Production Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","production","get_pi_token","production_token"]}]},{"path":"specs\\Access Token\\Get QA INT PI Token.html","name":"Get QA INT PI Token Specification","scenarios":[{"name":"Invoke PI API in QA INT Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","qa_int","get_pi_token"]}]},{"path":"specs\\Access Token\\Get Staging PI Token.html","name":"Get Staging PI Token Specification","scenarios":[{"name":"Invoke PI API in Staging Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","staging","get_pi_token","staging_token"]}]},{"path":"specs\\BVT\\Aggregation Service\\Activity\\Activity API in Aggregation Service.html","name":"Activity API in Aggregation Service Specification","scenarios":[{"name":"Sending a new activity information using valid payload","tags":["aggregation_service","activity","ci_ready","bvt","regression"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Add Expert Deck To My Deck\\Add Expert Deck To My Deck.html","name":"Add Expert Deck To My Deck using Aggregation Service Specification","scenarios":[{"name":"Add an expert deck to my deck","tags":["add_expert_deck_to_my_deck","ci_ready"]},{"name":"Verify all the questions are in the newly added deck","tags":["add_expert_deck_to_my_deck","ci_ready"]},{"name":"Counting the number of questions inside that deck","tags":["add_expert_deck_to_my_deck","ci_ready"]},{"name":"Delete the previously created expert deck","tags":["add_expert_deck_to_my_deck","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Archive and Restore Deck (Staging)\\Archive and Restore Expert Deck using Aggregation Service.html","name":"Archive and Restore Expert Deck using Aggregation Service Specification","scenarios":[{"name":"Add an expert deck to my deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Verify all the questions are in the newly added deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Counting the number of questions inside that deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Invoke PI API in Staging Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","staging","aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Find that deck with archived false in PLA","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Initially created cards are inside the deck in PLA","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Archive the deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Counting the number of questions inside that archived deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Find the above archived deck in PLA","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Initially created cards are inside the above archived deck in PLA","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Restore the deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Verify all the questions are in the restored deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Counting the number of questions inside that restored deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Find that restored deck in PLA","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Above created cards are inside the restored deck in PLA","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]},{"name":"Delete the previously created expert deck","tags":["aggregation_service","deck_management","archive_expert_deck","restore_expert_deck","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Archive and Restore Deck (Staging)\\Archive and Restore My Deck using Aggregation Service.html","name":"Archive and Restore My Deck using Aggregation Service Specification","scenarios":[{"name":"Create a deck with archived false and add 4 MCQ questions","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Counting the number of questions inside that deck","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Invoke PI API in Staging Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","staging","aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Find that deck with archived false in PLA","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Initially created cards are inside the deck in PLA","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Archive the deck","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Counting the number of questions inside that archived deck","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Find the above archived deck in PLA","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Initially created cards are inside the above archived deck in PLA","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Restore the deck","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Verify all the questions are in the restored deck","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Counting the number of questions inside that restored deck","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Find that restored deck in PLA","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]},{"name":"Above created cards are inside the restored deck in PLA","tags":["aggregation_service","deck_management","archive_my_deck","restore_my_deck","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Bundle\\Expert Bundle\\Find Expert Bundle\\Find Expert Bundle.html","name":"Find Expert Bundle Specification","scenarios":[{"name":"Find expert bundle","tags":["bundle","get_bundle"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Bundle\\Expert Bundle\\Search Expert Bundle\\Search Expert Bundle.html","name":"Search Expert Bundle Specification","scenarios":[{"name":"Get expert deck bundle by title","tags":["bundle","get_bundle"]},{"name":"Get expert deck bundle by subject name","tags":["bundle","get_bundle"]},{"name":"Get expert deck bundle by bookAuthorName","tags":["bundle","get_bundle"]},{"name":"Get expert deck bundle by bookTitle","tags":["bundle","get_bundle"]},{"name":"Search expert deck bundle by searchQuery","tags":["bundle","get_bundle"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Bundle\\Load Decks\\Load Decks of a Bundle.html","name":"Load Decks of a Bundle Specification","scenarios":[{"name":"Load decks of a new bundle which has two expert decks","tags":["load_decks_of_bundle"]},{"name":"Load decks of a new bundle which has two expert decks and one is deleted","tags":["load_decks_of_bundle"]},{"name":"Load decks of a new bundle which has two expert decks and one is edited","tags":["load_decks_of_bundle"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Copy Decks\\Copy Decks using Aggregation Service.html","name":"Copy Decks using Aggregation Service Specification","scenarios":[{"name":"Copy questions from My Deck to My Deck","tags":["copy_decks","positive","aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Validate the previously copied questions from My Deck","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Validate the question count in above my deck copied from another my deck using question count API","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Copy questions from Expert Deck to My Deck","tags":["copy_decks","positive","aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Validate the previously copied questions from Expert Deck","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Validate the question count in above my deck copied from an expert deck using question count API","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Delete the previously created expert deck with 4 questions","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Copy all types of questions from Expert Deck to My Deck","tags":["copy_decks","positive","aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Validate the previously copied all types of questions from Expert Deck","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Validate the all types of question count in above my deck copied from an expert deck using question count API","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]},{"name":"Delete the previously created expert deck with 9 questions","tags":["aggregation_service","deck_management","copy_decks","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Deck CRUD Operations\\Expert Deck CRUD Operations.html","name":"Expert Deck CRUD Operations Specification","scenarios":[{"name":"Create an expert deck","tags":["create_expert_deck","edit_expert_deck","get_expert_deck","get_expert_decks","delete_expert_deck"]},{"name":"Edit the previously created deck","tags":["create_expert_deck","edit_expert_deck","get_expert_deck","get_expert_decks","delete_expert_deck"]},{"name":"Get the previously created deck","tags":["create_expert_deck","edit_expert_deck","get_expert_deck","get_expert_decks","delete_expert_deck"]},{"name":"Delete the previously created deck","tags":["create_expert_deck","edit_expert_deck","get_expert_deck","get_expert_decks","delete_expert_deck"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Deck CRUD Operations\\My Deck CRUD Operations.html","name":"My Deck CRUD Operations Specification","scenarios":[{"name":"Create a deck","tags":["create_my_deck","edit_my_deck","get_my_deck","get_my_decks","delete_my_deck"]},{"name":"Edit a deck","tags":["create_my_deck","edit_my_deck","get_my_deck","get_my_decks","delete_my_deck"]},{"name":"Get a deck","tags":["create_my_deck","edit_my_deck","get_my_deck","get_my_decks","delete_my_deck"]},{"name":"Get all decks for a user","tags":["create_my_deck","edit_my_deck","get_my_deck","get_my_decks","delete_my_deck"]},{"name":"Delete a deck","tags":["create_my_deck","edit_my_deck","get_my_deck","get_my_decks","delete_my_deck"]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\Get Default 9 Decks\\Get the default 9 decks using Aggregation Service.html","name":"Get the default 9 decks using Aggregation Service Specification","scenarios":[{"name":"Get onboarding 9 decks","tags":[]},{"name":"Verify that the notifications are disable for onboarding decks","tags":[]}]},{"path":"specs\\BVT\\Aggregation Service\\Deck Management\\SKU\\Get SKUs\\Get All SKUs.html","name":"Get All SKUs Specification","scenarios":[{"name":"Get all skus","tags":["sku","get_sku"]},{"name":"Validate all skus for decks and bundles","tags":["sku","get_sku"]}]},{"path":"specs\\BVT\\Aggregation Service\\Feedback\\Send A Feedback using Aggregation Service - Data Driven Positive Tests.html","name":"Send A Feedback using Aggregation Service - Data Driven Positive Tests Specification","scenarios":[{"name":"Send a feedback using valid payload","tags":["feedback","send_feedback-positive_tests","positive","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Create Question\\All\\Create All Type Question - Data Driven Positive Tests.html","name":"Create All Type Question using Aggregation Service - Data Driven Positive Tests Specification","scenarios":[{"name":"Create a question using a valid payload","tags":["create_question","create_question_all_type","create_question-positive_tests","positive","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Create Question\\MCQ\\Create MCQ Type Question - Data Driven Positive Tests.html","name":"Create MCQ Type Question using Aggregation Service - Data Driven Positive Test Specification","scenarios":[{"name":"Create a question using a valid payload","tags":["create_question","create_question_mcq_type","create_question-positive_tests","positive"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Create Question\\Short Answer\\Create Short Answer Type Question - Data Driven Positive Tests.html","name":"Create Short Answer Type Question using Aggregation Service - Data Driven Positive Test Specification","scenarios":[{"name":"Create a question using a valid payload","tags":["create_question","create_question_short_answer_type","create_question-positive_tests","positive"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Create Questions From Text\\Create Questions From Text using Aggregation Service - Data Driven Positive Test.html","name":"Create Questions From Text using Aggregation Service - Data Driven Positive Test Specification","scenarios":[{"name":"Create Questions from Text using a valid payload","tags":["create_questions_from_text","create_questions_from_text-positive_tests","positive","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Delete Question\\Delete A Question.html","name":"Delete a Question using Aggregation Service Specification","scenarios":[{"name":"Delete the only question using valid question id (short answer type)","tags":["delete_a_question","ci_ready"]},{"name":"Delete the only question using valid question id (MCQ type)","tags":["delete_a_question","ci_ready"]},{"name":"Delete the only question using valid question id (ALL type)","tags":["delete_a_question","ci_ready"]},{"name":"Delete the second question using valid question id (short answer type)","tags":["delete_a_question","ci_ready"]},{"name":"Delete the second last question using valid question id (MCQ type)","tags":["delete_a_question","ci_ready"]},{"name":"Delete the fifth question using valid question id (ALL type)","tags":["delete_a_question","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Edit Question\\All\\Edit All Type Question - Data Driven Positive Tests.html","name":"Edit All Type Question using Aggregation Service - Data Driven Positive Test Specification","scenarios":[{"name":"Edit a question using a valid payload","tags":["edit_question","edit_question_all_type","edit_question-positive_tests","positive"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Edit Question\\MCQ\\Edit MCQ Type Question - Data Driven Positive Tests.html","name":"Edit MCQ Type Question using Aggregation Service - Data Driven Positive Test Specification","scenarios":[{"name":"Edit a question using a valid payload","tags":["edit_question","edit_question_mcq_type","edit_question-positive_tests","positive"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Edit Question\\Short Answer\\Edit Short Answer Type Question - Data Driven Positive Tests.html","name":"Edit Short Answer Type Question using Aggregation Service - Data Driven Positive Test Specification","scenarios":[{"name":"Edit a question using a valid payload","tags":["edit_question","edit_question_short_answer_type","edit_question-positive_tests","positive"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Get Questions\\Get A Question In A Deck.html","name":"Get A Question using Aggregation Service Specification","scenarios":[{"name":"Get a question","tags":["get_a_question","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Get Questions\\Get All Questions In A Deck.html","name":"Get All Questions In A Deck using Aggregation Service Specification","scenarios":[{"name":"Get all questions of a deck","tags":["get_all_questions_in_a_deck","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Question Management\\Questions Count\\Get Questions Count.html","name":"Get Questions Count using Aggregation Service Specification","scenarios":[{"name":"Get questions count using a valid expert deckId with newly created questions","tags":["get_questions_count","ci_ready"]},{"name":"Edit the last question of that expert deck","tags":["get_questions_count","ci_ready"]},{"name":"Get questions count using a valid expert deckId with newly created questions and edited question","tags":["get_questions_count","ci_ready"]},{"name":"Delete a question in that expert deck","tags":["get_questions_count","ci_ready"]},{"name":"Get questions count using a valid expert deckId with newly created questions and deleted question","tags":["get_questions_count","ci_ready"]},{"name":"Delete the previously created expert deck with 8 questions","tags":["get_questions_count","ci_ready"]},{"name":"Get questions count using a valid my deckId with newly created questions","tags":["get_questions_count","ci_ready"]},{"name":"Edit the last question of that my deck","tags":["get_questions_count","ci_ready"]},{"name":"Get questions count using a valid my deckId with newly created questions and edited question","tags":["get_questions_count","ci_ready"]},{"name":"Delete a question in that my deck","tags":["get_questions_count","ci_ready"]},{"name":"Get questions count using a valid my deckId with newly created questions and deleted question","tags":["get_questions_count","ci_ready"]},{"name":"Delete the previously created my deck with 8 questions","tags":["get_questions_count","ci_ready"]}]},{"path":"specs\\BVT\\Aggregation Service\\Recommendation\\Recommendation API in Aggregation Service.html","name":"Recommendation API in Aggregation Service Specification","scenarios":[{"name":"Recommendation for the next cards using valid personId and valid deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using invalid personId and valid deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using empty personId and valid deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using null personId and valid deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using valid personId and invalid deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using valid personId and non-existing deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using valid personId and empty deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards using valid personId and null deckId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards only using valid personId","tags":["aggregation_service","recommendation","ci_ready"]},{"name":"Recommendation for the next cards only using valid deckId","tags":["aggregation_service","recommendation","ci_ready"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Create Category\\Create Category using Deck Service - Data Driven Positive Tests.html","name":"Create A Category using Deck Service - Data Driven Positive Tests Specification","scenarios":[{"name":"Create a Category using valid payload","tags":["create_category","create_category-positive_tests","positive"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Create Category\\Create Category using Deck Service - Negative Tests.html","name":"Create A Category using Deck Service - Negative Tests Specification","scenarios":[{"name":"Create a Category using name as empty","tags":["create_category","create_category-negative_tests","negative"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Delete Category\\Delete A Category using Deck Service - Negative Tests.html","name":"Delete A Category using Deck Service - Negative Test Specification","scenarios":[{"name":"Delete a category using already deleted categoryId","tags":["deck_service","deck_management","delete_a_category"]},{"name":"Delete a category using an invalid categoryId","tags":["deck_service","deck_management","delete_a_category"]},{"name":"Delete a category using an empty value as the categoryId","tags":["deck_service","deck_management","delete_a_category"]},{"name":"Delete a category without categoryId path parameter","tags":["deck_service","deck_management","delete_a_category"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Delete Category\\Delete A Category using Deck Service - Positive Tests.html","name":"Delete A Category using Deck Service - Positive Test Specification","scenarios":[{"name":"Delete a category using valid category id","tags":["deck_service","deck_management","delete_a_category"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Edit Category\\Edit Category using Deck Service - Data Driven Positive Tests.html","name":"Edit A Category using Deck Service - Data Driven Positive Tests Specification","scenarios":[{"name":"Edit a Category using valid payload","tags":["edit_category","edit_category-positive_tests","positive"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Edit Category\\Edit Category using Deck Service - Negative Tests.html","name":"Edit A Category using Deck Service - Negative Tests Specification","scenarios":[{"name":"Edit a Category using name as empty","tags":["edit_category","edit_category-negative_tests","negative"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Get Categories\\Get A Category using Deck Service.html","name":"Get A Category using Deck Service Specification","scenarios":[{"name":"Get a category using a valid categoryId","tags":["get_a_category"]},{"name":"Get a category using an invalid categoryId","tags":["get_a_category"]},{"name":"Get a category using null value as the categoryId","tags":["get_a_category"]}]},{"path":"specs\\BVT\\Deck Service\\Subjects CRUD Operations\\Get Categories\\Get All Categories using Deck Service.html","name":"Get All Categories using Deck Service Specification","scenarios":[{"name":"Get all categories using a valid categoryId","tags":["get_all_categories"]}]},{"path":"specs\\DB Test\\06. MongoDB Test.html","name":"MongoDB Test Specification","scenarios":[{"name":"MongoDB Test - Without data stores","tags":[]},{"name":"MongoDB Test - With data stores","tags":[]}]},{"path":"specs\\Data Stores\\01. Saving to Data Stores.html","name":"Saving to Data Stores Specification","scenarios":[{"name":"Saving to Data Stores","tags":[]},{"name":"Reading values from Data Store","tags":[]}]},{"path":"specs\\Data Stores\\02. Reading Values from Data Stores.html","name":"Reading Values from Data Stores Specification","scenarios":[{"name":"Reading Values from Data Stores","tags":[]}]},{"path":"specs\\Data Stores\\03. Saving And Reading Values From Data Store.html","name":"Saving And Reading Values From Data Store Specification","scenarios":[{"name":"Get configurations of the testing environment","tags":[]},{"name":"Saving values to Data Store","tags":[]},{"name":"Reading values from Data Store","tags":[]},{"name":"Invoke PI API in Staging Environment using valid username and password using payload text file","tags":["get_pi_token","staging"]},{"name":"Invoke PI API in Staging Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","staging"]},{"name":"Invoke PI API in Staging Environment using valid username and password using request attributes from text files","tags":["get_pi_token","staging"]},{"name":"Replace API Endpoint placeholders - Scenario 1","tags":[]},{"name":"Replace API Endpoint placeholders - Scenario 2","tags":[]},{"name":"Validate the data store values","tags":[]}]},{"path":"specs\\Other\\01. Text files operations.html","name":"Text Files Operations Specification","scenarios":[{"name":"Invoke PI API in Staging Environment using valid username and password using payload text file","tags":["get_pi_token","staging"]},{"name":"Get a category","tags":[]}]},{"path":"specs\\Other\\02. Create a list from data store values.html","name":"Create a list from data store values Specification","scenarios":[{"name":"Create a list from data store values","tags":[]}]},{"path":"specs\\Other\\03. Create All Type Question - Negative Data Driven Tests2.html","name":"Create All Type Question using Question Service - Negative Data Driven Test Specification2","scenarios":[{"name":"Create a question negative tests","tags":["create_question","create_question_all_type","create_question-negative_tests","negative"]}]},{"path":"specs\\Other\\04. CRUD in One Scenario.html","name":"CRUD in One Scenario Specification","scenarios":[{"name":"CRUD operation for a sku and get all the 9 questions in a deck","tags":[]}]},{"path":"specs\\Other\\05. Form-Data Example.html","name":"Form-Data Example Specification","scenarios":[{"name":"Get Google OAuth Access token","tags":[]},{"name":"Upload file","tags":[]}]},{"path":"specs\\Other\\06. Request Placeholders.html","name":"Request Placeholders Specification","scenarios":[{"name":"Saving values to Data Store","tags":[]},{"name":"Replace request placeholders from values","tags":[]},{"name":"Replace one request placeholders from values","tags":[]},{"name":"Replace request placeholders from data store values","tags":[]},{"name":"Replace one request placeholder from data store values","tags":[]}]},{"path":"specs\\Other\\07. Read from saved CSV.html","name":"Read from saved CSV Specification","scenarios":[{"name":"Delete the created questions","tags":[]}]},{"path":"specs\\Other\\08. Epoch Time.html","name":"Epoch Time Specification","scenarios":[{"name":"Current Epoch time","tags":[]},{"name":"Epoch time for a given timestamp","tags":[]}]},{"path":"specs\\Other\\09. Get Student Availablity - Negative Tests - 404 Error.html","name":"Get Student Availability - Negative Tests Specification - 404 Error","scenarios":[{"name":"Get Student Availability 404 Not Found","tags":[]}]},{"path":"specs\\Pre Test\\01. Get Staging PI Token.html","name":"Get Staging PI Token Specification","scenarios":[{"name":"Invoke PI API in Staging Environment using valid username and password and save the access token inside the text file","tags":["get_pi_token","staging","get_pi_token","staging_token"]}]},{"path":"specs\\Pre Test\\02. Get Google OAuth Access Token.html","name":"Get Google OAuth Access Token Specification","scenarios":[{"name":"Get Google OAuth Access token","tags":[]}]},{"path":"specs\\Pre Test\\03. Write to CSV.html","name":"Write to CSV Specification","scenarios":[{"name":"Get all questions of a deck using a valid deckId","tags":[]}]}]