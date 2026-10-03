"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Star, Check, Image as ImageIcon, FileText, CreditCard, PlayIcon } from 'lucide-react';
import MapSection from '@/components/common/MapSection';
import { MdOutlineZoomOutMap } from "react-icons/md";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

// دالة مساعدة لاستخراج الصورة المصغرة من رابط اليوتيوب
const getYoutubeThumbnail = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://img.youtube.com/vi/${match[2]}/0.jpg` : null;
};

const ProertyContent = ({ data }) => {
  // استخدام مؤشر موحد للوسائط (صور + فيديو) في القسم العلوي
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  // حالات النوافذ المنبثقة (Popups)
  const [CurrentImage, setCurrentImage] = useState(null);
  const [CurrentVideo, setCurrentVideo] = useState(null);
  const [YoutubeUrlactive, setYoutupeUrlActive] = useState(null);

  const handleWhatsApp = () => {
    const phoneNumber = '+972568700632';
    const message = `مرحباً، أود الاستفسار عن ${data.title}`;
    const whatsappUrl = `https://wa.me/+${data?.whatssapfolow || phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // 1. دمج الصور والفيديوهات في قائمة واحدة للقسم العلوي
  const mainMediaList = useMemo(() => {
    const list = [];
    if (data?.seriesimagesCutmez) {
      data.seriesimagesCutmez.forEach(img => {
        if (img?.url) list.push({ type: 'image', url: img.url });
      });
    }
    if (data?.vidoesCustmez) {
      data.vidoesCustmez.forEach(vid => {
        if (vid?.url) list.push({ type: 'video', url: vid.url });
      });
    }
    if (data?.youtupeUrl) {
      list.push({ type: 'youtube', url: data.youtupeUrl });
    }
    return list;
  }, [data]);

  // تحديد الوسائط الحالية المعروضة في القسم الرئيسي
  const currentMedia = mainMediaList[selectedMediaIndex] || { type: 'image', url: 'https://via.placeholder.com/800x450?text=No+Image' };
  const isVideo = currentMedia.type === 'video';
  const isYoutube = currentMedia.type === 'youtube';
  const isImage = currentMedia.type === 'image';

  const hasFeatures = (data?.projectFeatures?.length ?? 0) > 0 || (data?.propertiesServies?.length ?? 0) > 0;
  const hasMap = !!(data?.map || data?.d3map);
  const hasPayment = !!data?.firstPayemnt || !!data?.installemntPeriod;
  const hasGallery = (data?.seriesimagesCutmez?.length ?? 0) > 0 || (data?.vidoesCustmez?.length ?? 0) > 0 || !!data?.youtupeUrl;

  const tabs = [
    { id: "overview", label: "نظرة عامة", icon: Square },
    { id: "features", label: "المميزات", icon: Star, show: hasFeatures },
    { id: "map", label: "الخريطة", icon: MapPin, show: hasMap },
    { id: "payment", label: "خيارات الدفع", icon: CreditCard, show: hasPayment },
    { id: "gallery", label: "المعرض", icon: ImageIcon, show: hasGallery },
  ].filter((item) => item.show !== false);

  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // 1. الوصول الآمن للبيانات باستخدام ?. لتجنب الانهيار
        const file = node?.data?.target?.fields?.file;
        const title = node?.data?.target?.fields?.title;

        // 2. التحقق من وجود رابط الصورة، وإذا لم يوجد نرجع null (لا نعرض شيئاً)
        if (!file?.url) {
          return null; 
        }

        return (
          <img
            src={`https:${file.url}`}
            alt={title || 'صورة'}
            className="rounded-xl my-6 w-full object-cover shadow-lg border border-gray-100"
          />
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-800">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pr-6 space-y-2 mb-4">{children}</ol>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pr-6 space-y-2 mb-4">{children}</ul>,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4" dir="rtl">
      
      {/* ================= القسم العلوي المطور: يعرض الصور والفيديوهات ================= */}
      <div className="flex flex-col lg:flex-row gap-4 py-8">
        
        {/* الشاشة الرئيسية الكبيرة */}
        <div 
          className="relative w-full lg:w-[75%] h-[400px] md:h-[500px] overflow-hidden group shadow-lg cursor-pointer"
          onClick={() => {
            if (isImage) setCurrentImage(currentMedia.url);
            else if (isVideo) setCurrentVideo(currentMedia.url);
            else if (isYoutube) setYoutupeUrlActive(currentMedia.url);
          }}
        >
          {isImage || isYoutube ? (
            <Image
              src={isYoutube ? (getYoutubeThumbnail(currentMedia.url) || 'https://via.placeholder.com/800x450?text=YouTube+Video') : decodeURIComponent(currentMedia.url)}
              alt={data.title}
              fill
              className="transition-transform duration-700 group-hover:scale-105"
              unoptimized
              priority
            />
          ) : (
            <video 
              src={currentMedia.url} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              autoPlay 
              muted 
              loop 
            />
          )}
          
          {/* طبقة التدرج اللوني */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
          
          {/* علامة التشغيل في منتصف الشاشة للفيديوهات */}
          {(isVideo || isYoutube) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-5 group-hover:bg-amber-500 transition-all duration-300 shadow-xl">
                <PlayIcon className="text-white w-12 h-12 fill-white group-hover:scale-110 transition-transform" />
              </div>
            </div>
          )}

          {/* تفاصيل العقار فوق الصورة */}
          <div className="absolute bottom-8 right-8 left-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white pointer-events-none">
            <div>
              <span className="inline-block bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {data.typeOfproject}
              </span>
            </div>
          </div>
        </div>

        {/* الصور والفيديوهات المصغرة */}
        {mainMediaList.length > 0 && (
          <div className="w-full lg:w-[25%] flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto no-scrollbar max-h-[500px]">
            {mainMediaList.map((media, index) => (
              <button
                key={index}
                onClick={() => setSelectedMediaIndex(index)}
                className={`relative flex-shrink-0 w-24 h-24 cursor-pointer lg:w-full lg:h-32 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedMediaIndex === index
                    ? 'border-amber-500 ring-4 ring-amber-500/10'
                    : 'border-transparent grayscale-[40%] hover:grayscale-0'
                }`}
              >
                {media.type === 'image' || media.type === 'youtube' ? (
                  <Image
                    src={media.type === 'youtube' ? (getYoutubeThumbnail(media.url) || 'https://via.placeholder.com/150') : media.url}
                    alt={`وسائط ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <video src={media.url} className="w-full h-full object-cover" muted />
                )}
                
                {/* علامة التشغيل على المصغرات للفيديوهات */}
                {(media.type === 'video' || media.type === 'youtube') && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                    <PlayIcon className="text-white w-8 h-8 fill-white" />
                  </div>
                )}

                {/* Overlay خفيف عند عدم الاختيار */}
                {selectedMediaIndex !== index && <div className="absolute inset-0 bg-black/10 hover:bg-transparent pointer-events-none"></div>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= باقي الصفحة (Tabs & Sidebar) ================= */}
      <div className="grid lg:grid-cols-3 gap-8 pb-12">
        <div className="lg:col-span-2">
          {/* Info Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 flex flex-wrap items-center justify-around gap-4">
            {data.bedrooms && <QuickInfo icon={<Bed className="text-amber-500" />} label="غرف نوم" value={data.bedrooms} />}
            <div className="w-px h-10 bg-slate-100 hidden md:block"></div>
            {data.bathrooms && <QuickInfo icon={<Bath className="text-amber-500" />} label="حمامات" value={data.bathrooms} />}
            <div className="w-px h-10 bg-slate-100 hidden md:block"></div>
            {data.area && <QuickInfo icon={<Square className="text-amber-500" />} label="المساحة" value={`${data.area} م²`} />}
          </div>

          {/* Tabs Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-slate-50/50 border-b border-gray-100 overflow-x-auto">
              <nav className="flex flex-col lg:flex-row whitespace-nowrap px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-5 px-6 font-bold text-sm transition-all relative ${
                      activeTab === tab.id ? "text-amber-600" : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    <tab.icon size={16} className="ml-2" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 right-0 left-0 h-1 bg-amber-500 rounded-t-full"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-xl font-black text-slate-800 mb-4 border-r-4 border-amber-500 pr-4">وصف العقار</h3>
                  {data.details2 ? (
                    <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed font-medium text-base md:text-lg">
                      {documentToReactComponents(data.details2, richTextOptions)}
                    </div>
                  ) : (
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">{data.details}</p>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    {data?.buildingage && <DetailBox label="سنة البناء" value={data.buildingage} />}
                    {data?.barkingStauts && <DetailBox label="المواقف" value={data.barkingStauts} />}
                    {data?.furniture && <DetailBox label="الأثاث" value={data.furniture} />}
                    {data?.typeOfproject && <DetailBox label="النوع" value={data.typeOfproject} />}
                  </div>
                </div>
              )}

              {activeTab === "features" && hasFeatures && (
                <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
                  {(data?.projectFeatures?.length ?? 0) > 0 && (
                    <div>
                      <h4 className="font-black text-lg mb-4 text-slate-800">مميزات المشروع</h4>
                      <div className="space-y-3">
                        {data.projectFeatures.map((f, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-700">
                            <Check className="text-green-500" size={18} />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {(data?.propertiesServies?.length ?? 0) > 0 && (
                    <div>
                      <h4 className="font-black text-lg mb-4 text-slate-800">الخدمات القريبة</h4>
                      <div className="space-y-3">
                        {data.propertiesServies.map((s, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-700">
                            <Check className="text-amber-500" size={18} />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "map" && hasMap && (
                <div className="rounded-2xl overflow-hidden h-96">
                  <MapSection map3d={data?.d3map} map={data?.map} />
                </div>
              )}

              {activeTab === "payment" && hasPayment && (
                <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                  {data?.firstPayemnt && (
                    <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex items-center gap-4">
                      <div className="bg-amber-500 p-3 rounded-xl text-white">
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-amber-700 font-bold">الدفعة الأولى</p>
                        <p className="font-black text-lg text-slate-800">{data.firstPayemnt}</p>
                      </div>
                    </div>
                  )}
                  {data?.installemntPeriod && (
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                      <div className="bg-slate-800 p-3 rounded-xl text-white">
                        <FileText size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-bold">مدة السداد</p>
                        <p className="font-black text-lg text-slate-800">{data.installemntPeriod}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* تبويب المعرض (يبقى كما هو لعرض الشبكة الكاملة) */}
              {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
                  {data?.seriesimagesCutmez?.map((image, index) => (
                    <div
                      key={`image-${index}`}
                      className="relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                      onClick={() => setCurrentImage(image?.url)}
                    >
                      <Image
                        src={image?.url}
                        alt="Property Gallery"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <MdOutlineZoomOutMap className="text-orange-500 text-4xl transform scale-75 group-hover:scale-100 transition duration-300" />
                      </div>
                    </div>
                  ))}
                  {data?.vidoesCustmez?.map((video, index) => (
                    <div
                      key={`video-${index}`}
                      className="relative aspect-square rounded-xl overflow-hidden shadow-sm group bg-black cursor-pointer"
                      onClick={() => setCurrentVideo(video?.url)}
                    >
                      <video src={video?.url} className="w-full h-full object-cover" muted loop />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <PlayIcon className="text-orange-500 text-5xl transform scale-75 group-hover:scale-100 transition duration-300 fill-orange-500" />
                      </div>
                    </div>
                  ))}
                  {data?.youtupeUrl && (
                    <div
                      className="relative aspect-square rounded-xl overflow-hidden shadow-sm group cursor-pointer bg-slate-200"
                      onClick={() => setYoutupeUrlActive(data?.youtupeUrl)}
                    >
                      {getYoutubeThumbnail(data?.youtupeUrl) ? (
                        <Image
                          src={getYoutubeThumbnail(data?.youtupeUrl)}
                          alt="YouTube Video"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <PlayIcon className="w-12 h-12 text-slate-400" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <PlayIcon className="text-orange-500 text-5xl transform scale-75 group-hover:scale-100 transition duration-300 fill-orange-500" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sticky top-6">
            <h3 className="text-xl font-black text-slate-800 mb-6">احجز موعداً للمعاينة</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center p-4 bg-slate-50 rounded-xl gap-4">
                <Phone className="text-amber-500" size={20} />
                <span className="font-bold text-slate-700">{data?.whatssapfolow || "+972568700632"}</span>
              </div>
              <div className="flex items-center p-4 bg-slate-50 rounded-xl gap-4">
                <Mail className="text-amber-500" size={20} />
                <span className="font-bold text-slate-700 truncate text-sm">rayapalinfo@gmail.com</span>
              </div>
            </div>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-100 active:scale-95"
            >
              <MessageCircle size={22} /> تواصل عبر الواتساب
            </button>
          </div>
        </aside>
      </div>

      {/* ================= النوافذ المنبثقة (Popups) ================= */}

      {/* 1. Popup الصور */}
      {CurrentImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
          onClick={() => setCurrentImage(null)}
        >
          <button className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-orange-500 transition-colors z-10">
            ✕
          </button>
          <img
            src={CurrentImage}
            alt="Full"
            className="max-w-[95%] max-h-[95%] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()} // منع إغلاق النافذة عند الضغط على الصورة
          />
        </div>
      )}

      {/* 2. Popup الفيديوهات المخصصة */}
      {CurrentVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
          onClick={() => setCurrentVideo(null)}
        >
          <button className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-orange-500 transition-colors z-10">
            ✕
          </button>
          <video
            src={CurrentVideo}
            className="w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()} // منع إغلاق النافذة عند الضغط على الفيديو
          />
        </div>
      )}

      {/* 3. Popup فيديو اليوتيوب */}
      {YoutubeUrlactive && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
          onClick={() => setYoutupeUrlActive(null)}
        >
          <button className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-orange-500 transition-colors z-10">
            ✕
          </button>
          <div
            className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // منع إغلاق النافذة عند الضغط على الفيديو
          >
            <iframe
              width="100%"
              height="100%"
              src={YoutubeUrlactive}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

// مكونات مساعدة للحفاظ على نظافة الكود
const QuickInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="bg-amber-50 p-2 rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] text-slate-400 font-bold uppercase">{label}</p>
      <p className="font-black text-slate-800">{value}</p>
    </div>
  </div>
);

const DetailBox = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
      <span className="text-slate-500 font-bold text-sm">{label}:</span>
      <span className="text-slate-800 font-black">{value}</span>
    </div>
  );
};

export default ProertyContent;