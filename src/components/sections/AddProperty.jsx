
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { HiOutlinePlus } from 'react-icons/hi';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';
import authFetch from '@/utils/authFetch';

const AddProperty = () => {
  // State متطابق مع Schema الباك إند
  const [formData, setFormData] = useState({
    client: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
    },
    project: {
      estateType: '',
      governoate: '',
      city: '',
      projectSatatus: '',
      operationType: '',
      areaMatter: '',
      internalArea: '',
      spaceOuteside: '',
      typeOfSpaceoutside: '',
      installments: '',
      estatePrice: '',
      materPriec: '',
      installmentsFirstPyment: '',
      plotNumber: '',
      basinNumber: '',
      projectDetails: '',
      imagesURLs: [],
    },
  });

  const [propertesTypes, setPropertiesType] = useState([]);
  const [propertieRegions, setPropertiesRegion] = useState([]);
  const [PropertiesStauts, setPropertiesSatuts] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // مهم: error يكون string وليس object
  const [error, setError] = useState('');

  const formRef = useRef(null);
  const successRef = useRef(null);
  const totalSteps = 3;

  // التمرير إلى رسالة النجاح عند الإرسال
  useEffect(() => {
    if (isSubmitted && successRef.current) {
      successRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isSubmitted]);

  // معالج التغيير للحقول المتداخلة
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const [section, field] = name.split('.');

    // مسح رسالة الخطأ بمجرد تعديل المستخدم
    if (error) {
      setError('');
    }

    if (section === 'project' && field === 'imagesURLs') {
      setFormData((prev) => ({
        ...prev,
        project: {
          ...prev.project,
          imagesURLs: Array.from(files || []),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  // ==========================================
  // Validation Step 1
  // ==========================================
  const validateStep1 = () => {
    if (!formData.client.fullName.trim()) {
      setError('يجب التاكد من ملئ حقل الاسم');
      return false;
    }

    // if (!formData.client.email.trim()) {
    //   setError('يجب التاكد من ملئ حقل البريد الإلكتروني');
    //   return false;
    // }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if (!emailRegex.test(formData.client.email.trim())) {
    //   setError('يرجى إدخال بريد إلكتروني صحيح');
    //   return false;
    // }

    if (!formData.client.phone.trim()) {
      setError('يجب التاكد من ملئ حقل رقم الجوال');
      return false;
    }

    return true;
  };

  // ==========================================
  // Validation Step 2
  // ==========================================
  const validateStep2 = () => {
    if (!formData.project.operationType) {
      setError('يجب اختيار نوع الطلب');
      return false;
    }

    if (!formData.project.estateType) {
      setError('يجب اختيار نوع العقار');
      return false;
    }

    if (!formData.project.governoate) {
      setError('يجب اختيار المنطقة');
      return false;
    }

    if (!formData.project.city.trim()) {
      setError('يجب ملئ حقل المدينة والعنوان التفصيلي');
      return false;
    }

    if (!formData.project.projectSatatus) {
      setError('يجب اختيار حالة العقار');
      return false;
    }

    if (!formData.project.areaMatter.trim()) {
      setError('يجب ملئ حقل المساحة الكلية');
      return false;
    }

    // if (!formData.project.internalArea.trim()) {
    //   setError('يجب ملئ حقل المساحة الداخلية');
    //   return false;
    // }

    // if (!formData.project.spaceOuteside.trim()) {
    //   setError('يجب ملئ حقل المساحة الخارجية');
    //   return false;
    // }

    // if (!formData.project.typeOfSpaceoutside) {
    //   setError('يجب اختيار نوع المساحة الخارجية');
    //   return false;
    // }

    if (!formData.project.projectDetails.trim()) {
      setError('يجب ملئ حقل وصف المشروع');
      return false;
    }

    return true;
  };

  // ==========================================
  // Validation Step 3
  // ==========================================
  const validateStep3 = () => {
    if (!formData.project.installments) {
      setError('يجب تحديد هل العقار متوفر بالتقسيط أم لا');
      return false;
    }

    if (
      formData.project.estatePrice !== '' &&
      Number(formData.project.estatePrice) < 0
    ) {
      setError('السعر الإجمالي لا يمكن أن يكون رقمًا سالبًا');
      return false;
    }

    if (
      formData.project.materPriec !== '' &&
      Number(formData.project.materPriec) < 0
    ) {
      setError('سعر المتر لا يمكن أن يكون رقمًا سالبًا');
      return false;
    }

    return true;
  };

  // ==========================================
  // Validation حسب الـ Step الحالي
  // ==========================================
  const validateCurrentStep = () => {
    setError('');

    if (currentStep === 1) {
      return validateStep1();
    }

    if (currentStep === 2) {
      return validateStep2();
    }

    if (currentStep === 3) {
      return validateStep3();
    }

    return true;
  };

  // ==========================================
  // Next
  // ==========================================
  const handleNext = () => {
    const isValid = validateCurrentStep();

    if (!isValid) {
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);

      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  // ==========================================
  // Previous
  // ==========================================
  const handlePrev = () => {
    if (currentStep > 1) {
      setError('');

      setCurrentStep((prev) => prev - 1);

      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // ==========================================
  // دالة رفع الملفات
  // ==========================================
  const uploadFiles = async (files) => {
    const uploaded = [];

    for (const file of files) {
      const formData = new FormData();

      formData.append('file', file);

      const res = await authFetch.post('/upload', formData);

      uploaded.push({
        fileURL: res.data.url,
        fileID: res.data.public_id,
      });
    }

    return uploaded;
  };

  // ==========================================
  // دالة الإرسال
  // ==========================================
  const handleSubmit = async () => {
    setError('');

    // Validation Step 1
    if (!validateStep1()) {
      setCurrentStep(1);

      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);

      return;
    }

    // Validation Step 2
    if (!validateStep2()) {
      setCurrentStep(2);

      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);

      return;
    }

    // Validation Step 3
    if (!validateStep3()) {
      setCurrentStep(3);

      setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);

      return;
    }

    setLoading(true);

    try {
      let payload = {
        client: formData.client,
        project: {
          ...formData.project,
        },
      };

      if (
        payload.project.imagesURLs &&
        payload.project.imagesURLs.length > 0
      ) {
        const files = payload.project.imagesURLs;

        if (files[0] instanceof File) {
          const uploaded = await uploadFiles(files);

          payload.project.imagesURLs = uploaded;
        }
      }

      const response = await authFetch.post(
        '/sharedProperty',
        payload
      );

      console.log('Response:', response.data);

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);

      const backendError =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        'حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً';

      // منع React من محاولة عرض object
      if (typeof backendError === 'string') {
        setError(backendError);
      } else {
        setError('حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً');
      }
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Step 1
  // ==========================================
  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-800">
        بياناتك الأساسية
      </h3>

      <p className="text-gray-600">
        يرجى ملء البيانات التالية للتواصل معك
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            الاسم الكامل *
          </label>

          <input
            type="text"
            name="client.fullName"
            value={formData.client.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="أدخل اسمك كاملاً"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            البريد الإلكتروني *
          </label>

          <input
            type="email"
            name="client.email"
            value={formData.client.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="example@domain.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            رقم الجوال *
          </label>

          <input
            type="tel"
            name="client.phone"
            value={formData.client.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="05xxxxxxxx"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            اسم الشركة (اختياري)
          </label>

          <input
            type="text"
            name="client.company"
            value={formData.client.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="اسم شركتك"
          />
        </div>
      </div>
    </div>
  );

  // ==========================================
  // Step 2
  // ==========================================
  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-800">
        تفاصيل العقار
      </h3>

      <p className="text-gray-600">
        أدخل المعلومات الأساسية عن العقار
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            نوع الطلب *
          </label>

          <select
            name="project.operationType"
            value={formData.project.operationType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            required
          >
            <option value="">اختر النوع</option>
            <option value="بيع">بيع</option>
            <option value="ايجار">ايجار</option>
            <option value="استثمار">استثمار</option>
            <option value="ضمان">ضمان</option>
            <option value="تبديل">تبديل</option>
            <option value="تسويق">تسويق</option>
            <option value="استشاره هندسيه">
              إستشاره هندسيه
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            نوع العقار *
          </label>

          <select
            name="project.estateType"
            value={formData.project.estateType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            required
          >
            <option value="">اختر نوع العقار</option>

            {propertesTypes?.map((item) => (
              <option
                key={item?._id}
                value={item?.name}
              >
                {item?.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            المنطقة *
          </label>

          <select
            name="project.governoate"
            value={formData.project.governoate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            required
          >
            <option value="">اختر المنطقة</option>

            {propertieRegions?.map((item) => (
              <option
                key={item?._id}
                value={item?.name}
              >
                {item?.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            المدينة (العنوان التفصيلي) *
          </label>

          <input
            type="text"
            name="project.city"
            value={formData.project.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="المدينة، الحي، الشارع، رقم المبنى"
            required
          />
        </div>

     <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            رقم القطعة
          </label>

          <input
            type="text"
            name="project.plotNumber"
            value={formData.project.plotNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="رقم القطعة"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            رقم الحوض
          </label>

          <input
            type="text"
            name="project.basinNumber"
            value={formData.project.basinNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="رقم الحوض"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            حالة العقار *
          </label>

          <select
            name="project.projectSatatus"
            value={formData.project.projectSatatus}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            required
          >
            <option value="">اختر الحالة</option>

            {PropertiesStauts?.map((item) => (
              <option
                key={item?._id}
                value={item?.name}
              >
                {item?.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            المساحة الكلية (م²) *
          </label>

          <input
            type="text"
            name="project.areaMatter"
            value={formData.project.areaMatter}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="مثال: 150"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            المساحة الداخلية (م²) *
          </label>

          <input
            type="text"
            name="project.internalArea"
            value={formData.project.internalArea}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="مثال: 120"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            المساحة الخارجية (م²) *
          </label>

          <input
            type="text"
            name="project.spaceOuteside"
            value={formData.project.spaceOuteside}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="مثال: 30"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            نوع المساحة الخارجية *
          </label>

          <select
            name="project.typeOfSpaceoutside"
            value={formData.project.typeOfSpaceoutside}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            required
          >
            <option value="">اختر النوع</option>
            <option value="حديقة">حديقة</option>
            <option value="حديقة مبلطة">حديقة مبلطة</option>
            <option value="تراس">تراس</option>
          </select>
        </div>

   

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            وصف المشروع *
          </label>

          <textarea
            name="project.projectDetails"
            value={formData.project.projectDetails}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            placeholder="اكتب وصفاً مفصلاً عن مشروعك، مميزاته، موقعه، وما يميزه"
            required
          />
        </div>

      </div>
    </div>
  );

  // ==========================================
  // Step 3
  // ==========================================
  const renderStep3 = () => {
    const downPaymentOptions = [];

    for (let i = 100000; i <= 700000; i += 50000) {
      downPaymentOptions.push(i);
    }

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-800">
          البيانات المالية والإضافية
        </h3>

        <p className="text-gray-600">
          أدخل التفاصيل المالية والمعلومات الإضافية
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              هل متوفر تقسيط؟ *
            </label>

            <select
              name="project.installments"
              value={formData.project.installments}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
              required
            >
              <option value="">اختر</option>
              <option value="نعم">نعم</option>
              <option value="لا">لا</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              السعر الإجمالي
            </label>

            <input
              type="number"
              name="project.estatePrice"
              value={formData.project.estatePrice}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
              placeholder="السعر الإجمالي للعقار"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              سعر المتر
            </label>

            <input
              type="number"
              name="project.materPriec"
              value={formData.project.materPriec}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
              placeholder="سعر المتر المربع"
            />
          </div>

          {formData.project.installments === "نعم" ? (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                الدفعة الأولى
              </label>

              <select
                name="project.installmentsFirstPyment"
                value={formData.project.installmentsFirstPyment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
              >
                <option value="">
                  اختر المبلغ (اختياري)
                </option>

                {downPaymentOptions.map((val) => (
                  <option key={val} value={val}>
                    {val.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {/* 
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              رفع صور المشروع (اختياري)
            </label>

            <input
              type="file"
              name="project.imagesURLs"
              multiple
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition outline-none bg-gray-50 hover:bg-white text-slate-800"
            />

            <p className="text-xs text-gray-500 mt-1">
              يمكنك رفع أكثر من صورة (حجم كل صورة لا يتجاوز 5 ميجابايت)
            </p>
          </div>
          */}

        </div>
      </div>
    );
  };

  // ==========================================
  // Fetch functions
  // ==========================================
  const fetchPropertiesType = async () => {
    try {
      const res = await authFetch.get('/region');

      setPropertiesType(res?.data?.data || []);
    } catch (err) {
      console.error('fetchPropertiesType error:', err);
    }
  };

  const fetchLocations = async () => {
    try {
      const res = await authFetch.get('/location');

      setPropertiesRegion(res?.data?.data || []);
    } catch (err) {
      console.error('fetchLocations error:', err);
    }
  };

  const fetchPropertyStauts = async () => {
    try {
      const res = await authFetch.get('/projectStatuts');

      setPropertiesSatuts(res?.data?.data || []);
    } catch (err) {
      console.error('fetchPropertyStauts error:', err);
    }
  };

  useEffect(() => {
    fetchPropertiesType();
    fetchLocations();
    fetchPropertyStauts();
  }, []);

  

  return (
    <>
  

      <div className="min-h-screen bg-slate-50">

        {/* ======== HERO ======== */}
        <section className="relative py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">

          <div className="absolute inset-0 opacity-30">

            <div className="absolute top-20 right-20 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl animate-float"></div>

            <div
              className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float"
              style={{
                animationDelay: '2s',
              }}
            ></div>

          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-lg text-xs font-black mb-6">
              شارك مشروعك مع منصة الراية just teats
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              أضف مشروعك أو عقارك{' '}
              <span className="text-amber-500">
                معنا
              </span>
            </h1>
            <h1 className='text-xl text-red'>
                just teats
            </h1>

            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
              في منصة الراية، نوفر لك فرصة لعرض مشروعك أمام آلاف المستفيدين والمستثمرين، مع دعم فني وهندسي متكامل لضمان وصول رسالتك بأفضل صورة.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <button
                onClick={scrollToForm}
                className="flex items-center cursor-pointer gap-2 bg-amber-500 text-white px-10 py-4 rounded-2xl font-bold hover:bg-amber-600 transition-all shadow-xl shadow-amber-200"
              >
                <HiOutlinePlus size={20} />

                أضف عقارك الآن
              </button>

            </div>
          </div>
        </section>

        {/* ======== WHY SHARE ======== */}
        <section className="py-20 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                لماذا تشارك مشروعك مع{' '}
                <span className="text-amber-500">
                  منصة الراية؟
                </span>
              </h2>

              <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
                نوفر لك بيئة متكاملة لعرض مشروعك باحترافية، مع مجموعة من المزايا التي تميزنا
              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="group bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">

                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 text-4xl mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  🏗️
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  استشارات فنية وهندسية
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  نقدم لك دعمًا هندسيًا وفنيًا متكاملًا لضمان تقديم مشروعك بأعلى معايير الجودة والاحترافية.
                </p>

              </div>

              <div className="group bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">

                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 text-4xl mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  📈
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  تسويق أوسع
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  نوفر لك قاعدة عريضة من المستفيدين والمستثمرين المهتمين بالقطاع العقاري، مما يزيد من فرص ظهور مشروعك.
                </p>

              </div>

              <div className="group bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">

                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 text-4xl mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  🤝
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  دعم متواصل
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  فريقنا متاح للإجابة على استفساراتك وتقديم المشورة طوال رحلة عرض مشروعك، من البداية حتى الإتمام.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* ======== FORM ======== */}
        <section
          ref={formRef}
          className="py-20 bg-gradient-to-b from-slate-50 to-white"
        >

          <div className="max-w-4xl mx-auto px-6">

            {!isSubmitted ? (

              <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-amber-100">

                {/* Stepper */}
                <div className="flex items-center justify-between mb-8">

                  <div className="flex items-center gap-4">

                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-lg">
                      {currentStep}
                    </span>

                    <span className="text-gray-500 font-medium">
                      من {totalSteps}
                    </span>

                  </div>

                  <div className="flex gap-2">

                    <div
                      className={`h-2 w-12 rounded-full ${
                        currentStep >= 1
                          ? 'bg-amber-500'
                          : 'bg-amber-200'
                      }`}
                    ></div>

                    <div
                      className={`h-2 w-12 rounded-full ${
                        currentStep >= 2
                          ? 'bg-amber-500'
                          : 'bg-amber-200'
                      }`}
                    ></div>

                    <div
                      className={`h-2 w-12 rounded-full ${
                        currentStep >= 3
                          ? 'bg-amber-500'
                          : 'bg-amber-200'
                      }`}
                    ></div>

                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">

                  {currentStep === 1 && renderStep1()}

                  {currentStep === 2 && renderStep2()}

                  {currentStep === 3 && renderStep3()}

                </div>

                {/* Error */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-100">

                  <button
                    onClick={handlePrev}
                    disabled={
                      currentStep === 1 || loading
                    }
                    className={`px-6 py-3 rounded-xl font-semibold transition ${
                      currentStep === 1 || loading
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    }`}
                  >
                    السابق
                  </button>

                  {currentStep === totalSteps ? (

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="px-8 py-3 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600 transition shadow-lg shadow-amber-200 flex items-center justify-center gap-2 disabled:opacity-70"
                    >

                      {loading ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        'إرسال الطلب'
                      )}

                    </button>

                  ) : (

                    <button
                      onClick={handleNext}
                      disabled={loading}
                      className="px-8 py-3 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600 transition shadow-lg shadow-amber-200"
                    >
                      التالي
                    </button>

                  )}

                </div>

              </div>

            ) : (

              // Success
              <div
                ref={successRef}
                className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-green-100"
              >

                <div className="flex justify-center mb-6">

                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-bounce">

                    <FaCheckCircle className="text-green-500 text-6xl" />

                  </div>

                </div>

                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  تم إرسال طلبك بنجاح!
                </h3>

                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  شكراً لك على مشاركة مشروعك معنا. سنقوم بالتواصل معك في أقرب وقت ممكن.
                </p>

                <button
                  onClick={() => {

                    setIsSubmitted(false);

                    setCurrentStep(1);

                    setError('');

                    setFormData({
                      client: {
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                      },

                      project: {
                        estateType: '',
                        governoate: '',
                        city: '',
                        projectSatatus: '',
                        operationType: '',
                        areaMatter: '',
                        internalArea: '',
                        spaceOuteside: '',
                        typeOfSpaceoutside: '',
                        installments: '',
                        estatePrice: '',
                        materPriec: '',
                        installmentsFirstPyment: '',
                        plotNumber: '',
                        basinNumber: '',
                        projectDetails: '',
                        imagesURLs: [],
                      },
                    });

                    setTimeout(() => {

                      formRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });

                    }, 100);

                  }}
                  className="mt-8 px-8 py-3 rounded-xl font-semibold text-white bg-amber-500 hover:bg-amber-600 transition shadow-lg shadow-amber-200"
                >
                  إضافة عقار آخر
                </button>

              </div>

            )}

          </div>
        </section>

      </div>
    </>
  );
};

export default AddProperty;
