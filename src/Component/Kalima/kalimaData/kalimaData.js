import Tayyibah from "./../kamiaAudio/1.Kalimah Tayyibah.mp3"
import Shahaadat from "./../kamiaAudio/2.Kalimah Shahaadat.mp3"
import Tamjeed from "./../kamiaAudio/3.Kalimah Tamjeed.mp3"
import Tawheed from "./../kamiaAudio/4.Kalimah Tawheed.mp3"
import Radd from "./../kamiaAudio/5.Kalimah Radd Kufr.mp3"

const kalimaData = [
	{
		id:1,
		name : 'কালিমা-ই তাইয়্যেবা',
		arabic : 'لَا اِلَهَ اِلاَّ اللهُ مُحَمَّدُ رَّسُوْ لُ الله',
		punctuation : 'লা-ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ।',
		bangla : 'আল্লাহ ছাড়া ইবাদত বন্দেগীর উপযুক্ত আর কেহই নাই। হযরত মুহাম্মদ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম তাঁহার প্রেরিত রসূল।',
		english :'There is no God but Allah, Muhammad (Sall-Aallahu Alayhi wa Sallam) is the messenger of Allah.',
		audio:Tayyibah
	},
	{
		id: 2,
		name : 'কালিমা-ই শাহাদাত',
		arabic : 'اَشْهَدُ اَنْ لَّا اِلَهَ اِلَّا اللهُ وَحْدَهُ لَاشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُه',
		punctuation : 'আশহাদু আল লা-ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা-শারীকালাহু ওয়াশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসূলুহু।',
		bangla : 'আমি সাক্ষ্য দিতেছি যে, আল্লাহ ভিন্ন আর কেহই ইবাদতের উপযুক্ত নাই তিনি এক তাঁহার কোন অংশীদার নাই। আমি আরও সাক্ষ্য দিতেছি যে, হযরত মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) আল্লাহর শ্রেষ্ঠ বান্দা এবং তাঁহার প্রেরিত নবী।',
		english :'I bear witness that (there is) no God except Allah; He is only one has no partner, and I bear witness that Muhammad (Sall-Allahu Alayhi wa Sallam) is His Servant and Messenger',
		audio:Shahaadat
	},
	{
		id: 3,
		name : 'কালিমা-ই তামজীদ',
		arabic : 'سُبْحَان لِلّه وَ الْحَمْدُ لِلّهِ وَ لآ اِلهَ اِلّا اللّهُ، وَ اللّهُ اَكْبَرُ وَلا حَوْلَ وَلاَ قُوَّة ِلَّا بِاللّهِ الْعَلِىّ الْعَظِيْم',
		punctuation : 'সুবহানআল্লাহী ওয়ালহামদু লিল্লাহী ওয়ালা ইলাহা ইল্লাল্লাহু ওয়াল্লাহু আকবার, ওয়ালা হাওলা ওয়ালা কুয়াতা ইল্লা বিল্লাহিল আলিইল আযীম।',
		bangla : 'মহিমান্বিত আল্লাহ্‌র, সমস্ত প্রশংসা আল্লাহ্‌র। আল্লাহ্‌ ছাড়া কোন মাবুদ নাই। আল্লাহ্‌ মহান। সমস্ত পবিত্রতা আল্লাহ্‌র, সকল প্রশংসা আল্লাহ্‌র। আল্লাহ্‌ ছাড়া কোন শক্তি নাই, কোন ক্ষমতা নাই, তিনি সম্মানিত, তিনি মহান।',
		english :'Exalted is Allah, and praise be to Allah, and there is no deity except Allah, and Allah is the Greatest. And there is no might nor power except in Allah, the Most High, the Most Great.',
		audio:Tamjeed
	},
	{
		id: 4,
		name : 'কালিমা-ই তাওহীদ',
		arabic : 'لا الهَ اِلَّا اللّهُ وَحْدَهُ لا شَرِيْكَ لَهْ، لَهُ الْمُلْكُ وَ لَهُ الْحَمْدُ يُحْى وَ يُمِيْتُ وَ هُوَحَىُّ لَّا يَمُوْتُ اَبَدًا اَبَدًا ط ذُو الْجَلَالِ وَ الْاِكْرَامِ ط بِيَدِهِ الْخَيْرُ ط وَهُوَ عَلى كُلِّ شَئ ٍ قَدِيْرٌ',
		punctuation : 'লা ইলাহা ইল্লাল্লাহু ওয়াহদাহু লা শারিকা লাহু, লাহুল মুলকু ওলাহুল হামদু উহয়ী ওয়া ইয়োমিতু ওয়া হুয়া হাইয়ুল লা ইয়ামুতু আবাদান আবাদা জুল জালালি ওয়াল ইকরাম বি ইয়াদিহিল খাইর ওয়া হুয়া আলা কুল্লি শাইয়িন কাদির',
		bangla : '(There is) none worthy of worship except God. He is only One. (There are) no partners for Him. For He (is) the Kingdom. And for Him (is) the Praise. He gives life and causes death. And He (is) Alive. He will not die, never, ever. Possessor of Majesty and Reverence. In His hand (is) the goodness. And He (is) the goodness. And He (is) on everything powerful.',
		english :'আল্লাহ ব্যতীত কোন উপাস্য নেই, তিনি এক ও অদ্বিতীয়। তাঁর কোন অংশীদার নেই। সকল ক্ষমতা এবং প্রশংসা তাঁরই জন্য। তিনিই জীবন ও মৃত্যুর মালিক। তিনি চিরঞ্জীব, তিনি সকল সম্মানের মালিক। তাঁর হাতেই সকল মঙ্গল এবং তিনি সবকিছুর উপর ক্ষমতা রাখেন।',
		audio:Tawheed
	},
	{
		id: 5,
		name : 'কালিমা-ই রদ্দেকুফর',
		arabic : 'اَللَّهُمَّ اِنِّىْ اَعُوْذُبِكَ مِنْ اَنْ اُشْرِكَ بِكَ شَيْئً وَاَنَا اعَلَمُ بِهِ وَاَسْتَغْفِرُكَ لِمَا اعَلَمُ بِهِ وَمَا لاَاعَلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّأتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْمَعَاصِىْ كُلِّهَا وَاَسْلَمْتُ وَاَمَنْتُ وَاَقُوْلُ اَنْ لاَّاِلَهَ اِلاَّاللهُ مُحَمَّدُ رَّسَوْلُ اللهِ',
		punctuation : 'আল্লাহুম্মা ইন্নী আউযুবিকা মিন আন উশরিকা বিকা শাইআও ওয়া আনা আলামু বিহি ওয়া আসতাগ ফিরুকা লিমা আলামু বিহি ওয়ামা লা আলামু বিহি তুবতু আনহু ওয়া তাবাররাতু মিনাল কুফরি ওয়াশ্শির্কি ওয়াল মা আছি কুল্লিহা ওয়া আসলামতু ওয়া আমানতু ওয়া আক্বলু আল্লা ইলাহা ইল্লাল্লাহু মুহাম্মাদু রাসূলুল্লাহ।',
		bangla : 'হে আল্লাহ! আমি তোমার নিকট আশা করছি, যেন কাহাকেও তোমার সহিত অংশীদার না করি। আমার জানা-অজানা গুনাহ হতে ক্ষমা চাহিতেছি এবং ইহা হতে তওবা করিতেছি। কুফর, শিরক এবং অন্যান্য সমস্ত গুনাহ হতে বিদুরীত হইতেছি এবং প্রতিজ্ঞা করিতেছি আল্লাহ ব্যতীত অন্য কোন মাবুদ নাই, মুহাম্মদ মুস্তফা (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম) তাঁহার প্রেরিত রাসুল।',
		english :'O Allah! I seek protection in You from that I should not join any partner with You knowingly. I seek Your forgiveness from that which I do not know. I repent from it (ignorance) I free myself from disbelief and joining partners with You and from all sins. I submit to Your will I believe and I declare: There is none worthy of worship besides Allah and Muhammad (Peace be upon Him) is Allahs Messenger.',
		audio:Radd
	}
]
export default kalimaData;