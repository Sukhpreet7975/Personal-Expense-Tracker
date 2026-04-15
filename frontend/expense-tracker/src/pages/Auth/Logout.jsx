import React, { useContext, useState, useEffect } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { LuLogOut, LuCheck } from 'react-icons/lu'

const Logout = () => {
  const { logout, user } = useContext(UserContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    // If user is not present, redirect to login
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleLogout = () => {
    if (isConfirmed || loading) return

    // start confirmation animation
    setIsConfirmed(true)

    // wait for animation to finish before performing actual logout
    const ANIM_DURATION = 800 // ms
    setTimeout(() => {
      setLoading(true)
      try {
        logout()
        toast.success('Logged out successfully')
        navigate('/login')
      } catch (error) {
        toast.error('Error logging out')
        // If error, revert animation
        setIsConfirmed(false)
      } finally {
        setLoading(false)
      }
    }, ANIM_DURATION)
  }

  const handleCancel = () => {
    if (loading) return
    navigate('/dashboard')
  }

  return (
    <DashboardLayout activeMenu="Logout">
      <div className='flex items-center justify-center h-[calc(100vh-60px)] px-4'>
        <div className='w-full max-w-md p-6'>
          <div className={`relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl p-6 text-center shadow-lg overflow-hidden transition-all duration-500 ${isConfirmed ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}`}>

            {/* Question / Action State */}
            <div className={`flex flex-col items-center gap-4 transition-opacity duration-400 ${isConfirmed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className='bg-red-50 text-red-600 rounded-full p-3 shadow-md'>
                <LuLogOut className='text-2xl' />
              </div>

              <h2 className='text-2xl font-semibold'>Are you sure you want to log out?</h2>

              <p className='text-sm text-gray-600'>
                You will be signed out of your account{user?.fullName ? `, ${user.fullName}` : ''}.
              </p>

              <div className='flex gap-3 mt-4'>
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className='flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition ease-in-out duration-150'
                >
                  <LuLogOut className='text-lg' />
                  Logout
                </button>

                <button
                  onClick={handleCancel}
                  className='flex items-center gap-2 border border-purple-600 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50 transition ease-in-out duration-150'
                >
                  Cancel
                </button>
              </div>

              <small className='text-gray-400 mt-3'>If you don't want to log out, click Cancel to return to the dashboard.</small>
            </div>

            {/* Success / Animation State */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isConfirmed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className='bg-green-50 text-green-600 rounded-full p-4 shadow-md transform transition-transform duration-500 scale-100'>
                <LuCheck className='text-3xl animate-pulse' />
              </div>

              <h3 className='mt-4 text-lg font-semibold'>Logged out</h3>
              <p className='text-sm text-gray-500'>Redirecting to login...</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Logout
